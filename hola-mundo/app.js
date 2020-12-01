var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hola Mundo - Versión 2 \n');
});

app.listen(8080, function () {
  console.log('app listening on port 8080!!');
});

