const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database')
const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));

const port = process.env.PORT || 3001;

app.use('/api/users', require('./routes/api/users'));
app.use('/api/items', require('./routes/api/items'));

// const ensureLoggedIn = require('./config/ensureLoggedIn') <--- this is the middleware function 
// that we will use to protect our routes. Update for the my profile page when ready
// app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));



// add api routes before this catch-all
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, function() {
  console.log(`Express app running on port ${port}🌟🐎🌟`)
});