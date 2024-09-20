import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmCreateUserService } from './confirm-create-user.service';

describe('ConfirmCreateUserService', () => {
  let service: ConfirmCreateUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfirmCreateUserService],
    }).compile();

    service = module.get<ConfirmCreateUserService>(ConfirmCreateUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
