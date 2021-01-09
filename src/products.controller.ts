import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from './product.model';

@Controller('products')
export class ProdutosController {

    products: Product[] = [
        new Product ("Liv1", "Livro TDD e BDD na prática", 29.90),
        new Product ("Liv2", "Livro Flutter na prática", 29.90),
        new Product ("Liv3", "IA as a Service", 29.90),
    ];

    @Get()
    findAll(): string {
        return 'Lista todos os produtos';
    }

    @Get(':id')
    findById(@Param() params): string {
        return `Retorna dados do produto ${params.id}`;
    }

    @Post()
    create(@Body() product): string {
        console.log(product);
        return `Criado produto ${product.id}`;
    }

    @Put()
    updateById(@Body() product): string {
        console.log(product);
        return 'Produto atualizado';
    }
    
    @Delete(':id')
    deleteById(@Param() params): string {
        return `Produto ${params.id} apagado com sucesso`;
    }
}