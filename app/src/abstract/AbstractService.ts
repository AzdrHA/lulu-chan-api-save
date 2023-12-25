import { Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ICrudService } from '../interface/ICrudService';
import { Command } from '../model/command.model';
import { ICrudRepository } from '../interface/ICrudRepository';

export default abstract class AbstractService<T> implements ICrudService<T> {
  constructor(private repository: ICrudRepository<T>) {
  }
  public create(data: T): string {
    return this.repository.create(data);
  }

  public delete(id: number): string {
    this.repository.delete(id);
  }

  public read(id: number): string {
    return 'read';
  }

  public update(id: number, data: T): string {
    return 'update';
  }
}