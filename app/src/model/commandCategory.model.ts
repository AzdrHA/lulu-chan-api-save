import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IIdentifiableModel } from '../interface/model/IIdentifiableModel';
import { ITimestampableEntity } from '../interface/model/ITimestampableModel';
import { IsInt, IsString } from 'class-validator';
import { Command } from './command/command.model';

@Entity('command_category')
export class CommandCategory implements IIdentifiableModel, ITimestampableEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @IsString({ message: 'Name must be a string', groups: ['create', 'update'] })
  public name: string;

  @Column({default: false})
  @IsInt({message: 'Category must be a string', groups: ['create', 'update']})
  public nsfw: boolean = false;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @OneToMany(() => Command, command => command.category)
  public commands: Command[];
}