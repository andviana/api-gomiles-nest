import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsDate, IsDecimal, IsInt, IsObject } from 'class-validator';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { CreateCaixaDto } from './create-caixa.dto';

export class UpdateCaixaDto extends PartialType(CreateCaixaDto) {

    @IsDate()
    dataFechamento?: Date;

    @IsBoolean()
    ativo: boolean;

    @IsInt()
    saldoMilhas: number;

    @IsInt()
    totalEntradas: number;

    @IsDecimal()
    valorEntradas: number;

    @IsInt()
    totalSaidas: number;

    @IsDecimal()
    valorSaidas: number;

    @IsDecimal()
    valorEstoqueMilhasPeriodo: number;

    @IsDecimal()
    valorLucroMilhasPeriodo: number;

    @IsDecimal()
    valorMédioMilhaPeriodo: number;

    @IsObject()
    idUsuarioFechamento: Usuario;

}
