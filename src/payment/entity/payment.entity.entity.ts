import { PaymentTransaction } from '../../registerlog/entity/payment-log.entity';
import { Subscription } from '../../payment/entity/subscriptionsentity.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'payment_gateways' })
export class PaymentGateway {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  clientId: string;

  @Column()
  apiKey: string;

  @Column({ nullable: true })
  image: string | null;

  @Column({ nullable: true })
  idSite: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  testMode: boolean;

  @OneToMany(() => Subscription, (subscription) => subscription.paymentGateway)
  subscriptions: Subscription[];
}
