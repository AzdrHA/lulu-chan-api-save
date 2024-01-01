import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import AbstractController from '../abstract/AbstractController';
import { Response } from 'express';
import CommandCategoryService from '../services/command.category.service';
import { CommandCategory } from '../model/commandCategory.model';

@Controller('/command_category')
export class CommandCategoryController extends AbstractController<CommandCategory> {
  constructor(private commandCategoryService: CommandCategoryService) {
    super();
  }

  @Post()
  public async create(@Res() response: Response, @Body() data: CommandCategory): Promise<CommandCategory> {
    return this.handlerRequest(response, {
      service: this.commandCategoryService,
      fn: 'createOrUpdate',
      args: [null, data],
    });
  }

  @Get('/:id')
  public read(@Res() response: Response, @Param('id') id: number): Promise<CommandCategory> {
    return this.handlerRequest(response, {
      service: this.commandCategoryService,
      fn: 'read',
      args: [id],
    });
  }

  @Patch('/:id')
  public update(@Res() response: Response, @Param('id') id: number, @Body() data: CommandCategory): Promise<CommandCategory> {
    return this.handlerRequest(response, {
      service: this.commandCategoryService,
      fn: 'createOrUpdate',
      args: [id, data],
    });
  }

  @Delete('/:id')
  public delete(@Res() response: Response, @Param('id') id: number): Promise<CommandCategory> {
    return this.handlerRequest(response, {
      service: this.commandCategoryService,
      fn: 'delete',
      args: [id],
    });
  }

  @Get()
  public async getAll(@Res() response: Response): Promise<CommandCategory[]> {
    return this.handlerRequest(response, {
      service: this.commandCategoryService,
      fn: 'getAll',
      args: [],
    });
  }
}
