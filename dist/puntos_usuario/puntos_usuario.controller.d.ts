import { PuntosUsuarioService } from './puntos_usuario.service';
export declare class PuntosUsuarioController {
    private readonly puntosUsuarioService;
    constructor(puntosUsuarioService: PuntosUsuarioService);
    findAll(body: string): Promise<any>;
    findAllPointsMovement(body: any): Promise<any>;
    findOne(idKeycloak: string): Promise<any>;
    create(body: any): Promise<any>;
    createPointsMovement(body: any): Promise<any>;
    findPointTotalUser(body: any, req: any): Promise<any>;
    findPointsConsumed(idKeycloak: string): Promise<any>;
    findPointsMovement(idKeycloak: string): Promise<any>;
}
