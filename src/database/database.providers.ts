import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from 'src/constants';
import { Employee } from 'src/employee/employee.model';

const dotenv = require('dotenv');
dotenv.config();

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.PGHOST || 'localhost',
        port: Number(process.env.PGPORT) || 5432,
        username: process.env.PGUSER || 'postgres',
        password: process.env.PGPASSWORD || 'root',
        database: process.env.PGDATABASE || 'dev',
        define: {
          schema: process.env.PGSCHEMA || 'scott',
          timestamps: false,
          //   createdAt: 'created_at',
          //   updatedAt: 'updated_at',
          //   deletedAt: 'deleted_at',
          underscored: true,
        },
        minifyAliases: true,
      });
      // ! List of Models on which ORM applied
      sequelize.addModels([Employee]);
      // await sequelize.sync({force: false});
      return sequelize;
    },
  },
];
