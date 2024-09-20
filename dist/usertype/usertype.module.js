"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsertypeModule = void 0;
const common_1 = require("@nestjs/common");
const usertype_service_1 = require("./usertype.service");
const usertype_controller_1 = require("./usertype.controller");
const typeorm_1 = require("@nestjs/typeorm");
const usertype_entity_1 = require("./entity/usertype.entity");
let UsertypeModule = exports.UsertypeModule = class UsertypeModule {
};
exports.UsertypeModule = UsertypeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([usertype_entity_1.UserType])],
        controllers: [usertype_controller_1.UsertypeController],
        providers: [usertype_service_1.UsertypeService]
    })
], UsertypeModule);
//# sourceMappingURL=usertype.module.js.map