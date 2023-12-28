import { Module } from '@nestjs/common';
import { DatabaseManager } from '../manager/DatabaseManager';
import { MysqlAdapter } from '../adapter/database/MysqlAdapter';
import { CommandModule } from './command.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    DatabaseModule,
    CommandModule
  ],
})
export class AppModule {}
