import { Module } from '@nestjs/common';
import { CaixasService } from './caixas.service';
import { CaixasController } from './caixas.controller';

@Module({
  controllers: [CaixasController],
  providers: [CaixasService],
})
export class CaixasModule {}
