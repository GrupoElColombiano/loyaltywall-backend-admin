"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSiteDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_site_dto_1 = require("./create-site.dto");
class UpdateSiteDto extends (0, swagger_1.PartialType)(create_site_dto_1.CreateSiteDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateSiteDto = UpdateSiteDto;
//# sourceMappingURL=update-site.dto.js.map