import { Test, TestingModule } from '@nestjs/testing';
import { PaywallService } from './paywall.service';

describe('PaywallService', () => {
  let service: PaywallService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaywallService],
    }).compile();

    service = module.get<PaywallService>(PaywallService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
