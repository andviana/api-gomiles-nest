import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpresaMilhaDto } from './create-empresa-milha.dto';

export class UpdateEmpresaMilhaDto extends PartialType(CreateEmpresaMilhaDto) {}
