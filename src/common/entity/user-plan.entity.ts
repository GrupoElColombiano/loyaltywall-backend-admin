import { Entity, Column, PrimaryGeneratedColumn, ManyToMany,  ManyToOne, JoinColumn } from "typeorm";
import { Plan } from "../../plans/entity/plan.entity";
import { UserAdminEntity } from "../../users/entities/user.entity";

@Entity({ name: 'user_plan' })
export class UserPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, name: 'id_user' })
  idUser: string;

  @Column({ nullable: true, name: 'is_active' })
  isActive: boolean;

  @Column({ nullable: true, name: 'date_expired_plan', type: 'timestamp' })
  dateExpiredPlan: Date;

  @Column({ nullable: true, name: 'date_init_plan', type: 'timestamp' })
  dateInitPlan: Date;

  @Column({ nullable: true, name: 'id_version'})
  idVersion: string;

  @ManyToOne(() => Plan) // Establece la relación Muchos a Uno con la entidad Plan
  @JoinColumn({ name: 'id_plan' }) // Especifica la columna en la que se basa la relación
  plan: Plan; // Crea un campo para acceder al objeto relacionado Plan

}
