import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('register_logs') // Cambiamos el nombre de la tabla a 'register_logs'
export class RegisterLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  userId: string;

  @Column({ nullable: true })
  roleId: string;

  @Column()
  activityType: string;

  @Column()
  description: string;

  @Column()
  affectedObject: string;

  @Column()
  success: boolean;

  @Column({ nullable: true })
  ipAddress: string;

  @Column()
  userAgent: string;

  @CreateDateColumn()
  timestamp: Date;

  //En éste campo error debo guardar todo el objeto error que se genera en el try catch
  @Column({ type: 'jsonb', nullable: true })
  error: Record<string, any>;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  token: string;
}
