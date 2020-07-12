const app = require('./server/server.js');

app.listen(3000 || process.env.PORT, () => {
  console.log('The port is listening');
});