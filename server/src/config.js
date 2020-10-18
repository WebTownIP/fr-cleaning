module.exports = {
  port: 3003,
  version: 'v1',
  env: 'development',
  logging: {},

  mailer: {
    port: '465',
    host: 'smtp.yandex.ru',
    secure: true,
    auth: {
      user: '',
      pass: '',
    },
  },

  auth: {
    secret: 'secret',
    saltRounds: 15,
  },

  db: {
    url: 'localhost:3306',
    dialect: 'mysql',
    username: 'root',
    password: 'root',
    database: 'cleaning',
    define: {
      charset: 'utf8mb4',
    },
  },
};
