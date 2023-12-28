import { Module } from '@nestjs/common';
import { DatabaseManager } from '../manager/DatabaseManager';
import { MysqlAdapter } from '../adapter/database/MysqlAdapter';

@Module({
  providers: [new DatabaseManager().init(new MysqlAdapter())],
  exports: [new DatabaseManager().init(new MysqlAdapter())],
})
export class DatabaseModule {
}