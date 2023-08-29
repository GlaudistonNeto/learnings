import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { TypeormStore } from 'connect-typeorm';
import { DataSource } from 'typeorm';
import { SessionEntity } from './typeorm/Session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sessionRepository = app.get(DataSource).getRepository(SessionEntity);
  app.setGlobalPrefix('api');
  app.use(
    session({
      name: 'NESTJS_SESSION_ID',
      secret: 'FTPaTze_Rn^@DLnr`6aeen(j8}szJ+Rt9k7X9Ksjpm%ci!oD]B',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000 * 60 * 60 * 24 * 30
      },
      store: new TypeormStore().connect(sessionRepository)
    }),
    );
      app.use(passport.initialize());
      app.use(passport.session());
  await app.listen(3000);
}

bootstrap();
