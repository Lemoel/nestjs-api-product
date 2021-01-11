"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [
            new product_model_1.Product("Liv1", "Livro TDD e BDD na prática", 29.90),
            new product_model_1.Product("Liv2", "Livro Flutter na prática", 29.90),
            new product_model_1.Product("Liv3", "IA as a Service", 29.90),
        ];
    }
    findall() {
        return this.products;
    }
    findById(id) {
        return this.products[0];
    }
    create(product) {
        this.products.push(product);
    }
    update(product) {
        return product;
    }
    deleteById(id) {
        this.products.pop();
    }
};
ProductsService = __decorate([
    common_1.Injectable()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=produtcs.service.js.map