"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const books_controller_1 = require("./books.controller");
const books_service_1 = require("./books.service");
const sequelize_1 = require("@nestjs/sequelize");
const book_model_1 = require("./book.model");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: '172.17.0.2',
                port: 3306,
                username: 'root',
                password: '',
                database: 'book_store',
                autoLoadModels: true,
                synchronize: true,
            }),
            sequelize_1.SequelizeModule.forFeature([book_model_1.Book])
        ],
        controllers: [app_controller_1.AppController, books_controller_1.BooksController],
        providers: [app_service_1.AppService, books_service_1.BooksService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map