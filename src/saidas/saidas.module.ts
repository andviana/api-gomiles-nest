import { Module } from '@nestjs/common';
import { SaidasService } from './saidas.service';
import { SaidasController } from './saidas.controller';

@Module({
  controllers: [SaidasController],
  providers: [SaidasService],
})
export class SaidasModule {}
