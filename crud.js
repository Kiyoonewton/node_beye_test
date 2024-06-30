const db = require("./database");

const createItem = (username, password, callback) => {
  const sql = `INSERT INTO items (username, password) VALUES (?,?)`;
  db.run(sql, [username, password], function (err) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, { id: this.lastID });
    }
  });
};

const readItems = (callback) => {
  const sql = `SELECT * FROM items`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      callback(err, null); // Pass the error to the callback
    } else {
      callback(null, rows); // Pass the rows to the callback
    }
  });
};

const updateItem = (id, username, password) => {
  const sql = `UPDATE items SET username = ?, password = ? WHERE id = ?`;
  db.run(sql, [username, password, id], callback);
};

const deleteItem = (id, callback) => {
  const sql = `DELETE FROM items WHERE id = ?`;
  db.run(sql, id, callback);
};

module.exports = {
  createItem,
  readItems,
  updateItem,
  deleteItem,
};
