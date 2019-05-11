const checkHealthController = require('../Controllers/CheckHealthController');
const userController = require('../Controllers/UserController');

const routes = (app, db) => {
  app.route('/checkhealth').get(checkHealthController.healthTest);

  app
    .route('/user')
    .get((req, res) => {
      userController.getAllUsers(req, res, db);
    })
    .post((req, res) => {
      userController.createUser(req, res, db);
    });

  app
    .route('/user/:id')
    .get((req, res) => {
      userController.getUserById(req, res, db);
    })
    .put((req, res) => {
      userController.updateUser(req, res, db);
    })
    .delete((req, res) => {
      userController.deleteUser(req, res, db);
    });
};

module.exports = {
  routes
};
