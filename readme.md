# Dependences and sequelize init

npm i -g yarn
yarn init -y
yarn add express sequelize pg mysql2
yarn add sequelize -D

yarn sequelize init

yarn sequelize migration:create --name=create-users
