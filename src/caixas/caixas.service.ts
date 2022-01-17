import { Injectable } from '@nestjs/common';
import { CreateCaixaDto } from './dto/create-caixa.dto';
import { UpdateCaixaDto } from './dto/update-caixa.dto';

@Injectable()
export class CaixasService {
  create(createCaixaDto: CreateCaixaDto) {
    return 'This action adds a new caixa';
  }

  findAll() {
    return `This action returns all caixas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} caixa`;
  }

  update(id: number, updateCaixaDto: UpdateCaixaDto) {
    return `This action updates a #${id} caixa`;
  }

  remove(id: number) {
    return `This action removes a #${id} caixa`;
  }
}
