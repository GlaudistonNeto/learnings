import { IsEmail, IsNotEmpty, IsNumberString, ValidateNested } from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty() // can be removed if it's not really needed
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}

