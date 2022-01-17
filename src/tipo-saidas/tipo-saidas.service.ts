import { Injectable } from '@nestjs/common';
import { CreateTipoSaidaDto } from './dto/create-tipo-saida.dto';
import { UpdateTipoSaidaDto } from './dto/update-tipo-saida.dto';

@Injectable()
export class TipoSaidasService {
  create(createTipoSaidaDto: CreateTipoSaidaDto) {
    return 'This action adds a new tipoSaida';
  }

  findAll() {
    return `This action returns all tipoSaidas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoSaida`;
  }

  update(id: number, updateTipoSaidaDto: UpdateTipoSaidaDto) {
    return `This action updates a #${id} tipoSaida`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoSaida`;
  }
}
