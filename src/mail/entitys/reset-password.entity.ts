import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ResetPasswordEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  email: string;

  @Column()
  token: string;
}
