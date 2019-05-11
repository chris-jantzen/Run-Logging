const createUser = (newUser, db, getResult) => {
  const sql = 'INSERT INTO User SET ?';
  db.query(sql, newUser, (err, result) => getResult(err, result));
};

const getAllUsers = (db, getResult) => {
  let sql = 'SELECT * FROM User';
  db.query(sql, (err, result) => getResult(err, result));
};

const getUserById = (userId, db, getResult) => {
  let sql = `SELECT * FROM User WHERE UserID=${userId}`;
  db.query(sql, (err, result) => getResult(err, result));
};

const updateUser = (userId, userData, db, getResult) => {
  // let updateString = `UserID='${userData.UserID}', firstName='${
  //   userData.firstName
  // }', middleInitial='${userData.middleInitial}', lastName='${
  //   userData.lastName
  // }', email='${userData.email}', age=${userData.age}, gender='${
  //   userData.gender
  // }', weight=${userData.weight}, height='${userData.height}'`;
  // let sql = `UPDATE User SET ${updateString} WHERE UserID='${userId}'`;
  let sql = `UPDATE User SET UserID='${userData.UserID}', firstName='${
    userData.firstName
  }', middleInitial='${userData.middleInitial}', lastName='${
    userData.lastName
  }', email='${userData.email}', age=${userData.age}, gender='${
    userData.gender
  }', weight=${userData.weight}, height='${
    userData.height
  }' WHERE UserID=${userId}`;
  db.query(sql, (err, result) => getResult(err, result));
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser
};
