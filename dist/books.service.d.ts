import { Book } from "./book.model";
export declare class BooksService {
    private bookModel;
    constructor(bookModel: typeof Book);
    findall(): Promise<Book[]>;
    findByPk(id: number): Promise<Book>;
    create(book: Book): Promise<void>;
    update(book: Book): Promise<[number, Book[]]>;
    deleteById(id: number): Promise<void>;
}
