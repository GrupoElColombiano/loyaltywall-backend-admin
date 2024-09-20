import { Test, TestingModule } from '@nestjs/testing';
import { TemplateManagerController } from './template-manager.controller';

describe('TemplateManagerController', () => {
  let controller: TemplateManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemplateManagerController],
    }).compile();

    controller = module.get<TemplateManagerController>(TemplateManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
