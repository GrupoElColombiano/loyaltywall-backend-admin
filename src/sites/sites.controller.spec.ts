import { Test, TestingModule } from '@nestjs/testing';
import { SitesController } from './sites.controller';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { Site } from './entities/site.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('SitesController', () => {
  let controller: SitesController;
  let service: SitesService;
  let repository: Repository<Site>;

  beforeEach(async () => {
    // Test module configuration
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SitesController], // Provide the controller to be tested
      providers: [
        SitesService, // Provide the service dependency
        {
          provide: getRepositoryToken(Site), // Provide the token of the Site repository
          useClass: Repository, // Use a mock class for the repository
        },
      ],
    }).compile();

    // Get instances of the controller, service, and repository
    controller = module.get<SitesController>(SitesController);
    service = module.get<SitesService>(SitesService);
  });

  describe('creation of a site', () => {
    it('should create a site', async () => {
      // Input data for site creation
      const createSiteDto: CreateSiteDto = {
        name: 'El Colombiano',
        description: 'Website of El Colombiano',
        url: 'https://www.elcolombiano.com/',
        site_status: true,
      };

      // Expected site after creation
      const createdSite: Site = {
        id: 1,
        name: 'El Colombiano',
        description: 'Website of El Colombiano',
        url: 'https://www.elcolombiano.com/',
        site_status: true,
        createAt: new Date(),
        updateAt: new Date(),
      };

      // Spy on the 'create' method of the service and return the expected site
      jest.spyOn(service, 'create').mockResolvedValueOnce(createdSite);

      // Call the 'create' method of the controller with the input data
      const result = await controller.create(createSiteDto);

      // Verifications
      expect(result).toBe(createdSite); // Verify that the result is equal to the expected site
      expect(service.create).toHaveBeenCalledWith(createSiteDto); // Verify that 'create' of the service was called with the input data
    });
  });

  describe('findAll', () => {
    it('should return an array of sites', async () => {
      // Array of sites
      const sites: Site[] = [
        {
          id: 1,
          name: 'El Colombiano',
          description: 'Website of El Colombiano',
          url: 'https://www.elcolombiano.com/',
          site_status: true,
          createAt: new Date(),
          updateAt: new Date(),
        },
        {
          id: 2,
          name: 'Q Hubo',
          description: 'Website of Q Hubo',
          url: 'https://www.qhubo.com/',
          site_status: true,
          createAt: new Date(),
          updateAt: new Date(),
        },
      ];

      // Spy on the 'findAll' method of the service and return the array of sites
      jest.spyOn(service, 'findAll').mockResolvedValueOnce(sites);

      // Call the 'findAll' method of the controller
      const result = await controller.findAll();

      // Verifications
      expect(result).toBe(sites); //Verify that the result is equal to the array of sites
      expect(service.findAll).toHaveBeenCalled(); // Verify that 'findAll' of the service was called
    });
  });
});
