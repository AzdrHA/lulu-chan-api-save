import { IsString } from 'class-validator';

export class CommandCreateDto {
  @IsString()
  name: string
}