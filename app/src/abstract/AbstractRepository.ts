import { ICrudRepository } from '../interface/ICrudRepository';
import { Repository, DataSource } from 'typeorm';
import { Command } from '../model/command.model';

export default abstract class AbstractRepository<T> extends Repository<T> {
  protected constructor(private entity: T, private dataSourse: DataSource) {
    super(Command, dataSourse.createEntityManager());
  }
}