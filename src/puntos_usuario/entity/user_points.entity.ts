import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { UserAdminEntity } from '../../users/entities/user.entity';
import { Site } from '../../sites/entities/site.entity';
import { Event } from '../../gamification/entities/event.entity';

@Entity('user_points')
export class UserPoints {
  @PrimaryGeneratedColumn()
  id_user_points: number;

  @Column({ name: 'product' })
  product: string;

  @Column({ name: 'id_product'})
  idProduct: number;

  @Column({ name: 'points', default: 0 })
  points: number;

  //Fecha en que se consumieron los puntos a cambio de un produtco, se crea atuoamticamente
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  system_date: Date;

  @ManyToOne(() => UserAdminEntity)
  @JoinColumn({ name: 'id_user' })
  user: UserAdminEntity;

  @ManyToOne(() => Site)
  @JoinColumn({ name: 'id_site' })
  site: Site;

  @ManyToOne(() => Event)
  @JoinColumn({ name: 'id_event' })
  event: Event;

}
