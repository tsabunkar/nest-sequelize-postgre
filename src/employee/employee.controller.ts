import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';

@Controller('/api/v1')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get('employees')
  async findAllEmployees(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get('employee')
  async findEmployeeByAttribute(): Promise<Employee[]> {
    return this.employeeService.findParticular();
  }

  @Post('employee')
  async postEmployee(@Body() reqBody: any): Promise<Employee> {
    console.log(reqBody);
    return this.employeeService.post(reqBody);
  }

  @Delete('employee')
  async deleteEmployee(@Body() reqBody: any): Promise<number> {
    console.log(reqBody);
    return this.employeeService.delete(reqBody);
  }
}
