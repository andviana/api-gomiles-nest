import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';

@Injectable()
export class ProgramasService {

  constructor(
    @InjectModel(Programa)
    private programaModel: typeof Programa
  ) { }

  async create(createProgramaDto: CreateProgramaDto): Promise<Programa> {
    let programa = { ...createProgramaDto } as Programa;
    return this.programaModel.create(programa);
  }

  async findAll(): Promise<Programa[]> {
    return this.programaModel.findAll();
  }

  async findOne(id: number): Promise<Programa> {
    return this.programaModel.findByPk(id);
  }

  async update(id: number, updateProgramaDto: UpdateProgramaDto): Promise<[number, Programa[]]> {
    return this.programaModel.update(updateProgramaDto, { where: { id: id } });
  }

  async remove(id: number):Promise<void> {
    const programa = await this.findOne(id);
    programa.destroy();    
  }
}
