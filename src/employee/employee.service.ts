import { Injectable, Inject } from '@nestjs/common';
import { Employee } from './employee.model';
import { EMPLOYEE_REPOSITORY } from 'src/constants';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY) private readonly crudRepo: typeof Employee,
  ) {}

  async findAll(): Promise<Employee[]> {
    return await this.crudRepo.findAll();
  }

  async findParticular(): Promise<Employee[]> {
    return await this.crudRepo.findAll({
      where: {
        empno: 7839,
      },
    });
  }

  async post(employee: Employee): Promise<Employee> {
    return await this.crudRepo.create(employee);
  }

  async delete(attributeVal: { empno: number }): Promise<number> {
    console.log(attributeVal);
    console.log(typeof attributeVal);
    return await this.crudRepo.destroy({
      where: {
        empno: attributeVal.empno,
      },
    });
  }
}
