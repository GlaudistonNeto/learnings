import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../../controllers/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [{
    id: 0,
    email: 'mail@mail.com',
    name: 'First One',
  },
  {
    id: 1,
    email: 'mail1@mail.com',
    name: 'Second One',
  },
  {
    id: 2,
    email: 'mail2@mail.com',
    name: 'Third One',
  },
  {
    id: 3,
    email: 'mail3@mail.com',
    name: 'Fourth One',
  },
];

findCustomerById(id: number) {
  return this.customers.find((user) => user.id === id);
}

createCustomer(customerDto: CreateCustomerDto) {
  this.customers.push(customerDto);
}

getCustomers() {
  return this.customers;
}
}
