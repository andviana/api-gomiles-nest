import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Table({timestamps:true, paranoid:true})
export class Pessoa extends Model<Pessoa> {
  @Column({ type: DataType.STRING(), allowNull: false })
  nome: string;

  @Column({ type: DataType.STRING(11), allowNull: false })
  cpf: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  dataNascimento: Date;

  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  codigo: string;

  //onetomany
  @HasMany(() => Usuario)
  usuarios?: Usuario[];
}
