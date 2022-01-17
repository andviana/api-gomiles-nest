import { Module } from '@nestjs/common';
import { TipoSaidasService } from './tipo-saidas.service';
import { TipoSaidasController } from './tipo-saidas.controller';

@Module({
  controllers: [TipoSaidasController],
  providers: [TipoSaidasService]
})
export class TipoSaidasModule {}
