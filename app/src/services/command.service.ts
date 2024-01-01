import { Command } from '../model/command/command.model';
import { Injectable } from '@nestjs/common';
import { ICrudService } from '../interface/ICrudService';
import { commandRepository } from '../repository/command.repository';
import ApiException from '../exception/ApiException';
import { commandCategoryRepository } from '../repository/command.category.repository';
import { imageRepository } from '../repository/image.repository';
import { ConfigService } from '@nestjs/config';
import * as util from 'util';
import { CommandCreateDto } from '../model/command/command.create.dto';

@Injectable()
export default class CommandService implements ICrudService {
  constructor(private configService: ConfigService) {
  }
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

  public async getImageByCommandName(name: string): Promise<unknown> {
    const image = await imageRepository.findOneImageByCommandName(name);
    if (!image)
      throw new ApiException('Image not found')

    console.log(this.configService.get('DB_NAME'));

    return {
      name: image.name,
      url: util.format(this.configService.get('CDN_URL'), image.path),
    };
  }

  public async createOrUpdate(id: number, data: CommandCreateDto): Promise<unknown> {
    let command = await commandRepository.findCommandById(id);
    if (!command) command = commandRepository.create();

    console.log(command);

    const existingCommand = await commandRepository.findCommandByName(data.name);
    if (existingCommand) throw new ApiException('Command name already exists');

    if (data.category) {
      const existingCategory = await commandCategoryRepository.findCategoryById(data.category);
      if (!existingCategory) throw new ApiException('Category not found');
    }

    return 'ok'

    // if (id) {
    //   const existingCommand = await commandRepository.findCommandById(id);
    //   if (!existingCommand) throw new ApiException('Command not found');
    //   return this.update(id, data);
    // }
    // return this.create(data);
  }
}