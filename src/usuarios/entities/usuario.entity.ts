import { FORMERR } from 'dns';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Index,
  Model,
  Table,
} from 'sequelize-typescript';
import { Caixa } from 'src/caixas/entities/caixa.entity';
import { Entrada } from 'src/entradas/entities/entrada.entity';
import { Movimento } from 'src/movimentos/entities/movimento.entity';
import { Pessoa } from 'src/pessoas/entities/pessoa.entity';
import { Saida } from 'src/saidas/entities/saida.entity';

@Table({timestamps:true, paranoid:true})
export class Usuario extends Model<Usuario> {
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  username: string;

  @Column({ type: DataType.JSON, allowNull: false })
  roles: string;

  @Column({
    type: DataType.STRING(64),
    validate: { is: /^[0-9a-f]{64}$/i },
    allowNull: false,
  })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  codigo: string;

  @BelongsTo(() => Pessoa)
  pessoa: Pessoa;
  @ForeignKey(() => Pessoa)
  idPessoa: Pessoa;

  @HasMany(() => Caixa)
  caixas?: Caixa[];

  @HasMany(() => Movimento)
  movimentos?: Movimento[];

  @HasMany(() => Entrada)
  entradas?: Entrada[];

  @HasMany(() => Saida)
  saida?: Saida[];
}
