"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateManagerModule = void 0;
const common_1 = require("@nestjs/common");
const template_manager_service_1 = require("./template-manager.service");
const template_manager_controller_1 = require("./template-manager.controller");
const mongoose_1 = require("@nestjs/mongoose");
const template_schema_1 = require("./chemma/template.schema");
const registerlog_module_1 = require("../registerlog/registerlog.module");
const typeorm_1 = require("@nestjs/typeorm");
const plan_template_entity_1 = require("../plans/entity/plan-template.entity");
let TemplateManagerModule = exports.TemplateManagerModule = class TemplateManagerModule {
};
exports.TemplateManagerModule = TemplateManagerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: template_schema_1.Template.name,
                    schema: template_schema_1.TemplateSchema
                }
            ]),
            registerlog_module_1.RegisterlogModule,
            typeorm_1.TypeOrmModule.forFeature([plan_template_entity_1.PlanTemplate])
        ],
        providers: [template_manager_service_1.TemplateManagerService],
        controllers: [template_manager_controller_1.TemplateManagerController]
    })
], TemplateManagerModule);
//# sourceMappingURL=template-manager.module.js.map