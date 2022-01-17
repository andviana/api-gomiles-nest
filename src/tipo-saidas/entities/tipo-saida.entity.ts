import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';

import { Saida } from 'src/saidas/entities/saida.entity';

@Table
export class TipoSaida extends Model<TipoSaida> {
  @Column({ type: DataType.STRING(60), allowNull: false })
  descricao: string;

  //onetomany
  @HasMany(() => Saida)
  saidas?: Saida[];
}
