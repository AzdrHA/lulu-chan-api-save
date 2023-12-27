import { Repository } from 'typeorm/repository/Repository';
import { ICrudService } from '../interface/ICrudService';
import { DeleteResult } from 'typeorm';
import { IIdentifiableModel } from '../interface/model/IIdentifiableModel';
import { Command } from '../model/command.model';

export default abstract class AbstractService<T extends IIdentifiableModel> implements ICrudService<T> {
  protected constructor(public repository: Repository<T>) {
  }

  public create(data: T): Promise<T> {
    return this.repository.save(data);
  }

  public delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  public read(id: number): Promise<T> {
    return this.repository.findOne({ where: { id: id } });
  }

  // public read(id: number): Promise<T> {
  //   return this.repository.findOne({ where: { id: id } });
  // }
  //
  // public update(id: number, data: T): Promise<unknown> {
  //   return this.repository.update(id, data);
  // }
}