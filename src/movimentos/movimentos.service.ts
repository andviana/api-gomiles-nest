import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMovimentoDto } from './dto/create-movimento.dto';
import { UpdateMovimentoDto } from './dto/update-movimento.dto';
import { Movimento } from './entities/movimento.entity';
import { v4 as uuid } from 'uuid'
import { Caixa } from 'src/caixas/entities/caixa.entity';
import { Entrada } from 'src/entradas/entities/entrada.entity';
import { Saida } from 'src/saidas/entities/saida.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class MovimentosService {

  constructor(
    @InjectModel(Movimento)
    private movimentoModel: typeof Movimento,
    @InjectModel(Caixa)
    private caixaModel: typeof Caixa,
    @InjectModel(Entrada)
    private entradaModel: typeof Entrada,
    @InjectModel(Saida)
    private saidaModel: typeof Saida,
    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario,
  ) { }

  async create(createMovimentoDto: CreateMovimentoDto): Promise<Movimento> {
    const { idCaixa, idEntrada, idSaida, idUsuario, ...rest } = createMovimentoDto;
    const caixa = idCaixa ? await this.caixaModel.findByPk(idCaixa) : null;
    const entrada = idEntrada ? await this.entradaModel.findByPk(idEntrada) : null;
    const saida = idSaida ? await this.saidaModel.findByPk(idSaida) : null;
    const usuario = idUsuario ? await this.usuarioModel.findByPk(idUsuario) : null;
    let movimento = {
      ...rest,
      codigo: uuid(),
      data: new Date(),
      tipoOperacao: 'C',
      caixa,
      usuario,
      saida: saida ?? null,
      entrada: entrada ?? null,
    } as Movimento;
    return this.movimentoModel.create(movimento);
  }

  async findAll(): Promise<Movimento[]> {
    return this.movimentoModel.findAll({ include: [Usuario, Entrada, Saida, Caixa] });
  }

  async findOne(id: number): Promise<Movimento> {
    return this.movimentoModel.findByPk(id);
  }

  async update(id: number, updateMovimentoDto: UpdateMovimentoDto): Promise<[number, Movimento[]]> {
    const { idCaixa, idSaida, idEntrada, idUsuario, ...rest } = updateMovimentoDto;
    return this.movimentoModel.update(rest, { where: { id: id } });
  }

  async remove(id: number): Promise<void> {
    const movimento = await this.findOne(id);
    movimento.destroy();
  }
}
