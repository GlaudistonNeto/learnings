import { ClassSerializerInterceptor, Controller, Get, Post, HttpException, HttpStatus, Inject, Param, UseInterceptors, ParseIntPipe, UseFilters } from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
    ) {}
    
  @Get('')
  getUsers() {
    return this.userService.getUsers();
  }
    
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/username/:username')
  getByUsername(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);
    if (user) return new SerializedUser(user);
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }
  
  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('id/:id')
  getById(@Param('id', ParseIntPipe) id: number ) {
    const user = this.userService.getUserById(id);
    if (user) return new SerializedUser(user);
    else {
      throw new UserNotFoundException();
    }
  }
}
