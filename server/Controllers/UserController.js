const userRepository = require('../Repositories/UserRepository');
const userModel = require('../Models/User');

// Create User
const createUser = (req, res, db) => {
  const user = userModel.UserModel(req.body);
  userRepository.createUser(user, db, (err, result) => {
    if (err) throw err;
    res.status(201).send('User Added');
  });
};

// Get Users *** Look into adding security to routes like this one ***
const getAllUsers = (req, res, db) => {
  userRepository.getAllUsers(db, (err, result) => {
    if (err) throw err;
    let users = [];
    for (let user of result) {
      users.push(user);
    }
    res.status(200).json(users);
  });
};

// Get User by ID
const getUserById = (req, res, db) => {
  userRepository.getUserById(req.params.id, db, (err, result) => {
    if (err) throw err;
    const user = result[0];
    res.status(200).json(user);
  });
};

// Update User
const updateUser = (req, res, db) => {
  const userId = req.params.id;
  const user = userModel.VerifyUserModel(userId, req.body);
  userRepository.updateUser(userId, user, db, (err, result) => {
    if (err) throw err;
    res
      .status(200)
      .send(
        `User with ID: ${userId} and Name: ${user.firstName} ${
          user.lastName
        } has been updated`
      );
  });
};

// Delete User
const deleteUser = (req, res, db) => {
  userRepository.deleteUser(req.params.id, db, (err, result) => {
    if (err) throw err;
    res.status(200).send('User Deleted');
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser
};
