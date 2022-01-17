import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { EmpresaMilha } from 'src/empresa-milhas/entities/empresa-milha.entity';
import { Movimento } from 'src/movimentos/entities/movimento.entity';
import { Programa } from 'src/programas/entities/programa.entity';
import { TipoSaida } from 'src/tipo-saidas/entities/tipo-saida.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Table
export class Saida extends Model<Saida> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  codigo: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  milhas: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  valor: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  valorMilha: number;

  @Column({ type: DataType.DATE, allowNull: false })
  dataSaida: Date;

  @Column({ type: DataType.DATE })
  dataCompensacao: Date;

  //onetoone
  @HasOne(() => Movimento)
  movimento: Movimento;

  //manytoone
  @BelongsTo(() => EmpresaMilha)
  empresaMilha?: EmpresaMilha;
  @ForeignKey(() => EmpresaMilha)
  idEmpresaMilha: EmpresaMilha;

  //manytoone
  @BelongsTo(() => Programa)
  programa?: Programa;
  @ForeignKey(() => Programa)
  idPrograma: Programa;

  //manytoone
  @BelongsTo(() => TipoSaida)
  tipoSaida: TipoSaida;
  @ForeignKey(() => TipoSaida)
  idTipoSaida: TipoSaida;

  //manytoone
  @BelongsTo(() => Usuario)
  usuario: Usuario;
  @ForeignKey(() => Usuario)
  idUsuario: Usuario;
}
