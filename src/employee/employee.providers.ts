import { Employee } from './employee.model';
import { EMPLOYEE_REPOSITORY } from 'src/constants';

export const employeeProviders = [
  {
    provide: EMPLOYEE_REPOSITORY,
    useValue: Employee,
  },
];
