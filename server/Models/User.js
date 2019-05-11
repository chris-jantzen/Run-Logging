const uuid = require('uuid/v1');

const UserModel = body => {
  const {
    firstName,
    middleInitial,
    lastName,
    email,
    age,
    gender,
    weight,
    height
  } = body;
  return {
    UserID: uuid(),
    firstName,
    middleInitial,
    lastName,
    email,
    age,
    gender,
    weight,
    height
  };
};

const VerifyUserModel = (userId, body) => {
  const {
    firstName,
    middleInitial,
    lastName,
    email,
    age,
    gender,
    weight,
    height
  } = body;
  return {
    UserID: userId.substring(1, userId.length - 1),
    firstName,
    middleInitial,
    lastName,
    email,
    age,
    gender,
    weight,
    height
  };
};

module.exports = {
  UserModel,
  VerifyUserModel
};
