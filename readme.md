# Dependencies

```sh
npm i -g yarn
yarn init -y
yarn add express sequelize pg mysql2 dotenv bcryptjs
yarn add sequelize nodemon jest sqlite3 supertest -D
```

## Sequelize

- Initialization: `yarn sequelize init`
- Creating Migration: `yarn sequelize migration:create --name=create-users`
- Creating database on mysql: `echo 'create schema nodeauth' | mysql -uroot -p`
- Running Migrations: `yarn sequelize db:migrate`

## Jest 

- Jest initialization: `yarn jest --init`
- Running Tests: `yarn test`
