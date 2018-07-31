const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to Mongoose
mongoose.connect('mongodb://ThuyNguyen04:thuy041212@ds157901.mlab.com:57901/thuynguyen04', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("h");
});

app.get('/', (req, res) => {
	res.send('Hello');
});

app.listen(3000);
console.log('Running on port 3000...');