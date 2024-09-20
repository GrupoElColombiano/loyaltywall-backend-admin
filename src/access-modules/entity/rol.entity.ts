// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, OneToMany } from "typeorm";
// import { RolModuleRelations } from "./rol_module_relations.entity";
// import { RolModuleActionsRelations } from "./rol_module_actions_relations.entity";

// @Entity()
// export class Rol {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @Column()
//   isActive: boolean;

//   @ManyToOne(() => RolModuleRelations, rolModuleRelations => rolModuleRelations.rol)
//   @JoinTable()
//   rolModuleRelations: RolModuleRelations[];

//   @OneToMany(() => RolModuleActionsRelations, rolModuleActionsRelations => rolModuleActionsRelations.rol)
//   rolModuleActionsRelations: RolModuleActionsRelations[];
// }
