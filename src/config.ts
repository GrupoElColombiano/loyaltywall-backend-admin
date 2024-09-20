import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgres: {
      dbName: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
    },
    mailer: {
      host: process.env.GMAIL_HOST,
      port: parseInt(process.env.GMAIL_PORT),
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
      secure: process.env.GMAIL_SECURE,
    },
    // mongo: {
    //   dbName: process.env.MONGO_DB,
    //   user: process.env.MONGO_USER,
    //   password: process.env.MONGO_PASSWORD,
    //   host: process.env.MONGO_HOST,
    //   port: parseInt(process.env.MONGO_PORT),
    // },
  };
});
