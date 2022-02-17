import { PartialType } from '@nestjs/mapped-types';
import { IsDecimal, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateMovimentoDto } from './create-movimento.dto';

export class UpdateMovimentoDto extends PartialType(CreateMovimentoDto) {

    @IsNotEmpty()
    @IsDecimal()
    valor: number;

    @IsNotEmpty()
    @IsNumber()
    quantidade: number;


}
