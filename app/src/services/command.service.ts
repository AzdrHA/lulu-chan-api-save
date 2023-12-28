import { Command } from '../model/command.model';
import { Injectable } from '@nestjs/common';
import { ICrudService } from '../interface/ICrudService';
import { commandRepository } from '../repository/command.repository';
import ApiException from '../exception/ApiException';

@Injectable()
export default class CommandService implements ICrudService<Command> {
  public async create(data: Command): Promise<Command> {
    const existingCommand = await commandRepository.findCommandByName(data.name);
    if (existingCommand) throw new ApiException('Command already exists');
    return commandRepository.save(data);
  }

  public delete(id: number): Promise<unknown> {
    return commandRepository.delete(id);
  }

  public read(id: number): Promise<unknown> {
    return commandRepository.findCommandById(id);
  }

  public update(id: number, data: Command): Promise<unknown> {
    return commandRepository.update(id, data);
  }
}