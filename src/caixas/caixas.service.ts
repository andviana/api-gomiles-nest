import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCaixaDto } from './dto/create-caixa.dto';
import { UpdateCaixaDto } from './dto/update-caixa.dto';
import { Caixa } from './entities/caixa.entity';
import { v4 as uuid } from 'uuid'

/** 
 * TODO:
 * abrir caixa
 * fechar caixa
 * pegar ultimo caixa
 * verificar caixa aberto
 * calcular resumo caixa
 * */




@Injectable()
export class CaixasService {

  constructor(
    @InjectModel(Caixa)
    private caixaModel: typeof Caixa
  ) {}

  async create(createCaixaDto: CreateCaixaDto):Promise<Caixa> {
    let caixa = {...createCaixaDto} as Caixa;
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

  async update(id: number, updateCaixaDto: UpdateCaixaDto):Promise<[number, Caixa[]]> {
    return this.caixaModel.update(updateCaixaDto, {
      where: { 
        id: id 
      }
    });
  }

  async remove(id: number) {
    const caixa:Caixa = await this.findOne(id);
    caixa.destroy();
  }
}
