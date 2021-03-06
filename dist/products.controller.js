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
exports.ProdutosController = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
const produtcs_service_1 = require("./produtcs.service");
let ProdutosController = class ProdutosController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    findAll() {
        return this.productsService.findall();
    }
    findById(params) {
        return this.productsService.findById(params.id);
    }
    create(product) {
        this.productsService.create(product);
    }
    update(product) {
        return this.productsService.update(product);
    }
    deleteById(params) {
        this.productsService.deleteById(params.id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProdutosController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", product_model_1.Product)
], ProdutosController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.Product]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "create", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.Product]),
    __metadata("design:returntype", product_model_1.Product)
], ProdutosController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "deleteById", null);
ProdutosController = __decorate([
    common_1.Controller('products'),
    __metadata("design:paramtypes", [produtcs_service_1.ProductsService])
], ProdutosController);
exports.ProdutosController = ProdutosController;
//# sourceMappingURL=products.controller.js.map