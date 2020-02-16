
const express = require('express');
const notfound = require('../server/middleware/404.js');
const errorHandler = require('../server/middleware/error.js');

const app = express();

app.use(express.static('/data.JSON'));

app.use('*',notfound);
app.use(errorHandler);

module.exports = {
  server:app,
  start: port =>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  },
};
