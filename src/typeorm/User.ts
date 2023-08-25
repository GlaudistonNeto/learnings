import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    unique: true,
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;
}
