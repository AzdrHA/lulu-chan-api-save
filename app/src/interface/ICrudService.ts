export interface ICrudService<T> {
  create(data: T): Promise<T>
  delete(id: number): Promise<unknown>;
  read(id: number): Promise<unknown>;
  update(id: number, data: T): Promise<unknown>;
}