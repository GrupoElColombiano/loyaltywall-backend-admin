// EventCluster.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Event } from './event.entity';
import { Cluster } from './cluster.entity';
import { Site } from 'src/sites/entities/site.entity';

@Entity()
export class EventCluster {
  @PrimaryGeneratedColumn()
  id_event_cluster: number;

  @Column({ default: 0 })
  event_repeats: number;

  @Column({ default: 0 })
  porcentual_value: number;

  //@Column({ default: 0, nullable: true })
  //points: number;

  @ManyToOne(() => Event)
  @JoinColumn({ name: 'id_event' })
  events: Event[];

  @ManyToOne(() => Cluster)
  @JoinColumn({ name: 'id_cluster' })
  clusters: Cluster[];

  @ManyToOne(() => Site, site => site.event_clusters)
  @JoinColumn({ name: 'site' })
  site: Site;
}
