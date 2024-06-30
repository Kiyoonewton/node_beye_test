const sqlite3= require("sqlite3")

sqlite3.verbose()
const dbName ='blog.db'

let db = new sqlite3.Database(dbName, err=>{
    if(err){
        console.log(err.message);
    }else{
        console.log('DB connected!!!');
        db.run('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, uuid TEXT)'), (err)=>{
            if(err){
                console.log(err.message);
            }else{
                console.log('table created')
            }
        }
    }
})

module.exports = db;