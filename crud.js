const db = require("./database");

const createItem = (username, password, callback) => {
  const sql = `INSERT INTO items (username, password) VALUE (?, ?)`;
  db.run(sql, [username, password], function (err) {
    callback(err, { id: this.lastID });
  });
};

const readItems = (callback) => {
  const sql = `SELECT * FROM items`;
  db.all(sql, [], callback);
};

const updateItem = (id, username, password) => {
  const sql = `UPDATE items SET name = ?, description = ? WHERE id = ?`;
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
