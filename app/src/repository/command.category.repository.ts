import TypeormConfig from '../config/typeorm.config';
import { CommandCategory } from '../model/commandCategory.model';
import { IsNull, Not } from 'typeorm';

export const commandCategoryRepository = TypeormConfig.getRepository(CommandCategory).extend({
  findCategoryByName: async (name: string) => {
    return await TypeormConfig.getRepository(CommandCategory).findOne({ where: { name: name } });
  },
  findCategoryById: async (id: number) => {
    return await TypeormConfig.getRepository(CommandCategory).findOne({ where: { id: id } });
  },
  getAllCategories: async () => {
    return await TypeormConfig.getRepository(CommandCategory).find( { relations: ['commands'] });
  }
});

