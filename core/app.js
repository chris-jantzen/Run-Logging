const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes').routes;
const keys = require('./config/keys');

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect(
  `mongodb://${keys.username}:${keys.password}@ds159926.mlab.com:59926/vue-run-logging`,
  { useNewUrlParser: true, useFindAndModify: false}
)

routes(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + 'public/index.html'));
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = {
  app
};