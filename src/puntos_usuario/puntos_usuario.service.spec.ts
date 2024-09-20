import { Test, TestingModule } from '@nestjs/testing';
import { PuntosUsuarioService } from './puntos_usuario.service';

describe('PuntosUsuarioService', () => {
  let service: PuntosUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuntosUsuarioService],
    }).compile();

    service = module.get<PuntosUsuarioService>(PuntosUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
