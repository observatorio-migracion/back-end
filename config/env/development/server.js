module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  url: 'http://localhost/api',
  admin: {
    url: 'http://localhost/panel-de-administrador',
  },
});
