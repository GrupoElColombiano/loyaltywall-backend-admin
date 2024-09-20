"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const dist_1 = require("@nestjs/typeorm/dist");
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const user_entity_1 = require("./entities/user.entity");
const users_service_1 = require("./users.service");
const users_controller_profile_1 = require("./profile/users.controller.profile");
const users_service_profile_1 = require("./profile/users.service.profile");
const registerlog_module_1 = require("../registerlog/registerlog.module");
const user_plan_entity_1 = require("../common/entity/user-plan.entity");
const user_points_entity_1 = require("../puntos_usuario/entity/user_points.entity");
let UsersModule = exports.UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [dist_1.TypeOrmModule.forFeature([user_entity_1.UserAdminEntity, user_plan_entity_1.UserPlan, user_points_entity_1.UserPoints]), registerlog_module_1.RegisterlogModule],
        controllers: [users_controller_1.UsersController, users_controller_profile_1.UserProfileController],
        providers: [users_service_1.UsersService, users_service_profile_1.UserProfileService],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map