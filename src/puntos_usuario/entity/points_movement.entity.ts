import { Site } from '../../sites/entities/site.entity';
import { UserAdminEntity } from '../../users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinTable } from 'typeorm';

@Entity('points_movement')
export class PointsMovement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total_points: number;

  @Column()
  current_points: number;

  @Column()
  expired_points: number;

  @Column()
  redeemed_points: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  system_date: Date;

  @ManyToOne(() => UserAdminEntity)
  @JoinTable({
    name: 'points_movement',
    joinColumn: { name: 'id_points_movement', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id', referencedColumnName: 'id' },
  })
  user: UserAdminEntity;

  @ManyToOne(() => Site)
  @JoinTable({
    name: 'points_movement',
    joinColumn: { name: 'id_points_movement', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id', referencedColumnName: 'id' },
  })
  site: Site;
}
