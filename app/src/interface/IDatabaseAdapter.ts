import { DynamicModule } from '@nestjs/common';

export interface IDatabaseAdapter {
  connect(): DynamicModule;
}
