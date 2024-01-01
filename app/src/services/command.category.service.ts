import { Command } from '../model/command.model';
import { Injectable } from '@nestjs/common';
import { ICrudService } from '../interface/ICrudService';
import ApiException from '../exception/ApiException';
import { commandCategoryRepository } from '../repository/command.category.repository';

@Injectable()
export default class CommandCategoryService implements ICrudService<Command> {
  public async create(data: Command): Promise<Command> {
    return commandCategoryRepository.save(data);
  }

  public delete(id: number): Promise<unknown> {
    return commandCategoryRepository.delete(id);
  }

  public read(id: number): Promise<unknown> {
    return commandCategoryRepository.findCategoryById(id);
  }

  public update(id: number, data: Command): Promise<unknown> {
    return commandCategoryRepository.update(id, data);
  }

  public getAll(): Promise<unknown> {
    return commandCategoryRepository.getAllCategories();
  }

  public async createOrUpdate(id: number, data: Command): Promise<Command> {
    const existingCommand = await commandCategoryRepository.findCategoryByName(data.name);
    if (existingCommand) throw new ApiException('Category already exists');

    if (id) {
      return this.update(id, data);
    } else {
      return this.create(data);
    }
  }
}