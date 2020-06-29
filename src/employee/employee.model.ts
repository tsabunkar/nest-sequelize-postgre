import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';
import { DatabaseModel } from 'src/database/database.model';

@Table({ tableName: 'employee' })
// export class Employee extends DatabaseModel<Employee> {
export class Employee extends Model<Employee> {
  @PrimaryKey
  @Column({ type: DataType.INTEGER, field: 'empno' })
  empno: number;

  @Column({ type: DataType.STRING, field: 'name' })
  name: string;
}
