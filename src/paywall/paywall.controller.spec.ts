import { Test, TestingModule } from '@nestjs/testing';
import { PaywallController } from './paywall.controller';
import { PaywallService } from './paywall.service';

describe('PaywallController', () => {
  let controller: PaywallController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaywallController],
      providers: [PaywallService],
    }).compile();

    controller = module.get<PaywallController>(PaywallController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
