import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule } from '@nestjs/common';
import { IDatabaseAdapter } from '../../interface/IDatabaseAdapter';
import * as process from 'process';
import { Command } from '../../model/command.model';

export class MysqlAdapter implements IDatabaseAdapter {
  public connect(): DynamicModule {
    return TypeOrmModule.forRoot({
      migrationsTableName: 'migrations',
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      entities: [Command],
      autoLoadEntities: true,
    });
  }
}