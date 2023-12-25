import { Module } from '@nestjs/common';
import { DatabaseManager } from '../manager/DatabaseManager';
import { MysqlAdapter } from '../adapter/database/MysqlAdapter';
import { CommandModule } from './command.module';

@Module({
  imports: [
    new DatabaseManager().init(new MysqlAdapter()),
    CommandModule
  ],
})
export class AppModule {}
