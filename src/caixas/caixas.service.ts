import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCaixaDto } from './dto/create-caixa.dto';
import { UpdateCaixaDto } from './dto/update-caixa.dto';
import { Caixa } from './entities/caixa.entity';

@Injectable()
export class CaixasService {

  constructor(
    @InjectModel(Caixa)
    private caixaModel: typeof Caixa
  ) {}

  // create(createCaixaDto: CreateCaixaDto) {
  //   this.caixaModel.create(createCaixaDto);
  // }

  async create(caixa: Caixa) {
    this.caixaModel.create(caixa);
  }

  async findAll(): Promise<Caixa[]> {
    return this.caixaModel.findAll();
  }

  async findOne(id: number): Promise<Caixa> {
    return this.caixaModel.findByPk(id);
  }

  // async update(id: number, updateCaixaDto: UpdateCaixaDto) {
  //   return `This action updates a #${id} caixa`;
  // }

  async update(id: number, caixa: Caixa):Promise<[number, Caixa[]]> {
    return this.caixaModel.update(caixa, {
      where: { 
        id: caixa.id 
      }
    });
  }

  async remove(id: number) {
    const caixa:Caixa = await this.findOne(id);
    caixa.destroy();
  }
}
