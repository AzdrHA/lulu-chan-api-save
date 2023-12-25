import AbstractService from '../abstract/AbstractService';
import { ICrudService } from '../interface/ICrudService';
import { Command } from '../model/command.model';
import CommandRepository from '../repository/command.repository';

export default class CommandService extends AbstractService<Command> implements ICrudService<Command> {
  constructor(private repository: CommandRepository) {
    super(repository);
  }
}