import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
    }),
    );
      app.use(passport.initialize());
      app.use(passport.session());
  await app.listen(3000);
}

bootstrap();
