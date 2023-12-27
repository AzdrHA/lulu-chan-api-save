export interface ICrudRepository<T> {
  create(data: T): string;
  delete(id: number): Promise<unknown>;
  read(id: number): Promise<unknown>;
  update(id: number, data: T): Promise<unknown>;
}