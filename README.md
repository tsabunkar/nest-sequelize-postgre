npm i pg
npm i pg-hstore
npm i sequelize
npm i sequelize-typescript
(delete express and install fastify)
npm i @nestjs/platform-fastify
npm i fastify-cors
npm i fastify-compress
npm i fastify-swagger
npm i dotenv

---

- Add nestify related factory in main.ts file -> NestFastifyApplication
- nest g module database
- Add database.provider.ts file (Import Sequelize Config )
- Add .env file and db constants
- nest g module employee
- nest g controller employee
- nest g service employee
