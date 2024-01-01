import TypeormConfig from '../config/typeorm.config';
import { Image } from '../model/image.model';

export const imageRepository = TypeormConfig.getRepository(Image).extend({
  findOneImageByCommandName(command: string) {
    return this.createQueryBuilder('i')
      .leftJoin('i.command', 'c')
      .where('c.name = :name')
      .orderBy('RAND()')
      .setParameter('name', command)
      .getOne();
  }
});

