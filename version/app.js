var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Esta es la App V1!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

