import { Product } from "./product.model";
export declare class ProductsService {
    products: Product[];
    findall(): Product[];
    findById(id: number): Product;
    create(product: Product): void;
    update(product: Product): Product;
    deleteById(id: number): void;
}
