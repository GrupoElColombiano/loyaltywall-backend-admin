// En la entidad PointsValue
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Event } from './event.entity';
import { EventsPointsSite } from './events-points-site.entity';

@Entity()
export class PointsEvents {
  @PrimaryGeneratedColumn()
  id: number;
  @Column() // Cambiado a Column
  userId: string;
  //@ManyToOne(() => Events, (event) => event.pointsValues) // Cambiado a pointsValues
  //@JoinColumn({ name: 'eventIdEvent' })
  //event: Events;
  @ManyToOne(() => Event, { eager: true })
  event: Event;
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
  // @OneToMany(() => EventsPointsSite, eventsPointsSite => eventsPointsSite.pointsEvents)
  //   eventsPointsSites: EventsPointsSite[];
}
