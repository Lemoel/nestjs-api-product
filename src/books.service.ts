import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Book } from "./book.model";

@Injectable()
export class BooksService {
   
    constructor(
        @InjectModel(Book)
        private bookModel: typeof Book
    ){}

    async findall(): Promise<Book[]> {
        return this.bookModel.findAll();
    }

    async findByPk(id: number): Promise<Book> {
        return this.bookModel.findByPk(id);
    }

    async create(book: Book) {
        this.bookModel.create(book);        
    }

    async update(book: Book): Promise<[number, Book[]]> {
        return this.bookModel.update(book, {
            where: {
                id: book.id
            }
        });
    }

    async deleteById(id: number) {
        const book: Book = await this.findByPk(id);
        book.destroy();
    }
}

