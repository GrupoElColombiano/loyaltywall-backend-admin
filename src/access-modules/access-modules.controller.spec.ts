import { Test, TestingModule } from '@nestjs/testing';
import { AccessModulesController } from './access-modules.controller';
import { AccessModulesService } from './access-modules.service';

describe('AccessModulesController', () => {
  let controller: AccessModulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessModulesController],
      providers: [AccessModulesService],
    }).compile();

    controller = module.get<AccessModulesController>(AccessModulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
