import { Injectable } from '@nestjs/common';
import { CreateEmpresaMilhaDto } from './dto/create-empresa-milha.dto';
import { UpdateEmpresaMilhaDto } from './dto/update-empresa-milha.dto';

@Injectable()
export class EmpresaMilhasService {
  create(createEmpresaMilhaDto: CreateEmpresaMilhaDto) {
    return 'This action adds a new empresaMilha';
  }

  findAll() {
    return `This action returns all empresaMilhas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empresaMilha`;
  }

  update(id: number, updateEmpresaMilhaDto: UpdateEmpresaMilhaDto) {
    return `This action updates a #${id} empresaMilha`;
  }

  remove(id: number) {
    return `This action removes a #${id} empresaMilha`;
  }
}
