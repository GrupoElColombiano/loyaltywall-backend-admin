// import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinTable } from 'typeorm';
// import { Module } from './modules.entity';
// import { Rol } from './rol.entity';

// @Entity()
// export class RolModuleRelations {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @ManyToOne(() => Rol, rol => rol.rolModuleRelations)
//   @JoinTable()
//   rol: Rol;

//   @ManyToOne(() => Module, module => module.rolModuleRelations)
//   @JoinTable()
//   module: Module;

//   @Column()
//   isActive: boolean;
// }
