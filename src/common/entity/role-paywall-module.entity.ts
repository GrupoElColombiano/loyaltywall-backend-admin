import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PaywallModule } from './paywallModule.entity';

@Entity()
export class RolePaywallModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @ManyToOne(() => PaywallModule, { eager: false })
  paywallModule: PaywallModule;

  @Column({ nullable: true, default: false })
  isActive: boolean;
}
