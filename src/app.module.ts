import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaixasModule } from './caixas/caixas.module';
import { EmpresaMilhasModule } from './empresa-milhas/empresa-milhas.module';
import { MovimentosModule } from './movimentos/movimentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { ProgramasModule } from './programas/programas.module';
import { EntradasModule } from './entradas/entradas.module';
import { SaidasModule } from './saidas/saidas.module';
import { TipoEntradasModule } from './tipo-entradas/tipo-entradas.module';
import { TipoSaidasModule } from './tipo-saidas/tipo-saidas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
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

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'teste',
      database: 'go_miles',
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
    CaixasModule,
    EmpresaMilhasModule,
    MovimentosModule,
    PessoasModule,
    ProgramasModule,
    EntradasModule,
    SaidasModule,
    TipoEntradasModule,
    TipoSaidasModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
