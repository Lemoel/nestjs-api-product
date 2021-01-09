import { Product } from './product.model';
export declare class ProdutosController {
    products: Product[];
    findAll(): string;
    findById(params: any): string;
    create(product: any): string;
    updateById(product: any): string;
    deleteById(params: any): string;
}
