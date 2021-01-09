# nestjs-api-product

## NestJS: Criando uma API Rest com TypeScript

Este projeto tem por objetivo o estudo do framework https://nestjs.com/

Então a ideia é criar um conjunto de API Rest para criar, listar, deletar e atualizar livros.

Principais tópicos envolvidos no projeto:
 *Api Rest, Injeção de dependência, Mysql, ORM sequelize*

OBS: utilizei o Ubuntu 20.04, então todos os métodos de instalação estão voltados para este sistema operacional.

# Pré-requistos
Você deve ter instalado na sua máquina `nodeJS`

# Versões utilizadas neste projeto

* nodejs:    14.15.4
* npm:       6.14.10
* nest:      7.5.4
* sequelize: 5.22.3

com os comandos `$ node -v` e `$ npm -v` você pode ver as versões instaladas na sua máquina.

# Instalação do nestJS

Instalar a ferramente do nestJS de forma global
` npm install -g @nestjs/cli `

Para saber se foi instalado, veja a versão do seu nest com o comando `$ nest -v`, neste projeto utilizei a 7.5.4

Agora é só fazer o clone do projeto

Subir o servidor em modo dev para que seja feito reload automático das alterações do código
* `$ npm run start:dev`


# Instalação do ORM Sequelize

Foi utilizado a versão 5 por questões de compatibilidade

`npm install --save @nestjs/sequelize sequelize@5 sequelize-typescript mysql2`
