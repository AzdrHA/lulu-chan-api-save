import { Module } from '@nestjs/common';
import { CommandController } from '../controller/command.controller';
import CommandService from '../services/command.service';
import CommandRepository from '../repository/command.repository';
import { Command } from '../model/command.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Command])],
  controllers: [CommandController],
  providers: [CommandService],
})
export class CommandModule {}
