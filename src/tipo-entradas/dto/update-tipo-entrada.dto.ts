import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoEntradaDto } from './create-tipo-entrada.dto';

export class UpdateTipoEntradaDto extends PartialType(CreateTipoEntradaDto) {}
