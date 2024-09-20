import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleSiteRelation } from 'src/common/entity/role-site-relations.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleSiteRelation)
    private roleSiteRepository: Repository<RoleSiteRelation>,
  ) {}

  /**
   * Assign sites to a role.
   *
   * @param role Role ID or name.
   * @param siteIds Array of site IDs to assign.
   * @returns An object with status code, message, and assigned sites.
   */
  async assignSitesToRole(role: any, siteIds: any[]) {
    console.log(role, siteIds);

    // Save the IDs of related sites to the database
    const newRelatedSites = await Promise.all(
      siteIds.map(async (site) => {
        const newSiteRelation = new RoleSiteRelation();
        newSiteRelation.role = role;
        newSiteRelation.site = site; // Assign the site ID
        await this.roleSiteRepository.save(newSiteRelation);
        return newSiteRelation;
      }),
    );
    return {
      statusCode: 200,
      message: `Sites added to this role`,
      data: newRelatedSites,
    };
  }
  catch(error) {
    throw new NotFoundException(error.message);
  }

  /**
   * Get sites associated with a role.
   *
   * @param role Role ID or name.
   * @returns An object with status code, message, and associated sites.
   */
  async getSitesByRole(role: any) {
    try {
      // Obtén todas las relaciones de sitios para el rol dado
      const siteRelations = await this.roleSiteRepository.find({
        where: { role },
        relations: ['site'], // Load the 'site' relation associated with each record
      });

      // console.log(siteRelations);

      if (!siteRelations || siteRelations.length === 0) {
        throw new NotFoundException(
          `No se encontraron sitios para el rol: ${role}`,
        );
      }

      // Extract sites from the relations
      const sites = siteRelations.map((relation) => relation.site);

      return {
        statusCode: 200,
        message: `Sitios asociados al rol: ${role}`,
        data: sites,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * Update sites for a role.
   *
   * @param role Role ID or name.
   * @param siteIds Array of site IDs to update.
   * @returns An object with status code, message, and updated sites.
   */
  async updateSitesForRole(role: string, siteIds: any[]) {
    // const sitesByRole = await this.getSitesByRole(role);

    // const actualIdSitesArray = sitesByRole.data.map(
    //   (idActualSite) => idActualSite.idSite,
    // );

    try {
      // Get all site relations for the given role
      const siteRelations = await this.roleSiteRepository.find({
        where: { role },
      });
      // Remove all found relations
      await this.roleSiteRepository.remove(siteRelations);
      // Assign new sites to the role
      const newSites = await this.assignSitesToRole(role, siteIds);
      return {
        statusCode: 200,
        message: `All Sites for role: ${role} has been updated.`,
        data: newSites.data,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
