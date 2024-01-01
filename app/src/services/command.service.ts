import { Command } from '../model/command.model';
import { Injectable } from '@nestjs/common';
import { ICrudService } from '../interface/ICrudService';
import { commandRepository } from '../repository/command.repository';
import ApiException from '../exception/ApiException';
import { commandCategoryRepository } from '../repository/command.category.repository';

@Injectable()
export default class CommandService implements ICrudService<Command> {
  public async create(data: Command): Promise<Command> {
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

  public async createOrUpdate(id: number, data: Command): Promise<Command> {
    const existingCommand = await commandRepository.findCommandByName(data.name);
    if (existingCommand) throw new ApiException('Command name already exists');

    if (data.category) {
      const existingCategory = await commandCategoryRepository.findCategoryById(data.category);
      if (!existingCategory) throw new ApiException('Category not found');
      data.category = existingCategory;
    }

    if (id) {
      const existingCommand = await commandRepository.findCommandById(id);
      if (!existingCommand) throw new ApiException('Command not found');
      return this.update(id, data);
    }
    return this.create(data);
  }
}