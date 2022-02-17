import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Entrada } from 'src/entradas/entities/entrada.entity';

@Table({timestamps:true, paranoid:true})
export class TipoEntrada extends Model<TipoEntrada> {
  @Column({ type: DataType.STRING(60), allowNull: false })
  descricao: string;

  @HasMany(() => Entrada)
  entradas?: Entrada[];
}
