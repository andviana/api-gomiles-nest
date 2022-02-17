import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCaixaDto } from './dto/create-caixa.dto';
import { UpdateCaixaDto } from './dto/update-caixa.dto';
import { Caixa } from './entities/caixa.entity';
import { v4 as uuid } from 'uuid'; import { Entrada } from 'src/entradas/entities/entrada.entity';
import { Saida } from 'src/saidas/entities/saida.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Movimento } from 'src/movimentos/entities/movimento.entity';
;

/** 
 * TODO:
 * abrir caixa
 * fechar caixa
 * pegar ultimo caixa
 * verificar caixa aberto
 * calcular resumo caixa
 * */

interface IResumoCaixa {
  saldoMilhas: number,
  totalEntradas: number,
  valorEntradas: number,
  totalSaidas: number,
  valorSaidas: number,
  valorEstoqueMilhasPeriodo: number,
  valorLucroMilhasPeriodo: number,
  valorMedioMilhaPeriodo: number,
}

@Injectable()
export class CaixasService {

  constructor(
    @InjectModel(Caixa)
    private caixaModel: typeof Caixa,
    @InjectModel(Movimento)
    private movimentoModel: typeof Movimento,
    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario,
  ) { }

  async create(createCaixaDto: CreateCaixaDto): Promise<Caixa> {
    let caixa = { ...createCaixaDto } as Caixa;
    caixa.codigo = uuid();
    caixa.dataAbertura = new Date();
    return this.caixaModel.create(caixa);
  }

  async findAll(): Promise<Caixa[]> {
    return this.caixaModel.findAll();
  }

  async findOne(id: number): Promise<Caixa> {
    return this.caixaModel.findByPk(id);
  }

  async update(id: number, updateCaixaDto: UpdateCaixaDto): Promise<[number, Caixa[]]> {
    return this.caixaModel.update(updateCaixaDto, {
      where: {
        id: id
      }
    });
  }

  async fecharCaixa(id: number, updateCaixaDto: UpdateCaixaDto): Promise<[number, Caixa[]]> {
    const { idUsuarioFechamento, ...rest } = updateCaixaDto;
    const usuarioFechamento = await this.usuarioModel.findByPk(idUsuarioFechamento);
    const movimentos = await this.movimentoModel.findAll({ where: { idCaixa: id } });
    const resumo = this.calcularResumoCaixa(movimentos);

    let caixa = {
      ...rest,
      ...resumo,
      dataFechamento: new Date(),
      usuarioFechamento,
    } as unknown as Caixa;
    const caixaFechado = await this.caixaModel.update(caixa, { where: { id: id } });
    await this.create({} as CreateCaixaDto);
    return caixaFechado;
  }

  async remove(id: number): Promise<void> {
    const caixa: Caixa = await this.findOne(id);
    caixa.destroy();
  }

  calcularResumoCaixa(movimentos: Movimento[]): IResumoCaixa {
    const entradas = movimentos.filter(item => item.tipoOperacao === 'C');
    const saidas = movimentos.filter(item => item.tipoOperacao === 'D');
    const totalEntradas = entradas.reduce((acc, curr) => acc += curr.quantidade, 0);
    const valorEntradas = entradas.reduce((acc, curr) => acc += curr.valor, 0);
    const totalSaidas = saidas.reduce((acc, curr) => acc += curr.quantidade, 0);
    const valorSaidas = saidas.reduce((acc, curr) => acc += curr.valor, 0);
    const valorMedioMilhaPeriodo = valorEntradas / totalEntradas;
    //pegar saldo do ultimo caixa
    const saldoAnterior = 0;
    const saldoMilhas = saldoAnterior + (totalEntradas - totalSaidas);
    const valorEstoqueMilhasPeriodo = saldoMilhas * valorMedioMilhaPeriodo;
    const valorMedioVendaMilhaPediodo = valorSaidas / totalSaidas;
    const valorLucroMilhasPeriodo = (valorMedioVendaMilhaPediodo - valorMedioMilhaPeriodo) * totalSaidas;
    return {
      saldoMilhas,
      totalEntradas,
      totalSaidas,
      valorEntradas,
      valorSaidas,
      valorEstoqueMilhasPeriodo,
      valorMedioMilhaPeriodo,
      valorLucroMilhasPeriodo
    } as IResumoCaixa
  }

  async buscarCaixaAtual(): Promise<Caixa> {
    const caixa = await this.caixaModel.findAll({ where: { ativo: true, dataFechamento: null, usuarioFechamento: null } })
    return caixa[0] || {} as Caixa;
  }
}



