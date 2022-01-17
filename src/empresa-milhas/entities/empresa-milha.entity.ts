import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Saida } from 'src/saidas/entities/saida.entity';

@Table
export class EmpresaMilha extends Model<EmpresaMilha> {
  @Column({ type: DataType.STRING, allowNull: false })
  nome: string;

  @Column({ type: DataType.STRING, allowNull: false })
  logo: string;

  @Column({ type: DataType.STRING, allowNull: false })
  url: string;

  @HasMany(() => Saida)
  saidas?: Saida[];
}
