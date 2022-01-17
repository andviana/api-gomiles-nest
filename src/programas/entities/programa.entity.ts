import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Entrada } from 'src/entradas/entities/entrada.entity';
import { Saida } from 'src/saidas/entities/saida.entity';

@Table
export class Programa extends Model<Programa> {
  @Column({ type: DataType.STRING, allowNull: false })
  nome: string;

  @Column({ type: DataType.STRING, allowNull: false })
  logo: string;

  @Column({ type: DataType.TEXT })
  descricao: string;

  @Column({ type: DataType.STRING, allowNull: false })
  url: string;

  //onetomany
  @HasMany(() => Entrada)
  entradas?: Entrada[];

  //onetomany
  @HasMany(() => Saida)
  saidas?: Saida[];
}
