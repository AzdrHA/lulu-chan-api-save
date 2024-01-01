import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import CommandService from '../services/command.service';
import AbstractController from '../abstract/AbstractController';
import { Response } from 'express';
import { Command } from '../model/command.model';

@Controller('/command')
export class CommandController extends AbstractController<Command> {
  constructor(private commandService: CommandService) {
    super();
  }

  @Post()
  public async create(@Res() response: Response, @Body() data: Command): Promise<Command> {
    return this.handlerRequest(response, {
      service: this.commandService,
      fn: 'createOrUpdate',
      args: [null, data],
    });
  }

  @Get('/:id')
  public read(@Res() response: Response, @Param('id') id: number): Promise<Command> {
    return this.handlerRequest(response, {
      service: this.commandService,
      fn: 'read',
      args: [id],
    });
  }

  @Patch('/:id')
  public update(@Res() response: Response, @Param('id') id: number, @Body() data: Command): Promise<Command> {
    return this.handlerRequest(response, {
      service: this.commandService,
      fn: 'createOrUpdate',
      args: [id, data],
    });
  }

  @Delete('/:id')
  public delete(@Res() response: Response, @Param('id') id: number): Promise<Command> {
    return this.handlerRequest(response, {
      service: this.commandService,
      fn: 'delete',
      args: [id],
    });
  }
}
