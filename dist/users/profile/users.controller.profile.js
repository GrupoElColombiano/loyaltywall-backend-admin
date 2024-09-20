"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileController = void 0;
const common_1 = require("@nestjs/common");
const update_user_dto_1 = require("../dto/update-user.dto");
const swagger_1 = require("@nestjs/swagger");
const users_service_profile_1 = require("./users.service.profile");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
let UserProfileController = exports.UserProfileController = class UserProfileController {
    constructor(UserProfileService) {
        this.UserProfileService = UserProfileService;
    }
    update(id, updateUserPasswordDto) {
        return this.UserProfileService.updatePassword(+id, updateUserPasswordDto);
    }
};
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserPasswordDto]),
    __metadata("design:returntype", void 0)
], UserProfileController.prototype, "update", null);
exports.UserProfileController = UserProfileController = __decorate([
    (0, swagger_1.ApiTags)('USERS-PROFILE'),
    (0, common_1.Controller)('profile'),
    (0, nest_keycloak_connect_1.Unprotected)(),
    __metadata("design:paramtypes", [users_service_profile_1.UserProfileService])
], UserProfileController);
//# sourceMappingURL=users.controller.profile.js.map