import { Test, TestingModule } from '@nestjs/testing';
import { PuntosUsuarioController } from './puntos_usuario.controller';

describe('PuntosUsuarioController', () => {
  let controller: PuntosUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuntosUsuarioController],
    }).compile();

    controller = module.get<PuntosUsuarioController>(PuntosUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
