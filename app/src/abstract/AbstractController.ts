import { ICrudService } from '../interface/ICrudService';
import ApiException from '../exception/ApiException';
import { Response } from 'express';
import { IIdentifiableModel } from '../interface/model/IIdentifiableModel';
import { EntityNotFoundError } from 'typeorm';

export default abstract class AbstractController<T extends IIdentifiableModel> {
  public async handlerRequest(response: Response, args: {
    service: ICrudService<T>;
    fn: string,
    args?: unknown[]
  }): Promise<any> {
    const service = args['service'];
    const fn = args['fn'] ?? null;
    const fnArgs = args['args'] ?? [];

    if (!service && !fn) throw new ApiException('Aucun service demandé');
    try {
      const result = await service[fn](...fnArgs);
      return response.status(200).json(result);
    } catch (e) {
      if (e instanceof ApiException) return response.status(e.status).json({
        message: e.message,
        status: e.status,
      });
      if (e instanceof EntityNotFoundError) {
        return response.status(404).json({
          message: 'entity not found',
          status: 404,
        });
      }
      console.log(e);
      return response.status(500).json({
        message: 'Une erreur est survenue',
        status: 500,
        error: e.message,
      });
    }
  }
}