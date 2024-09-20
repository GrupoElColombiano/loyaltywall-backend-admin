import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaywallModuleAction } from 'src/common/entity/paywal-module-actions.entity';
import { PaywallModuleActionRelation } from 'src/common/entity/paywall-module-actions-relations.entity';
import { PaywallModule } from 'src/common/entity/paywallModule.entity';
import { RolePaywallModuleActionRelation } from 'src/common/entity/role-paywall-module-actions.entity';
import { RolePaywallModule } from 'src/common/entity/role-paywall-module.entity';
import { EntityManager, EntityRepository, Repository } from 'typeorm';

@Injectable()
export class AccessModulesService {
  constructor(
    @InjectRepository(PaywallModule)
    private readonly paywallModuleRpo: Repository<PaywallModule>,
    @InjectRepository(RolePaywallModule)
    private readonly rolePaywallModuleRpo: Repository<RolePaywallModule>,
    @InjectRepository(PaywallModuleAction)
    private readonly paywallModuleAction: Repository<PaywallModuleAction>,

    @InjectRepository(PaywallModuleActionRelation)
    private readonly paywallModuleActionRelation: Repository<PaywallModuleActionRelation>,

    @InjectRepository(RolePaywallModuleActionRelation)
    private readonly rolePaywallModuleActionRelation: Repository<RolePaywallModuleActionRelation>,

    private entityManager: EntityManager,
  ) { }

  findAll() {
    return `This action returns all accessModules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accessModule`;
  }

  update(id: number, updateAccessModule: any) {
    return `This action updates a #${id} accessModule`;
  }

  async getModulesStatusByRole(roleId: any): Promise<any> {
    try {
      const paywallModules = await this.paywallModuleRpo.find();

      const paywallModulesWithStatus = await Promise.all(
        paywallModules.map(async (module: PaywallModule) => {
          const rolePaywallModule = await this.rolePaywallModuleRpo.findOne({
            where: { role: roleId, paywallModule: { id: module.id } },
          });

          return {
            ...module,
            idRole: roleId,
            isActive:
              rolePaywallModule == null
                ? false
                : rolePaywallModule.isActive
                  ? true
                  : false,
          };
        }),
      );
      return paywallModulesWithStatus;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async getPaywallModuleAction(moduleId: number, role: string): Promise<any> {
    try {
      return this.getModuleActionsWithRelations(moduleId, role);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Retrieve module actions with relations for a specific module and role.
   * @param moduleId - The module's ID.
   * @param role - The role.
   * @returns {Promise<any[]>} A promise that resolves to an array of module actions with relations.
   */
  async getModuleActionsWithRelations(
    moduleId: number,
    role: string,
  ): Promise<any[]> {
    const queryBuilder = this.entityManager
      .createQueryBuilder()
      .select([
        'c.*',
        'a.*',
        'b.*',
        'd."role"',
        'd."paywallModuleActionRelationId"',
        'd."paywallModuleId"',
      ])
      .from(PaywallModuleAction, 'a')
      .innerJoin(
        PaywallModuleActionRelation,
        'b',
        'a.id = b."paywallModuleActionId"',
      )
      .innerJoin(PaywallModule, 'c', 'c.id = b."paywallModuleId"')
      .leftJoinAndSelect(
        (subQuery) =>
          subQuery
            .from(RolePaywallModuleActionRelation, 'd')
            .select([
              'd."role"',
              'd."paywallModuleId"',
              'd."paywallModuleActionRelationId"',
            ]),
        'd',
        'd."paywallModuleId" = c.id'
        + ' AND d."paywallModuleActionRelationId" = b.id'
        + ' AND d."role" = :role',
        { role: role }

      )
      .where('c.id = :moduleId', { moduleId: moduleId })

    return queryBuilder.getRawMany();
  }

  /**
   * Update paywall module action for a specific module, role, and isActive status.
   * @param moduleId - The module's ID.
   * @param role - The role.
   * @param isActiveP - Indicates if the action is active.
   * @returns {Promise<any>} A promise that resolves to the updated module actions.
   */
  async getUpdatePaywallModuleAction(
    moduleId: string,
    role: string,
    isActiveP: string,
  ): Promise<any> {
    const moduleIdAsNumber = parseInt(moduleId, 10);

    try {
      var resultModule = this.getQueryRolModule(moduleId, role);

      if ((await resultModule).length > 0) {
        var params = { isActive: isActiveP == 'true' ? true : false };
        var updateModule = this.entityManager
          .createQueryBuilder()
          .update(RolePaywallModule)
          .set(params)
          .where('role = :role', { role: role })
          .andWhere('paywallModuleId = :moduleId', { moduleId: moduleId });

        const updateResult = await updateModule.execute();

        if (updateResult.affected > 0) {
          return this.getQueryRolModule(moduleId, role);
        } else {
          return [];
        }
      } else {
        const moduleIdAsNumber = parseInt(moduleId, 10);

        const paywallModule = await this.paywallModuleRpo.findOne({
          where: { id: moduleIdAsNumber },
        });

        if (!paywallModule) {
          console.log('No se encontró el módulo con el ID proporcionado.');
          return;
        }
        var paramsInsert = {
          isActive: isActiveP == 'true' ? true : false,
          role: role,
          paywallModule: paywallModule,
        };
        if ((await this.rolePaywallModuleRpo.insert(paramsInsert)).raw > 0) {
          return this.getQueryRolModule(moduleId, role);
        } else {
          return [];
        }
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Update role module action for a specific module, action relation, and role.
   * @param moduleId - The module's ID.
   * @param ActionRelationId - The action relation's ID.
   * @param role - The role.
   * @returns {Promise<any>} A promise that resolves to the updated role module actions.
   */
  async setUpdateRolModuleAction(
    moduleId: string,
    ActionRelationId: string,
    role: string,
  ): Promise<any> {
    const moduleIdAsNumber = parseInt(moduleId, 10);

    try {
      var resultModule = this.getQueryRolModuleAction(
        moduleId,
        ActionRelationId,
        role,
      );

      if ((await resultModule).length > 0) {
        // var params = { "isActive": (isActiveP == "true" ? true : false) }
        var updateModule = this.entityManager
          .createQueryBuilder()
          .delete()
          .from(RolePaywallModuleActionRelation)
          .where('role = :role', { role: role })
          .andWhere('paywallModuleId = :moduleId', { moduleId: moduleId })
          .andWhere('paywallModuleActionRelationId = :ActionRelationId', {
            ActionRelationId: ActionRelationId,
          });

        // console.log(" updateModule ", updateModule.getQuery())
        // console.log(" updateModule ", updateModule.getSql())
        // console.log(" updateModule ", updateModule.getParameters())

        const updateResult = await updateModule.execute();
        if (updateResult.affected > 0) {
          return this.getQueryRolModuleAction(moduleId, ActionRelationId, role);
        } else {
          return [];
        }
      } else {
        console.log(' REGISTRANDO AQUI ... ');
        const moduleIdAsNumber = parseInt(moduleId, 10);

        const paywallModule = await this.paywallModuleRpo.findOne({
          where: { id: moduleIdAsNumber },
        });

        if (!paywallModule) {
          console.log('No se encontró el módulo con el ID proporcionado.');
          return;
        }

        const ActionRelationIdAsNumber = parseInt(ActionRelationId, 10);

        const paywallModuleActionRelation =
          await this.paywallModuleActionRelation.findOne({
            where: { id: ActionRelationIdAsNumber },
          });

        if (!paywallModuleActionRelation) {
          console.log('No se encontró el módulo con el ID proporcionado.');
          return;
        }

        var paramsInsert = {
          paywallModuleActionRelation: paywallModuleActionRelation,
          role: role,
          paywallModule: paywallModule,
        };
        if (
          (await this.rolePaywallModuleActionRelation.insert(paramsInsert))
            .raw > 0
        ) {
          return this.getQueryRolModuleAction(moduleId, ActionRelationId, role);
        } else {
          return [];
        }
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Retrieve role module information for a specific module and role.
   * @param moduleId - The module's ID.
   * @param role - The role.
   * @returns {Promise<any[]>} A promise that resolves to an array of role module information.
   */
  async getQueryRolModule(moduleId: string, role: string): Promise<any[]> {
    const queryBuilder = this.entityManager
      .createQueryBuilder()
      .select(['a.*'])
      .from(RolePaywallModule, 'a')
      .where('a.role = :role', { role: role })
      .andWhere('a.paywallModuleId = :moduleId', { moduleId: moduleId });
    return queryBuilder.getRawMany();
  }

  /**
   * @description: Metodo en cargado de consultar en la tabla de roles modulo acciones
   * @author Cristian Ardila
   * @version 1.0
   * @param moduleId: Id del modulo
   * @param ActionRelationId: Id de la accion que se le relacionara al modulo (1:Crear, 2:eliminar etc)
   * @param role: Rol del usuario al cual se le asignara este permiso
   * @returns
   */
  async getQueryRolModuleAction(moduleId: string, ActionRelationId: string, role: string): Promise<any[]> {
    const queryBuilder = this.entityManager.createQueryBuilder()
      .select(['a.*'])
      .from(RolePaywallModuleActionRelation, 'a')
      .where('a.role = :role', { role: role })
      .andWhere('a.paywallModuleId = :moduleId', { moduleId: moduleId })
      .andWhere('a.paywallModuleActionRelationId = :ActionRelationId', { ActionRelationId: ActionRelationId })
    return queryBuilder.getRawMany();
  }

  /**
   * Retrieve role paywall modules for a specific role.
   * @param roleId - The role's ID.
   * @returns {Promise<any>} A promise that resolves to role paywall modules.
   */
  async getRolePaywallModulle(roleId: any): Promise<any> {
    console.log('ingresó al servicio');
    try {
      const rolePaywallModule = await this.rolePaywallModuleRpo.find();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  //Obtener todos los modulos que pertenecen a un rol
  async getRolePaywallModule(roleId: any, body: any): Promise<any> {
    try {
      const queryBuilder = await this.rolePaywallModuleActionRelation.createQueryBuilder('rolePaywallModuleActionRelation')
      .where('rolePaywallModuleActionRelation.role = :roleId', { roleId: roleId })
      .leftJoinAndSelect('rolePaywallModuleActionRelation.paywallModule', 'paywallModule')
      .leftJoinAndSelect('rolePaywallModuleActionRelation.paywallModuleActionRelation', 'paywallModuleActionRelation')
      .leftJoinAndSelect('paywallModuleActionRelation.paywallModuleAction', 'paywallModuleAction')

      // const queryBuilder2 = await this.rolePaywallModuleRpo.createQueryBuilder('rolePaywallModule')
      // .where('rolePaywallModule.role = :roleId', { roleId: roleId })
      // .leftJoinAndSelect('rolePaywallModule.paywallModule', 'paywallModule')
      // .leftJoinAndSelect('rolePaywallModule.paywallModuleActionRelation', 'paywallModuleActionRelation')
      // .getMany()


        // if(body.moduleId){
        //   queryBuilder.andWhere('rolePaywallModuleActionRelation.paywallModuleId = :moduleId', { moduleId: body.moduleId })
        // }

      return queryBuilder.getMany();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  //Crear relacion entre rol y modulo
  // async createRolePaywallModule(query: any): Promise<any> {
  //   const { role, paywallModuleId } = query;
  //   try {
  //     const paywallModule = await this.rolePaywallModuleActionRelation
  //   } catch (error) {
  //     throw new NotFoundException(error.message);
  //   }
  // }

  async getActiveModulesByRole(roleId: string) {
    return this.paywallModuleRpo
      .createQueryBuilder('a')
      .select(['b.paywallModuleId as paywallModuleId, a.name as name', 'a.description as description', 'b.isActive as is_active'])
      .innerJoin(RolePaywallModule, 'b', 'a.id = b.paywallModuleId')
      .where('b.role = :roleId AND b.isActive = :isActive', { roleId, isActive: true })
      .getRawMany();
  }
}
