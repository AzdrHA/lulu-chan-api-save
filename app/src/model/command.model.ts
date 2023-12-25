import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export class Command {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column({default: 0})
  public use: number = 0;
}
