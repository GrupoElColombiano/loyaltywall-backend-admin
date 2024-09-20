import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PaywallModule } from './paywallModule.entity';
import { PaywallModuleAction } from './paywal-module-actions.entity';

@Entity()
export class PaywallModuleActionRelation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PaywallModule, { eager: true })
  paywallModule: PaywallModule;

  @ManyToOne(() => PaywallModuleAction, { eager: true })
  paywallModuleAction: PaywallModuleAction;
}
