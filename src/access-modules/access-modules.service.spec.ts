import { Test, TestingModule } from '@nestjs/testing';
import { AccessModulesService } from './access-modules.service';

describe('AccessModulesService', () => {
  let service: AccessModulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessModulesService],
    }).compile();

    service = module.get<AccessModulesService>(AccessModulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
