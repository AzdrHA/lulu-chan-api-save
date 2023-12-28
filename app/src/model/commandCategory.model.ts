import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IIdentifiableModel } from '../interface/model/IIdentifiableModel';
import { ITimestampableEntity } from '../interface/model/ITimestampableModel';
import { IsBoolean, IsString } from 'class-validator';

@Entity('command_category')
export class CommandCategory implements IIdentifiableModel, ITimestampableEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @IsString({ message: 'Name must be a string', groups: ['create', 'update'] })
  public name: string;

  @Column()
  @IsBoolean()
  public nsfw: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}