// import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm';
// import { RolModuleRelations } from './rol_module_relations.entity';
// import { RolModuleActionsRelations } from './rol_module_actions_relations.entity';

// @Entity()
// export class Module {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @Column()
//   isActive: boolean;

//   @OneToMany(() => RolModuleRelations, rolModuleRelations => rolModuleRelations.module)
//   @JoinTable()
//   rolModuleRelations: RolModuleRelations[];

//   @OneToMany(() => RolModuleActionsRelations, rolModuleActionsRelations => rolModuleActionsRelations.module)
//   @JoinTable()
//   rolModuleActionsRelations: RolModuleActionsRelations[];
// }
