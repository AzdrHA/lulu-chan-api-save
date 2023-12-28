import { DataSource } from 'typeorm';
import { APP_DIR, PROJECT_DIR } from './Constant';

export default new DataSource({
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // entities: [Command, CommandCategory],
  migrations: [
    PROJECT_DIR + '/migrations/*.ts',
  ],
  entities: [
    APP_DIR + '/model/*.model{.ts,.js}',
  ],
})