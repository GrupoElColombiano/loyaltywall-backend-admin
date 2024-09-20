import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { PuntosUsuarioService } from './puntos_usuario.service';
import { Public, Unprotected } from 'nest-keycloak-connect';

@Controller('puntos-usuario')
@Unprotected()
export class PuntosUsuarioController {
  constructor(private readonly puntosUsuarioService: PuntosUsuarioService) {}

  @Post('puntos_events')
  findAll(@Body() body: string) {
    return this.puntosUsuarioService.findAll(body);
  }

  @Public(true)
  @Post('points_movement')
  findAllPointsMovement(@Body() body: any) {
    console.log('sucedio algo', body)
    return this.puntosUsuarioService.findAllPointsMovement(body);
  }

  @Post('/puntos_events/findOne')
  findOne(@Body('idKeycloak') idKeycloak: string ) {
    return this.puntosUsuarioService.findOne(idKeycloak);
  }

  @Post('create')
  create(@Body() body) {
    return this.puntosUsuarioService.create(body);
  }

  @Post('points_movement/create')
  createPointsMovement(@Body() body) {
    return this.puntosUsuarioService.createPointsMovement(body);
  }

  @Post('points_movement/point_total')
  findPointTotalUser(@Body() body, @Req() req) {
    body.clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    body.userAgent = req.headers['user-agent'];
    return this.puntosUsuarioService.findPointTotalUser(body);
  }

  //Metodo GET que recibe por query el email del usuario
  @Get('points_expired/:idKeycloak')
  findPointsConsumed(@Param('idKeycloak') idKeycloak: string) {
    console.log('idKeycloak', idKeycloak)
    return this.puntosUsuarioService.findAllPointsToExpire(idKeycloak);
  }

  @Get('puntos_movement/list/:idKeycloak')
  findPointsMovement(@Param('idKeycloak') idKeycloak: string) {
    console.log('idKeycloak', idKeycloak)
    return this.puntosUsuarioService.findTotalPointsUser(idKeycloak);
  }

}
