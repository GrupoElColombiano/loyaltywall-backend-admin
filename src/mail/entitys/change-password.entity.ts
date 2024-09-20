import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ChangePasswordEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  email: string;

  @Column()
  token: string;
}
