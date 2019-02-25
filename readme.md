# Dependences and sequelize init

npm i -g yarn
yarn init -y
yarn add express sequelize pg mysql2 dotenv
yarn add sequelize nodemon jest sqlite3 -D

<!-- Iniciando sequilize e gerando arquiivos -->
yarn sequelize init

<!-- Criando Migratoin -->
yarn sequelize migration:create --name=create-users

<!-- Criando bando no mysql antes de rodar migration -->
echo 'create schema nodeauth' | mysql -uroot -p

<!-- Rodando migrations: -->
yarn sequelize db:migrate

<!-- Iniciando jest para TDD -->
yarn jest --init

<!-- rodando testes -->
yarn test
