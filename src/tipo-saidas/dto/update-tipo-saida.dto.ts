import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoSaidaDto } from './create-tipo-saida.dto';

export class UpdateTipoSaidaDto extends PartialType(CreateTipoSaidaDto) {}
