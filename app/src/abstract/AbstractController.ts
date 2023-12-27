import { Body, Delete, Get, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { ICrudService } from '../interface/ICrudService';
import ApiException from '../exception/ApiException';
import { Response } from 'express';

export default abstract class AbstractController<T> {
  protected constructor(private readonly service: ICrudService<T>) {
  }

  @Post()
  public create(@Res() response: Response, @Body() data: T): Promise<unknown> {
    return this.handlerRequest(response, {
      service: this.service,
      fn: 'create',
      args: [data],
    });
  }
  //
  // @Get('/:id')
  // public read(@Res() response: Response, @Param('id') id: number): Promise<unknown> {
  //   return this.handlerRequest(response, {
  //     service: this.service,
  //     fn: 'read',
  //     args: [id],
  //   });
  // }
  //
  // @Patch('/:id')
  // public update(@Res() response: Response, @Param('id') id: number, data: T): Promise<unknown> {
  //   return this.handlerRequest(response, {
  //     service: this.service,
  //     fn: 'update',
  //     args: [id, data],
  //   });
  // }

  @Delete('/:id')
  public delete(@Res() response: Response, @Param('id') id: number): Promise<unknown> {
    return this.handlerRequest(response, {
      service: this.service,
      fn: 'delete',
      args: [id],
    });
  }


  public async handlerRequest(response: Response, args: {
    service: ICrudService<T>;
    fn: string,
    args?: unknown[]
  }): Promise<unknown> {
    const service = args['service'];
    const fn = args['fn'] ?? null;
    const fnArgs = args['args'] ?? [];

    if (!service && !fn) throw new ApiException('Aucun service demandé');
    return response.json(await service[fn](...fnArgs));
  }
}