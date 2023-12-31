import { DataSource } from 'typeorm';
import { APP_DIR, PROJECT_DIR } from './Constant';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();
export default new DataSource({
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  migrations: [
    PROJECT_DIR + '/migrations/*.ts',
  ],
  entities: [
    APP_DIR + '/model/*.model{.ts,.js}',
  ],
})