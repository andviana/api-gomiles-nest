import { PartialType } from '@nestjs/mapped-types';
import { IsAlphanumeric, IsNotEmpty } from 'class-validator';
import { CreateEmpresaMilhaDto } from './create-empresa-milha.dto';

export class UpdateEmpresaMilhaDto extends PartialType(CreateEmpresaMilhaDto) {
    @IsAlphanumeric()
    @IsNotEmpty()
    nome: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    logo: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    url: string;

}
