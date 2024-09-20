import { Test, TestingModule } from '@nestjs/testing';
import { RegisterlogService } from './registerlog.service';

describe('RegisterlogService', () => {
  let service: RegisterlogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterlogService],
    }).compile();

    service = module.get<RegisterlogService>(RegisterlogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
