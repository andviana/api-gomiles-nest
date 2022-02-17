import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsDecimal, IsString, IsNotEmpty } from 'class-validator';
import { CreateEntradaDto } from './create-entrada.dto';

export class UpdateEntradaDto extends PartialType(CreateEntradaDto) {
      
}
