import { Site } from '../../sites/entities/site.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('point_value')
export class PointValue {
  @PrimaryGeneratedColumn()
  id_point_value: number;

  @Column()
  value: number; // Valor unitario del punto (en valor monetario)

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  update_at: Date;

  @OneToOne(() => Site, (site) => site.point_value)
  @JoinColumn({ name: 'id_site' })
  site: Site;
}
