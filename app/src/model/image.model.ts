import { IIdentifiableModel } from '../interface/model/IIdentifiableModel';
import { ITimestampableEntity } from '../interface/model/ITimestampableModel';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';
import { Command } from './command/command.model';

@Entity('image')
@Unique(['name', 'md5'])
export class Image implements IIdentifiableModel, ITimestampableEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public path: string;

  @Column()
  public md5: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @ManyToOne(() => Command, (command) => command.images)
  public command: Command;
}