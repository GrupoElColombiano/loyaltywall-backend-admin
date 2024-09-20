// import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, JoinTable } from 'typeorm';
// import { Actions } from './actions.entity';
// import { Rol } from './rol.entity';
// import { Module } from './modules.entity';

// @Entity()
// export class RolModuleActionsRelations {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   isActive: boolean;

//   @ManyToOne(() => Actions, actions => actions.rolModuleActionsRelations)
//   @JoinTable()
//   actions: Actions[];

//   @ManyToOne(() => Rol, rol => rol.rolModuleActionsRelations)
//   @JoinTable()
//   rol: Rol[];

//   @ManyToOne(() => Module, module => module.rolModuleActionsRelations)
//   @JoinTable()
//   module: Module[];
// }
