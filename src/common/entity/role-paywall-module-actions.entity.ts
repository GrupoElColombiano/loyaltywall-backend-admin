import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { PaywallModule } from './paywallModule.entity';
import { PaywallModuleActionRelation } from './paywall-module-actions-relations.entity';

@Entity()
export class RolePaywallModuleActionRelation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @ManyToOne(() => PaywallModule, { eager: true })
  paywallModule: PaywallModule;

  @ManyToOne(() => PaywallModuleActionRelation, { eager: true })
  paywallModuleActionRelation: PaywallModuleActionRelation;
}
