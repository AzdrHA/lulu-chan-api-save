import { Module } from '@nestjs/common';
import { CommandController } from '../controller/command.controller';
import CommandService from '../services/command.service';

@Module({
  controllers: [CommandController],
  providers: [CommandService],
})
export class CommandModule {}
