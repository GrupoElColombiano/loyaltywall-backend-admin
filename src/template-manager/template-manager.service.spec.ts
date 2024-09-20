import { Test, TestingModule } from '@nestjs/testing';
import { TemplateManagerService } from './template-manager.service';

describe('TemplateManagerService', () => {
  let service: TemplateManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemplateManagerService],
    }).compile();

    service = module.get<TemplateManagerService>(TemplateManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
