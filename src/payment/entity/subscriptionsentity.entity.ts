import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { PaymentGateway } from './payment.entity.entity';
  
  @Entity({ name: 'subscriptions' })
  export class Subscription {
    @PrimaryGeneratedColumn()
    id_subscription: number;
  
    @Column()
    id_plan: number;
  
    @Column()
    id_rate: number;
  
    @Column({ type: 'varchar', length: 255 })
    transacction: string; // Asegúrate de que el nombre es correcto
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    sysdate: Date;
  
    @Column()
    id_version: number;
  
    @Column({ type: 'varchar', length: 255 })
    id_user: string;
  
    @Column()
    cancellation_status: number;
  
    @Column({ type: 'varchar', length: 50, nullable: true })
    transaction_type: string;

    //Agregar el campo amount tipo integer
    @Column({ type: 'integer', nullable: true })
    amount: number;
  
    @ManyToOne(() => PaymentGateway, (gateway) => gateway.subscriptions, { nullable: true })
    @JoinColumn({ name: 'payment_gateway_id' })
    paymentGateway: PaymentGateway;
  
    @Column({ nullable: true })
    payment_gateway_id: number;
  }
  