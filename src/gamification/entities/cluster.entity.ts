import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Event } from '../entities/event.entity';
import { Site } from '../../sites/entities/site.entity';
import { EventCluster } from './event_cluster.entity';

@Entity('cluster')
export class Cluster {
  @PrimaryGeneratedColumn()
  id_cluster: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  update_at: Date;

  //Relación de muchoa a muchos con event, cascade he inverseJoinColumns.
  @ManyToMany(() => Event, event => event.clusters, { cascade: true })
  @JoinTable()
  events: Event[];

  //Relación con site, muchos a muchos.
  @ManyToMany(() => Site, site => site.clusters, { cascade: true })
  @JoinTable()
  sites: Site[];

  //Relación con eventCluster, muchos a uno.
  @OneToMany(() => EventCluster, eventCluster => eventCluster.clusters)
  @JoinColumn({ name: 'id_event_cluster' })
  eventCluster: EventCluster[];
}
