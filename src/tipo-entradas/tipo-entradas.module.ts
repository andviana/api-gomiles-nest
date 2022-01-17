import { Module } from '@nestjs/common';
import { TipoEntradasService } from './tipo-entradas.service';
import { TipoEntradasController } from './tipo-entradas.controller';

@Module({
  controllers: [TipoEntradasController],
  providers: [TipoEntradasService]
})
export class TipoEntradasModule {}
