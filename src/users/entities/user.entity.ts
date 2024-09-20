import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
import { IsOptional } from 'class-validator';
import { PointsEvents } from '../../puntos_usuario/entity/points_events.entity';
import { PointsMovement } from '../../puntos_usuario/entity/points_movement.entity';
import { UserPoints } from '../../puntos_usuario/entity/user_points.entity';

@Entity()
export class UserAdminEntity {
  @PrimaryGeneratedColumn()
  id?: number;


  @IsOptional()
  @Column({ unique: true, nullable: true })
  idKeycloak?: string;


  @IsOptional()
  @Column()
  firstName?: string;


  @IsOptional()
  @Column()
  lastName?: string;


  @IsOptional()
  @Column({ unique: true, nullable: true })
  email?: string;


  @IsOptional()
  @Column({ nullable: true })
  document_type?: string;


  @IsOptional()
  @Column({ nullable: true })
  document_number?: string;


  @IsOptional()
  @Column({ nullable: true })
  birthdate?: Date;


  @IsOptional()
  @Column({ nullable: true })
  gener?: string;


  @IsOptional()
  @Column({ nullable: true })
  phone?: number;


  @IsOptional()
  @Column({ nullable: true })
  address?: string;


  @IsOptional()
  @Column({ nullable: true })
  city?: string;


  @IsOptional()
  @Column({ nullable: true })
  department?: string;


  @IsOptional()
  @Column({ nullable: true })
  country?: string;


  @IsOptional()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  lastLogin?: Date;


  @IsOptional()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  creationDate?: Date;

  @ManyToOne(() => PointsEvents)
  pointsEvents: PointsEvents[];

  @ManyToOne(() => PointsMovement)
  pointsMovement: PointsMovement[];

  @ManyToOne(() => UserPoints)
  userPoints: UserPoints[];

}
