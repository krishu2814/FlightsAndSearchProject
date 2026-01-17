# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

- Migration file (to actually create the table in the database).

`npx sequelize db:migrate`
```


## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    - Relationship -> City has many airports and Airport belongs to a city (one to many)


### npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer


# sequelize-cli
```
   - npm install --save-dev sequelize-cli
   - npx sequelize-cli init
   - Open config/config.json and update the development section with  database credentials.
   - (username ,password, database name, and dialect).


   - npx sequelize-cli model:generate --name User --attributes firstName:string,email:string
   - npx sequelize-cli db:migrate
   - Rollback ->	npx sequelize-cli db:migrate:undo
   - npx sequelize-cli seed:generate --name demo-user
   - npx sequelize-cli db:seed:all

```

```
- Database -> Cities -> The physical storage on your hard drive (managed by the Migration).
- JavaScript -> City -> The class you use in Node.js to fetch data (managed by the Model file).
- db.sequqlize.sync() -> to get all airports of a city we need to sync first.
```
