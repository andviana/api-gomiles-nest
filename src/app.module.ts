import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Caixa } from './caixas/entities/caixa.entity';
import { EmpresaMilha } from './empresa-milhas/entities/empresa-milha.entity';
import { Entrada } from './entradas/entities/entrada.entity';
import { Movimento } from './movimentos/entities/movimento.entity';
import { Pessoa } from './pessoas/entities/pessoa.entity';
import { Programa } from './programas/entities/programa.entity';
import { Saida } from './saidas/entities/saida.entity';
import { TipoEntrada } from './tipo-entradas/entities/tipo-entrada.entity';
import { TipoSaida } from './tipo-saidas/entities/tipo-saida.entity';
import { Usuario } from './usuarios/entities/usuario.entity';
import { CaixasController } from './caixas/caixas.controller';
import { CaixasService } from './caixas/caixas.service';
import { EmpresaMilhasController } from './empresa-milhas/empresa-milhas.controller';
import { EntradasController } from './entradas/entradas.controller';
import { MovimentosController } from './movimentos/movimentos.controller';
import { PessoasController } from './pessoas/pessoas.controller';
import { ProgramasController } from './programas/programas.controller';
import { SaidasController } from './saidas/saidas.controller';
import { TipoEntradasController } from './tipo-entradas/tipo-entradas.controller';
import { TipoSaidasController } from './tipo-saidas/tipo-saidas.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { EmpresaMilhasService } from './empresa-milhas/empresa-milhas.service';
import { EntradasService } from './entradas/entradas.service';
import { MovimentosService } from './movimentos/movimentos.service';
import { PessoasService } from './pessoas/pessoas.service';
import { ProgramasService } from './programas/programas.service';
import { SaidasService } from './saidas/saidas.service';
import { TipoEntradasService } from './tipo-entradas/tipo-entradas.service';
import { TipoSaidasService } from './tipo-saidas/tipo-saidas.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([
      Caixa,
      EmpresaMilha,
      Entrada,
      Movimento,
      Pessoa,
      Programa,
      Saida,
      TipoEntrada,
      TipoSaida,
      Usuario,
    ]),

  ],
  controllers: [
    AppController, 
    CaixasController, 
    EmpresaMilhasController, 
    EntradasController, 
    MovimentosController, 
    PessoasController, 
    ProgramasController, 
    SaidasController, 
    TipoEntradasController, 
    TipoSaidasController, 
    UsuariosController
  ],
  providers: [
    AppService, 
    CaixasService,
    EmpresaMilhasService,
    EntradasService,
    MovimentosService,
    PessoasService,
    ProgramasService,
    SaidasService,
    TipoEntradasService,
    TipoSaidasService,
    UsuariosService
  ],
})
export class AppModule { }
