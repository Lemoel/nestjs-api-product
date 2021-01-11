import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '172.17.0.2',
      port: 3306,
      username: 'root',
      password: '',
      database: 'book_store',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Book])
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
