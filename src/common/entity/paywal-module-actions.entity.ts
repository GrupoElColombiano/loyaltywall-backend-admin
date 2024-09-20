import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PaywallModuleAction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
