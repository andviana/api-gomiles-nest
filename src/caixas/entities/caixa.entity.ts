import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Movimento } from 'src/movimentos/entities/movimento.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Table
export class Caixa extends Model<Caixa> {
  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  dataAbertura: Date;

  @Column({ type: DataType.DATE })
  dataFechamento?: Date;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  ativo: boolean;

  @Column({ type: DataType.INTEGER })
  saldoMilhas: number;

  @Column({ type: DataType.INTEGER })
  totalEntradas: number;

  @Column({ type: DataType.DECIMAL(10, 2) })
  valorEntradas: number;

  @Column({ type: DataType.INTEGER })
  totalSaidas: number;

  @Column({ type: DataType.DECIMAL(10, 2) })
  valorSaidas: number;

  @Column({ type: DataType.DECIMAL(10, 2) })
  valorEstoqueMilhasPeriodo: number;

  @Column({ type: DataType.DECIMAL(10, 2) })
  valorLucroMilhasPeriodo: number;

  @Column({ type: DataType.DECIMAL(10, 2) })
  valorMédioMilhaPeriodo: number;

  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  codigo: string;

  //manyToOne;
  @BelongsTo(() => Usuario)
  usuarioFechamento: Usuario;
  @ForeignKey(() => Usuario)
  idUsuarioFechamento: Usuario;

  //OnetoMany;
  @HasMany(() => Movimento)
  movimentos: Movimento[];
}
