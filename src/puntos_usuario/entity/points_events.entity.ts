import { Event } from '../../gamification/entities/event.entity';
import { Site } from '../../sites/entities/site.entity';
import { UserAdminEntity } from '../../users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable, ManyToOne } from 'typeorm';

@Entity('points_events')
export class PointsEvents {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  points: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  registration_date: Date;

  @Column({ type: 'timestamp' })
  expiration_date: Date;

  @ManyToOne(() => UserAdminEntity)
  @JoinTable({
    name: 'points_events',
    joinColumn: { name: 'id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id', referencedColumnName: 'id' },
  })
  user: UserAdminEntity;

  @ManyToOne(() => Site)
  @JoinTable({
    name: 'points_events',
    joinColumn: { name: 'id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id', referencedColumnName: 'id' },
  })
  site: Site;

  //Relación con Event nulleable
  @ManyToOne(() => Event, { nullable: true })
  event: Event;
}
