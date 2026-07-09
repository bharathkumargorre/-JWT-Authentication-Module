const db = require("../config/db");

// Find user by email
const findUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], callback);
};

// Create user
const createUser = (user, callback) => {
  const sql = `
    INSERT INTO users (name, email, password, mobile, role)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [user.name, user.email, user.password, user.mobile, user.role],
    callback
  );
};

// Update user profile
const updateUser = (id, name, mobile, callback) => {
  const sql = `
    UPDATE users
    SET name = ?, mobile = ?
    WHERE id = ?
  `;

  db.query(sql, [name, mobile, id], callback);
};

// Find user by ID
const findUserById = (id, callback) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [id], callback);
};

// Update password
const updatePassword = (id, password, callback) => {
  const sql = "UPDATE users SET password = ? WHERE id = ?";
  db.query(sql, [password, id], callback);
};

// Delete user
const deleteUser = (id, callback) => {
  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, [id], callback);
};


module.exports = {
  findUserByEmail,
  createUser,
  updateUser,
  findUserById,
  updatePassword,
   deleteUser,
};