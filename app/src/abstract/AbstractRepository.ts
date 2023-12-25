import { ICrudRepository } from '../interface/ICrudRepository';

export default abstract class AbstractRepository<T> implements ICrudRepository<T> {
  create(data: T): string {
    return '';
  }

  delete(id: number): string {
    return '';
  }

  read(id: number): string {
    return '';
  }

  update(id: number, data: T): string {
    return '';
  }
}