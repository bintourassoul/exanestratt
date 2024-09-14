import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('form') 
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  message: string;

}
