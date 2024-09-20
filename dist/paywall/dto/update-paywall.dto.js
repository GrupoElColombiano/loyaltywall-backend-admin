"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaywallDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_paywall_dto_1 = require("./create-paywall.dto");
class UpdatePaywallDto extends (0, mapped_types_1.PartialType)(create_paywall_dto_1.CreatePaywallDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdatePaywallDto = UpdatePaywallDto;
//# sourceMappingURL=update-paywall.dto.js.map