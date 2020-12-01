var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Troubleshoot app\n');
});

app.listen(8080, function () {
  console.log('app listening on port 8080!!');
});

