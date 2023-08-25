import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/index';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 0,
      username: 'firstUser',
      password: 'F1password'
    },
    {
      id: 1,
      username: 'secondUser',
      password: 'S1password'
    },
    {
      id: 2,
      username: 'thirdUser',
      password: 'T1password'
    },
    {
      id: 3,
      username: 'fourthUser',
      password: 'F2password'
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
