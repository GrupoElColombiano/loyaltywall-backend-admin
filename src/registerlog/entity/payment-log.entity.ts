// Importa los módulos necesarios de TypeORM
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'; // Asegúrate de importar la entidad de PaymentGateway si aún no lo has hecho.

@Entity({ name: 'payment_transactions' }) // Nombre de la tabla para el historial de transacciones
export class PaymentTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  userId: string;

  @Column()
  status: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true })
  order_id: string;

  @Column({ nullable: true })
  product: string;

  @Column({ nullable: true })
  idSite: number;
}
