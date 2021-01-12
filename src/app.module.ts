import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '172.17.0.2',
      port: 3306,
      username: process.env.USER_DB,
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
