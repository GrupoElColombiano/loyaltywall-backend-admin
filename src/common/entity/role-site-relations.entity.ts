import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Site } from '../../sites/entities/site.entity';

@Entity()
export class RoleSiteRelation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @ManyToOne(() => Site, { eager: false })
  @JoinColumn({ name: 'idSite' })
  site: Site;

  @Column({ nullable: true, default: false })
  isActive: boolean;
}
