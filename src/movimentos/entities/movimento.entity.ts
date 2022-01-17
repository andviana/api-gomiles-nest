import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Caixa } from 'src/caixas/entities/caixa.entity';
import { Entrada } from 'src/entradas/entities/entrada.entity';
import { Saida } from 'src/saidas/entities/saida.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Table
export class Movimento extends Model<Movimento> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  codigo: string;

  @Column({ type: DataType.STRING(1) })
  tipoOperacao: string;

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  data: Date;

  @Column({ type: DataType.DECIMAL(10, 2) })
  valor: number;

  @Column({ type: DataType.INTEGER })
  quantidade: number;

  //manytoone
  @BelongsTo(() => Caixa)
  caixa: Caixa;
  @ForeignKey(() => Caixa)
  idCaixa: Caixa;

  //manytoone
  @BelongsTo(() => Usuario)
  usuario: Usuario;
  @ForeignKey(() => Usuario)
  idUsuario: Usuario;

  //onetoone
  @BelongsTo(() => Entrada)
  entrada?: Entrada;
  @ForeignKey(() => Entrada)
  idEntrada: Entrada;

  //onetoone
  @BelongsTo(() => Saida)
  saida?: Saida;
  @ForeignKey(() => Saida)
  idSaida: Saida;
}
