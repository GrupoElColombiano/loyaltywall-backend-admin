import { Site } from '../../sites/entities/site.entity';
import {
  Entity,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ExpireTimePoint {
  @PrimaryGeneratedColumn()
  id_expire_time: number;

  @Column()
  expire_time: number;

  @Column()
  is_active: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  update_at: Date;

  @ManyToOne(() => Site, (site) => site.expire_time_point)
  @JoinColumn({ name: 'site_id' })
  site: Site;
}
