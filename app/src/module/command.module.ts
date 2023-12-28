import { Module } from '@nestjs/common';
import { CommandController } from '../controller/command.controller';
import CommandService from '../services/command.service';

@Module({
  providers: [
    CommandService
  ],
  controllers: [CommandController],
})
export class CommandModule {}
