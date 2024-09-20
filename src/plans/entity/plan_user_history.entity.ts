import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('plan_user_history')
export class PlanUserHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' }) // Asegúrate de que esto coincida con el nombre real en la base de datos
  userId: string;

  @Column({ type: 'varchar', length: 24, name: 'plan_history_id' }) // Agrega name para asegurar que coincida
  planHistoryId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
