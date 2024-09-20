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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaywallSchema = exports.Paywall = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const paywall_data_schema_1 = require("./paywall-data.schema");
let Paywall = exports.Paywall = class Paywall {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Paywall.prototype, "uniqueId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Paywall.prototype, "userType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Paywall.prototype, "site", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [paywall_data_schema_1.PaywallDataSchema] }),
    __metadata("design:type", Array)
], Paywall.prototype, "paywallData", void 0);
exports.Paywall = Paywall = __decorate([
    (0, mongoose_1.Schema)()
], Paywall);
exports.PaywallSchema = mongoose_1.SchemaFactory.createForClass(Paywall);
//# sourceMappingURL=paywall.schema.js.map