import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsString } from 'class-validator';
import { IIdentifiableModel } from '../interface/model/IIdentifiableModel';
import { ITimestampableEntity } from '../interface/model/ITimestampableModel';

@Entity()
@Unique(['name'])
export class Command implements IIdentifiableModel, ITimestampableEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @IsString({ message: 'Name must be a string', groups: ['create', 'update'] })
  public name: string;

  @Column({default: 0})
  public use: number = 0;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
