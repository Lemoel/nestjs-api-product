import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from './book.model';
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) {

    }

    @Get()
    async findAll(): Promise<Book[]> {
        return this.booksService.findall();
    }

    @Get(':id')
    async findByPk(@Param() params): Promise<Book> {
        return this.booksService.findByPk(params.id);
    }

    @Post()
    async create(@Body() book: Book) {
        this.booksService.create(book);
    }

    @Put()
    async update(@Body() book: Book): Promise<[number, Book[]]> {
        return this.booksService.update(book);
    }
    
    @Delete(':id')
    async deleteById(@Param() params) {        
        this.booksService.deleteById(params.id);
    }
}