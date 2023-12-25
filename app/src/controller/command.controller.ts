import { Controller } from '@nestjs/common';
import CommandService from '../services/command.service';
import AbstractController from '../abstract/AbstractController';
import { Command } from '../model/command.model';

@Controller('/command')
export class CommandController extends AbstractController<Command> {
  protected constructor(private readonly commandService: CommandService) {
    super(commandService);
  }
}
