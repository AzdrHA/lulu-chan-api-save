import { Module } from '@nestjs/common';
import { CommandController } from '../controller/command.controller';
import CommandService from '../services/command.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    CommandService,
    ConfigService,
  ],
  controllers: [CommandController],
})
export class CommandModule {}
