import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEmpresaMilhaDto } from './dto/create-empresa-milha.dto';
import { UpdateEmpresaMilhaDto } from './dto/update-empresa-milha.dto';
import { EmpresaMilha } from './entities/empresa-milha.entity';

@Injectable()
export class EmpresaMilhasService {

  constructor(
    @InjectModel(EmpresaMilha)
    private empresaMilhaModel: typeof EmpresaMilha
  ) { }

  async create(createEmpresaMilhaDto: CreateEmpresaMilhaDto):Promise<EmpresaMilha> {
    let empresaMilha = {...createEmpresaMilhaDto} as EmpresaMilha;
    return this.empresaMilhaModel.create(empresaMilha);
  }

  async findAll():Promise<EmpresaMilha[]> {
    return this.empresaMilhaModel.findAll();
  }

  async findOne(id: number): Promise<EmpresaMilha> {
    return this.empresaMilhaModel.findByPk(id);
  }

  async update(id: number, updateEmpresaMilhaDto: UpdateEmpresaMilhaDto) {
    return this.empresaMilhaModel.update(updateEmpresaMilhaDto, {
      where: {
        id: id
      }
    });
  }

  async remove(id: number):Promise<void> {
    const empresaMilha:EmpresaMilha = await this.findOne(id);
    empresaMilha.destroy();
  }
}
