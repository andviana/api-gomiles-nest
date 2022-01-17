import { Module } from '@nestjs/common';
import { EmpresaMilhasService } from './empresa-milhas.service';
import { EmpresaMilhasController } from './empresa-milhas.controller';

@Module({
  controllers: [EmpresaMilhasController],
  providers: [EmpresaMilhasService],
})
export class EmpresaMilhasModule {}
