import { Module } from '@nestjs/common';
import { CommandModule } from './command.module';
import { DatabaseModule } from './database.module';
import { CommandCategoryModule } from './command.category.module';

@Module({
  imports: [
    DatabaseModule,
    CommandCategoryModule,
    // CommandModule,
  ],
})
export class AppModule {}
