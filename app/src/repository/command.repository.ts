import { Command } from '../model/command.model';
import TypeormConfig from '../config/typeorm.config';

export const commandRepository = TypeormConfig.getRepository(Command).extend({
  findCommandByName: async (name: string) => {
    return await TypeormConfig.getRepository(Command).findOne({ where: { name: name } });
  },
  findCommandById: async (id: number) => {
    return await TypeormConfig.getRepository(Command).findOneOrFail({ where: { id: id } });
  }
});

