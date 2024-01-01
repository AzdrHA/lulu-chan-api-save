import { Module } from '@nestjs/common';
import CommandCategoryService from '../services/command.category.service';
import { CommandCategoryController } from '../controller/command.category.controller';

@Module({
  providers: [
    CommandCategoryService
  ],
  controllers: [CommandCategoryController],
})
export class CommandCategoryModule {}
