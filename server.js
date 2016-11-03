var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/style1.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style1.css'));
});
app.get('/ui/me1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me1.jpg'));
});
app.get('/ui/home.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'home.gif'));
});



app.get('/ui/tweet.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tweeet.jpg'));
});
app.get('/ui/insta.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'insta.png'));
});
app.get('/ui/insta1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'insta1.png'));
});
app.get('/ui/linkedin.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'linkedin.jpg'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
