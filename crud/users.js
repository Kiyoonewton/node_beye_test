const db = require("../database");

const createUsers = (username, password, uuid, callback) => {
  const sql = `INSERT INTO items (username, password, uuid) VALUES (?,?,?)`;
  db.run(sql, [username, password, uuid], function (err) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, { id: this.lastID, uuid, username });
    }
  });
};

const readUsers = async() => {
  const sql = `SELECT * FROM items`;
  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const updateUsers = (id, username, password, uuid) => {
  const sql = `UPDATE items SET username = ?, password = ? WHERE id = ?`;
  db.run(sql, [username, password, id, uuid], callback);
};

const deleteUsers = (id, callback) => {
  const sql = `DELETE FROM items WHERE id = ?`;
  db.run(sql, id, callback);
};

module.exports = {
  createUsers,
  readUsers,
  updateUsers,
  deleteUsers,
};
