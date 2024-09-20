import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { GamificationService } from '../service/gamification.service';
import { Public, Unprotected } from 'nest-keycloak-connect';

@Controller('gamification')
@Unprotected()
export class GamificationController {
  constructor(private readonly gamificationService: GamificationService) { }

  // SETEO DE VALOR MONETARIO DEL PUNTO Y FECHA EXPIRACION

  // 1- Obiene el valor unitario (en pesos) del punto
  @Get('/point_value/:idSite')
  findPointValueBySite(@Param('idSite') idSite: number) {
    return this.gamificationService.findPointValueBySite(idSite);
  }

  // 2- Edita el valor unitario (en pesos) del punto
  @Put('/point_value/:idSite')
  updatePointValueBySite(@Param('idSite') idSite: number, @Body() body) {
    return this.gamificationService.updatePointValueBySite(idSite, body);
  }

  // 3- Crea fecha actualiza estado de fechas antiguas fecha de expiracion
  @Post('/expire_time_point/create/:siteId')
  async createNewExpireTimeAndDeactivateCurrent(
    @Param('siteId') siteId: number,
    @Body() data: { expireTime: number },
  ) {
    const { expireTime } = data;
    return this.gamificationService.createNewExpireTimeAndDeactivateCurrent(
      siteId,
      expireTime,
    );
  }

  // 4- Obtiene fecha de expiracion activa
  @Get('active_expire_time/:siteId')
  async listActiveExpireTimePointsBySiteId(@Param('siteId') siteId: number) {
    return this.gamificationService.listActiveExpireTimePointsBySiteId(siteId);
  }

  //-----------------------------------------------------------------------------------
  // SETEO DE EVENTOS PARA PUNTOS EN TERMINOS MONETARIOS Y CONFIG DE CLUSTERS

  // 1- Creacion de eventos por la api
  @Post('event/create')
  createEvent(@Body() body) {
    return this.gamificationService.createEvent(body);
  }

  // 2- Listar todos los eventos (Monetario y cluster)
  @Get('/event/findAll')
  findAllEvent() {
    return this.gamificationService.findAllEvent();
  }

  // 3- Listar eventos con puntos (Monetario)
  @Get('event/withPoints/:idSite')
  findEventsWithPoints(@Param('idSite') idSite: number){
    return this.gamificationService.findEventsWithPoints(idSite);
  }

  // 4- Actualizar puntos evento por id (Monetario)
  @Put('/event/edit/:id_event')
  updateEventPoints(@Param('id_event', ParseIntPipe) id_event: number, @Body() body) {
    return this.gamificationService.updateEvent(id_event, body);
  }

  // 5- Reinicia los puntos del evento por id (Monetario)
  @Put('/event/restart_points/:id_event/:idSite')
  removeEvent(@Param('id_event') id_event: number, @Param('idSite') idSite: number){
    return this.gamificationService.removeEvent(id_event, idSite)
  }

  // 6- Actualiza repeticiones del evento (cluster)
  @Put('/event_repeats/:id_event')
  updateEventRepeats(@Body() body, @Param('id_event') id_event: number) {
    return this.gamificationService.updateEventRepeats(id_event, body);
  }

  // 7- Actualiza valor porcentual del evento (cluster)
  @Put('/porcentual_value/:id_event')
  updatePorcentualValue(@Body() body, @Param('id_event') id_event: number) {
    return this.gamificationService.updatePorcentualValue(id_event, body);
  }

  // 8- Obtener Cluster con sus eventos
  @Get('/cluster_events/:id_cluster/:idSite')
  getEventForCluster(@Param('id_cluster') id_cluster: number, @Param('idSite') idSite: number) {
    return this.gamificationService.getEventForCluster(id_cluster, idSite);
  }

  @Post('/cluster_events/:id_cluster')
  createEventForCluster(
    @Param('id_cluster', ParseIntPipe) id_cluster: number,
    @Body() body,
  ) {
    return this.gamificationService.createClusterEvent(id_cluster, body);
  }

  // 9- Actualizar cluster con sus eventos
  @Public(true)
  @Put('/cluster_events/:id_cluster')
  updateEventForCluster(
    @Param('id_cluster', ParseIntPipe) id_cluster: number,
    @Body() body,
  ) {
    return this.gamificationService.updateEventCluster(id_cluster, body);
  }

  // 10- Eliminar cluster con sus eventos
  @Public(true)
  @Delete('/cluster_events/:id_cluster/:id_event')
  removeEventForCluster(
    @Param('id_cluster', ParseIntPipe) id_cluster: number,
    @Param('id_event', ParseIntPipe) id_event: number,
  ) {
    return this.gamificationService.removeEventFromCluster(id_cluster, id_event);
  }

  //PENALIZACION DE CLUSTERS POR SITIO
  @Post('/cluster_penalization/create')
  createClusterPenalization(@Body() body) {
    return this.gamificationService.createClusterPenalization(body);
  }

  @Put('/cluster_penalization/update')
  updateClusterPenalization(@Body() body,
  ) {
    return this.gamificationService.updateClusterPenalization(body);
  }

  @Get('/cluster_penalization/findAll')
  findAllClusterPenalization() {
    return this.gamificationService.getAllClusterPenalization();
  }

  @Get('/cluster_penalization/:idSite')
  findClusterPenalization(@Param('idSite') idSite: number) {
    return this.gamificationService.getOneClusterPenalization(idSite);
  }

  @Public(true)
  @Get('/advance_cluster/:idSite/:idKeycloak')
  getAdvanceCluster(@Param('idSite') idSite: number, @Param('idKeycloak') idKeycloak: string) {
    return this.gamificationService.getAdvanceCluster(idSite, idKeycloak);
  }
}
