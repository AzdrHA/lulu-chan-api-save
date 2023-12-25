export interface ICrudController<T> {
  create(data: T): string;
  read(id: number): string;
  update(id: number, data: T): string;
  delete(id: number): string;
}