import { Command } from '../model/command.model';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export default class CommandRepository extends Repository<Command> {}