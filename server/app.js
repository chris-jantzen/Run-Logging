const express = require('express');
const mysql = require('mysql');
const routes = require('./routes/routes').routes;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'run-logging',
  port: 3306
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('You are now connected...');
});

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

routes(app, connection);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + 'public/index.html'));
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = {
  app
};
