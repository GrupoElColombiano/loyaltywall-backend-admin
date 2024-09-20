import { Test, TestingModule } from '@nestjs/testing';
import { RegisterlogController } from './registerlog.controller';

describe('RegisterlogController', () => {
  let controller: RegisterlogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterlogController],
    }).compile();

    controller = module.get<RegisterlogController>(RegisterlogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
