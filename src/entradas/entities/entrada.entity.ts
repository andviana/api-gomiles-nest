import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Movimento } from 'src/movimentos/entities/movimento.entity';
import { Programa } from 'src/programas/entities/programa.entity';
import { TipoEntrada } from 'src/tipo-entradas/entities/tipo-entrada.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
@Table
export class Entrada extends Model<Entrada> {
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

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  dataEntrada: Date;

  //onetone
  @HasOne(() => Movimento)
  movimento: Movimento;

  //manytoone
  @BelongsTo(() => Programa)
  programa: Programa;
  @ForeignKey(() => Programa)
  idPrograma: number;

  //manytoone
  @BelongsTo(() => TipoEntrada)
  tipoEntrada: TipoEntrada;
  @ForeignKey(() => TipoEntrada)
  idTipoEntrada: number;

  //manytoone
  @BelongsTo(() => Usuario)
  usuario: Usuario;
  @ForeignKey(() => Usuario)
  idUsuario: number;
}
