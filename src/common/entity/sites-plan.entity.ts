import { Plan } from '../../plans/entity/plan.entity';
import { Site } from '../../sites/entities/site.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SitesPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'idSite' })
  idSite: number;

  @Column({ name: 'idPlan' })
  idPlan: number;

  @ManyToOne(() => Site, site => site.sitesPlan)
  @JoinColumn({ name: 'idSite', referencedColumnName: 'idSite' })
  site: Site[];

  @ManyToOne(() => Plan, plan => plan.sitesPlan)
  @JoinColumn({ name: 'idPlan', referencedColumnName: 'idPlan' })
  plan: Plan[];
}
