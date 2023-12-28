import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { ValidationPipe } from '@nestjs/common';

(async () => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));
  await app.listen(3000);
})();