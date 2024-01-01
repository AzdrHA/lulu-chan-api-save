export interface ICrudService {
  create(data: unknown): Promise<unknown>
  delete(id: number): Promise<unknown>;
  read(id: number): Promise<unknown>;
  update(id: number, data: unknown): Promise<unknown>;
}