const CheckHealthController = require('../Controllers/CheckHealthController');
const UserController = require('../Controllers/UserController');

const routes = app => {
  app.route('/checkhealth')
    .get(CheckHealthController.healthTest);
  
  app.route('/user')
    .post(UserController.createUser) //Create a height object
    .get(UserController.getAllUsers)
  
  app.route('/user/:userId')
    .get(UserController.getUserById)
    .delete(UserController.deleteUser)
    .put(UserController.updateUser)
}

module.exports = {
  routes
};