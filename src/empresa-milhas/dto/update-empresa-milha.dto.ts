import { PartialType } from '@nestjs/mapped-types';
import { IsAlphanumeric, IsNotEmpty } from 'class-validator';
import { CreateEmpresaMilhaDto } from './create-empresa-milha.dto';

export class UpdateEmpresaMilhaDto extends PartialType(CreateEmpresaMilhaDto) {
    @IsAlphanumeric()    
    nome: string;

    @IsAlphanumeric()    
    logo: string;

    @IsAlphanumeric()    
    url: string;

}
