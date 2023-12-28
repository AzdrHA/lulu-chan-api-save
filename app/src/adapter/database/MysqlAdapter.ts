import { IDatabaseAdapter } from '../../interface/IDatabaseAdapter';
import TypeormConfig from '../../config/typeorm.config';
import { DataSource } from 'typeorm';

export class MysqlAdapter implements IDatabaseAdapter {
  public connect(): { provide: string; useFactory: () => Promise<DataSource> } {
    return {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
        return TypeormConfig.initialize();
      }
    }
  }
}