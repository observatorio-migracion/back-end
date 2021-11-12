module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  url: 'http://127.0.0.1:1337/',
  admin: {
    url: 'http://127.0.0.1:1337/panel-de-administrador',
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0d2ef5a69cb65f637f5b9c58f945034c'),
    },
  },
});
