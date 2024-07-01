// module.exports = (sequelize, DataTypes) => {
//   const Users = sequelize.define("Users", {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
//   return Users;
// };

class User {
  constructor(db) {
    this.db = db;
  }

  getAllItems() {
    const sql = `SELECT * FROM items`;
    return new Promise((resolve, reject) => {
      this.db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

module.exports= User;
