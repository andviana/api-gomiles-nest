import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { Entrada } from './entities/entrada.entity';
import { v4 as uuid } from 'uuid';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Programa } from 'src/programas/entities/programa.entity';
import { TipoEntrada } from 'src/tipo-entradas/entities/tipo-entrada.entity';
import { Movimento } from 'src/movimentos/entities/movimento.entity';
import { Caixa } from 'src/caixas/entities/caixa.entity';

@Injectable()
export class EntradasService {

  constructor(
    @InjectModel(Entrada)
    private entradaModel: typeof Entrada,
    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario,
    @InjectModel(Programa)
    private programaModel: typeof Programa,
    @InjectModel(TipoEntrada)
    private tipoEntradaModel: typeof TipoEntrada,
    @InjectModel(Movimento)
    private movimentoModel: typeof Movimento
  ) { }

  async create(createEntradaDto: CreateEntradaDto): Promise<Entrada> {
    const { idPrograma, idTipoEntrada, idUsuario, ...rest } = createEntradaDto;    

    let entrada = {
      ...rest,
      idPrograma,
      idTipoEntrada,
      idUsuario,
      codigo: uuid(),
      dataEntrada: new Date(),
      valorMilha: createEntradaDto.valor / createEntradaDto.milhas
    } as Entrada;    

    let movimento = {
      entrada,
      idUsuario,
      idCaixa: 1,
      codigo: uuid(),
      data: entrada.dataEntrada,
      tipoOperacao: 'C',
      valor: entrada.valor,
      quantidade: entrada.milhas,
    } as Movimento;

    movimento = await this.movimentoModel.create(movimento, { include: [Entrada] });
    
    const resultado = await this.entradaModel.findByPk(movimento.entrada.id, {include:[Movimento,Programa,TipoEntrada,Usuario]});
    return resultado['dataValues'] as Entrada;

  }

  async findAll(): Promise<Entrada[]> {
    return this.entradaModel.findAll();
  }

  async findOne(id: number): Promise<Entrada> {
    return this.entradaModel.findByPk(id);
  }

  async update(id: number, updateEntradaDto: UpdateEntradaDto): Promise<[number, Entrada[]]> {
    const { idPrograma, idTipoEntrada, idUsuario, ...rest } = updateEntradaDto;
    const programa = idPrograma ? await this.programaModel.findByPk(idPrograma) : null;
    const tipoEntrada = idTipoEntrada ? await this.tipoEntradaModel.findByPk(idTipoEntrada) : null;
    let entrada = { ...rest } as Entrada;
    if (programa) {
      entrada.programa = programa;
    }
    if (tipoEntrada) {
      entrada.tipoEntrada = tipoEntrada;
    }
    return this.entradaModel.update(entrada, {
      where: {
        id: id
      }
    })
  }

  async remove(id: number): Promise<void> {
    const entrada = await this.findOne(id);
    entrada.destroy();
  }
}
