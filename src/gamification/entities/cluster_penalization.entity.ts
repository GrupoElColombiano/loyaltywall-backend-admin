import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Site } from '../../sites/entities/site.entity';

@Entity()
export class ClusterPenalization {

  @PrimaryGeneratedColumn()
  id_cluster_penalization: number;

  @Column({ name: 'penalty_cluster' })
  penaltyClusters: number;

  @ManyToOne(() => Site)
  @JoinColumn({ name: 'idSite' })
  site: Site;
}
