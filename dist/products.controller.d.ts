import { Product } from './product.model';
import { ProductsService } from "./produtcs.service";
export declare class ProdutosController {
    private productsService;
    constructor(productsService: ProductsService);
    findAll(): Product[];
    findById(params: any): Product;
    create(product: Product): void;
    update(product: Product): Product;
    deleteById(params: any): void;
}
