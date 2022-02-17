import { Module } from '@nestjs/common';
import { CaixasService } from './caixas.service';
import { CaixasController } from './caixas.controller';
import { MovimentosService } from 'src/movimentos/movimentos.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Module({
  controllers: [CaixasController],
  providers: [CaixasService, MovimentosService, UsuariosService],
})
export class CaixasModule {}
