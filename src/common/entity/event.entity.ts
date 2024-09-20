// En la entidad Events
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { PointsEvents } from './points-events.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id_event: number;
  //@OneToMany(() => PointsEvents, (pointsValue) => pointsValue.event)
  //pointsValues: PointsEvents[];
  @Column()
  name: string;
  @Column()
  description: string;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  registration_state: Date;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at: Date;
}
