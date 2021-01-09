import { Produto } from './produto.model';
export declare class ProdutosController {
    produtos: Produto[];
    obterTodos(): string;
    obterum(params: any): string;
    criar(produto: any): string;
    alterar(produto: any): string;
    apagar(params: any): string;
}
