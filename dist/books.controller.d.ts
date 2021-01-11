import { Book } from './book.model';
import { BooksService } from "./books.service";
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    findAll(): Promise<Book[]>;
    findByPk(params: any): Promise<Book>;
    create(book: Book): Promise<void>;
    update(book: Book): Promise<[number, Book[]]>;
    deleteById(params: any): Promise<void>;
}
