import {
  Model,
  PrimaryKey,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
} from 'sequelize-typescript';

export abstract class DatabaseModel<T> extends Model<T> {
  @PrimaryKey
  @AutoIncrement
  @Column
  empno: number;

  /*   @Column({ type: DataType.STRING('50'), field: 'created_by' })
  created_by: string; */

  @CreatedAt
  created_at: Date;
}
