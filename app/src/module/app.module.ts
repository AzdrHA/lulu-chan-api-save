import { Module } from '@nestjs/common';
import { CommandModule } from './command.module';
import { DatabaseModule } from './database.module';
import { CommandCategoryModule } from './command.category.module';

@Module({
  imports: [
    DatabaseModule,
    CommandModule,
    CommandCategoryModule
  ],
})
export class AppModule {}
