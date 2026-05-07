import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class EmployeesService {
  private employees: CreateEmployeeDto[] = [{
    id: uuidv4(),
    name: "Alberto",
    lastName: "Costas",
    phoneNumber: "4423541234"
  },
  {
  id: uuidv4(), 
  name: "Jose",
  lastName: "Perez",
  phoneNumber: "4428791234"
  }
]
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id = uuidv4();
    this.employees.push(createEmployeeDto);
    return createEmployeeDto;
}

  findAll() {
    return this.employees;
  }

  findOne(id: string) {
    const employee = this.employees.filter((employee)=>employee.id ===id)[0];
    if(!employee) throw new NotFoundException();
    return employee;
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    let employeeToUpdate = this.findOne(id);
    employeeToUpdate = {
      ...employeeToUpdate,
      ...updateEmployeeDto, 
    }
    if (employeeToUpdate) throw new NotFoundException();
    this.employees = this.employees.map((employee) => {
      if(employee.id === id) {
        employee = employeeToUpdate
      }
      return employee
    })
    return employeeToUpdate;
  }

  remove(id: string) {
    this.findOne(id);
    this.employees = this.employees.filter((employee)=>employee.id !== id); 
    return this.employees;
  }
}
