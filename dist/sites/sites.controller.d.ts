import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
export declare class SitesController {
    private readonly sitesService;
    constructor(sitesService: SitesService);
    create(createSiteDto: CreateSiteDto): Promise<import("./entities/site.entity").Site>;
    findAll(): Promise<import("./entities/site.entity").Site[]>;
    filterSites(query: any): Promise<any>;
    findAllPagination(query: any): Promise<any[]>;
    findOne(id: string): Promise<import("./entities/site.entity").Site>;
    update(id: string, updateSiteDto: UpdateSiteDto): Promise<import("./entities/site.entity").Site>;
    remove(id: number): Promise<any>;
    selectSite(id: number): Promise<any>;
}
