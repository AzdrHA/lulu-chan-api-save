import AbstractService from '../abstract/AbstractService';
import { ICrudService } from '../interface/ICrudService';
import { Command } from '../model/command.model';
import CommandRepository from '../repository/command.repository';
import { InjectRepository } from '@nestjs/typeorm';

export default class CommandService extends AbstractService<Command> implements ICrudService<Command> {
  constructor(
    @InjectRepository(Command) public repository: CommandRepository,
  ) {
    super(repository);
  }
}