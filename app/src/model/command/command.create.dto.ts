import { IsInt, IsString } from 'class-validator';
import { CommandCategory } from '../commandCategory.model';

export class CommandCreateDto {
  @IsString({ message: 'Name must be a string', groups: ['create', 'update'] })
  public name: string;

  @IsInt({message: 'Category must be a number', groups: ['create', 'update']})
  public category: number;
}