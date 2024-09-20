import { Test, TestingModule } from '@nestjs/testing';
import { UsertypeService } from './usertype.service';

describe('UsertypeService', () => {
  let service: UsertypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsertypeService],
    }).compile();

    service = module.get<UsertypeService>(UsertypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
