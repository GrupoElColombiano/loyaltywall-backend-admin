// En la entidad PointsValue
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PointsEvents } from './points-events.entity';
import { Event } from 'src/gamification/entities/event.entity';

@Entity()
export class EventsPointsSite {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => Event) // Cambiado a pointsValues
  @JoinColumn({ name: 'eventIdEvent' })
  event: Event;
  // @ManyToOne(() => PointsEvents, { eager: true })
  // pointsEvents: PointsEvents;
  @Column()
  eventIdEvent: number;
  @Column() // Cambiado a Column
  siteIdSite: number;
  @Column() // Cambiado a Column
  points: number;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  registration_date: Date;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  expiration_date: Date;
}
