import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize/dist';
import { Entrada } from 'src/entradas/entities/entrada.entity';
import { CreateTipoEntradaDto } from './dto/create-tipo-entrada.dto';
import { UpdateTipoEntradaDto } from './dto/update-tipo-entrada.dto';
import { TipoEntrada } from './entities/tipo-entrada.entity';

@Injectable()
export class TipoEntradasService {

  constructor(
    @InjectModel(TipoEntrada)
    private tipoEntradaModel: typeof TipoEntrada
  ) { }

  async create(createTipoEntradaDto: CreateTipoEntradaDto): Promise<TipoEntrada> {
    let tipoEntrada = { ...createTipoEntradaDto } as TipoEntrada;
    return this.tipoEntradaModel.create(tipoEntrada);
  }

  async findAll(): Promise<TipoEntrada[]> {
    return this.tipoEntradaModel.findAll({include:[Entrada]});
  }

  async findOne(id: number): Promise<TipoEntrada> {
    return this.tipoEntradaModel.findByPk(id);
  }

  async update(id: number, updateTipoEntradaDto: UpdateTipoEntradaDto): Promise<[number, TipoEntrada[]]> {
    return this.tipoEntradaModel.update(updateTipoEntradaDto, { where: { id: id } })
  }

  async remove(id: number):Promise<void> {
    const tipoEntrada = await this.findOne(id);
    tipoEntrada.destroy()
  }

  async resumoEntradas():Promise<TipoEntrada[]> {
    return this.tipoEntradaModel.findAll()
  }
}
