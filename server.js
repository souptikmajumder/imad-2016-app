var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

// app.get('/ui/page1.html', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'page1.html'));
// });


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/pic6.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pic6.jpg'));
});



app.get('/ui/pic3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pic3.jpg'));
});
app.get('/ui/pic2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pic2.jpg'));
});
app.get('/ui/pic5.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pic5.jpg'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
