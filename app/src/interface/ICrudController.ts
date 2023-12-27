export interface ICrudController<T> {
  create(response: Response, data: T): Promise<T>;
  read(response: Response, id: number): Promise<T>;
  update(response: Response, id: number, data: T): Promise<T>;
  delete(response: Response, id: number): Promise<T>;
}