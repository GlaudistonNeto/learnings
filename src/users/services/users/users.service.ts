import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/index';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'firstUser',
      password: 'F1password'
    },
    {
      username: 'secondUser',
      password: 'S1password'
    },
    {
      username: 'thirdUser',
      password: 'T1password'
    },
    {
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
}
