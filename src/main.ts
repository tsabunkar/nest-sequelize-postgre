import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import * as fastifyCompress from 'fastify-compress';
import * as fastifyCors from 'fastify-cors';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // ! Replacing default Nestjs-express App to Nestjs-Fastify App
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
      bodyLimit: 50000000,
    }),
  );

  // ! Adding Fastify Cors and Compress
  app.register(fastifyCompress);
  app.register(fastifyCors);

  await app.listen(3000);
}
bootstrap();
