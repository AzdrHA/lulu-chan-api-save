import { Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ICrudService } from '../interface/ICrudService';

export default abstract class AbstractController<T> implements ICrudService<T> {
  protected constructor(private readonly service: ICrudService<T>) {}

  @Post()
  public create(data: T): string {
    return this.handlerRequest(this.service, 'create', data)
  }

  @Get('/:id')
  public read(@Param('id') id: number): string {
    return this.handlerRequest(this.service, 'read', id)
  }

  @Patch('/:id')
  public update(@Param('id') id: number, data: T): string {
    return this.handlerRequest(this.service, 'update', { id, data })
  }

  @Delete('/:id')
  public delete(@Param('id') id: number): string {
    return this.handlerRequest(this.service, 'delete', id)
  }

  public handlerRequest(service, fn, parameters): string {
    console.log('handlerRequest');
    console.log(service);
    console.log(fn);
    console.log(parameters);
    return service[fn](parameters);
    return 'handlerRequest';
  }
}