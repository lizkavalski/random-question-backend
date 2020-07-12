require('dotenv').config();
const app = require('./server/server.js');
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`The port is listening ${port}`);
});