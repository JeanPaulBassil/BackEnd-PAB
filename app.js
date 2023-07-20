let express = require('express');
let path = require('path');
let logger = require('morgan');
require('./utils/database')
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let config = require('./config/index')
let sequelize = config.development.mySql.client


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Handle 404 
app.use(function(req, res, next) {
  res.status(404).json({ error: 'Not Found' });
});

// Error handler
app.use(function(err, req, res, next) {
  console.error(err.stack); 
  res.status(500).json({ error: 'An error occurred, please try again later.' });
});


const sync = async () =>{
  try {
    console.log('Trying to connect to the database...')
    await sequelize.sync()
    console.log('Connection has been established successfully.');
  } catch (err){
    console.error('Unable to connect to the database:', err);
  }
}

sync()

console.log("end of app.js")

module.exports = app;
