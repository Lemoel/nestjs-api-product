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
let ProdutosController = class ProdutosController {
    constructor() {
        this.products = [
            new product_model_1.Product("Liv1", "Livro TDD e BDD na prática", 29.90),
            new product_model_1.Product("Liv2", "Livro Flutter na prática", 29.90),
            new product_model_1.Product("Liv3", "IA as a Service", 29.90),
        ];
    }
    findAll() {
        return 'Lista todos os produtos';
    }
    findById(params) {
        return `Retorna dados do produto ${params.id}`;
    }
    create(product) {
        console.log(product);
        return `Criado produto ${product.id}`;
    }
    updateById(product) {
        console.log(product);
        return 'Produto atualizado';
    }
    deleteById(params) {
        return `Produto ${params.id} apagado com sucesso`;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ProdutosController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ProdutosController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ProdutosController.prototype, "create", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ProdutosController.prototype, "updateById", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ProdutosController.prototype, "deleteById", null);
ProdutosController = __decorate([
    common_1.Controller('products')
], ProdutosController);
exports.ProdutosController = ProdutosController;
//# sourceMappingURL=products.controller.js.map