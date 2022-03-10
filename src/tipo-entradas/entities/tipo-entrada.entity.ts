import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Entrada } from 'src/entradas/entities/entrada.entity';

@Table({ timestamps: true, paranoid: true })
export class TipoEntrada extends Model<TipoEntrada> {
  @Column({ type: DataType.STRING(60), allowNull: false })
  descricao: string;

  @HasMany(() => Entrada)
  entradas?: Entrada[];

  getCountEntradas(): number {
    return this.entradas ? this.entradas.length : 0;
  }

  getTotalEntradas(): number {
    if (this.entradas.length < 1)
      return 0;
    return this.entradas.reduce((acc, curr) => acc + curr.valor, 0)

  }


}
