// En la entidad Events
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Site {
  @PrimaryGeneratedColumn()
  idSite: number;
  @Column()
  name: string;
  @Column()
  description: string;
}
