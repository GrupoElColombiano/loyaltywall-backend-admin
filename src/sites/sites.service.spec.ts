import { Test, TestingModule } from '@nestjs/testing';
import { SitesService } from './sites.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Site } from './entities/site.entity';
import { Category } from 'src/category/entity/category.entity';
import { CreateSiteDto } from './dto/create-site.dto';

describe('SitesService', () => {
  let service: SitesService;
  let repository: Repository<Site>;

  beforeEach(async () => {
    // Test module configuration
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SitesService, // Provide the service to be tested
        {
          provide: getRepositoryToken(Site), // Provide the token of the Site repository
          useClass: Repository, // Use a mock class for the repository
        },
      ],
    }).compile();

    // Get an instance of the service and the repository
    service = module.get<SitesService>(SitesService);
    repository = module.get<Repository<Site>>(getRepositoryToken(Site));
  });

  describe('create', () => {
    it('should create a new site', async () => {
      // Input data for site creation
      const createSiteDto: CreateSiteDto = {
        name: 'El Colombiano',
        description: 'Website of El Colombiano',
        url: 'https://www.elcolombiano.com/',
        isActive: true,
      };

      // Expected site after creation
      const newSite: Site = {
        idSite: 1,
        name: 'El Colombiano',
        description: 'Website of El Colombiano',
        url: 'https://www.elcolombiano.com/',
        isActive: true,
        createAt: new Date(),
        updateAt: new Date(),
      };

      // Spy on the 'create' method of the repository and return the expected site
      jest.spyOn(repository, 'create').mockReturnValue(newSite);

      // Spy on the 'save' method of the repository and return the expected site
      jest.spyOn(repository, 'save').mockResolvedValue(newSite);

      // Call the 'create' method of the service with the input data
      const result = await service.create(createSiteDto);

      // Verifications
      expect(repository.create).toHaveBeenCalledWith(createSiteDto); // Verify that 'create' of the repository was called with the input data
      expect(repository.save).toHaveBeenCalledWith(newSite); // Verify that 'save' of the repository was called with the expected site
      expect(result).toEqual(newSite); // Verify that the result of the 'create' method is equal to the expected site
    });
  });
});
