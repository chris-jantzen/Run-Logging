const createUser = (newUser, db, getResult) => {
  const sql = 'INSERT INTO User SET ?';
  db.query(sql, newUser, (err, result) => getResult(err, result));
};

const getAllUsers = (db, getResult) => {
  const sql = 'SELECT * FROM User';
  db.query(sql, (err, result) => getResult(err, result));
};

const getUserById = (userId, db, getResult) => {
  const sql = `SELECT * FROM User WHERE UserID=${userId}`;
  db.query(sql, (err, result) => getResult(err, result));
};

const updateUser = (userId, userData, db, getResult) => {
  const updateString = buildUpdateString(userData);
  const sql = `UPDATE User SET ${updateString} WHERE UserID='${userId}'`;
  db.query(sql, (err, result) => getResult(err, result));
};

const deleteUser = (userId, db, getResult) => {
  const sql = `DELETE FROM User WHERE UserID=${userId}`;
  db.query(sql, (err, result) => getResult(err, result));
};

// Helper Functions
const buildUpdateString = userData => {
  let updateString = `UserID='${userData.UserID}', `;
  updateString += `firstName='${userData.firstName}', `;
  updateString += `middleInitial='${userData.middleInitial}', `;
  updateString += `lastName='${userData.lastName}', `;
  updateString += `email='${userData.email}', age=${userData.age}, `;
  updateString += `gender='${userData.gender}', `;
  updateString += `weight=${userData.weight}, height='${userData.height}'`;
  return updateString;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
