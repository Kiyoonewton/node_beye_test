import sqlite3 from "sqlite3"

sqlite3.verbose()
const dbName ='mydb.db'

let db = new sqlite3.Database(dbName, err=>{
    if(err){
        console.log(err.message);
    }else{
        console.log('DB connected!!!');
        db.run('CREATE TABLE IF NOT EXISTS items (id INTERGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT'), (err)=>{
            if(err){
                console.log(err.message);
            }else{
                console.log('table created')
            }
        }
    }
})

export default db;