const mysql = require('mysql2')
// Here are Creating a Pool of Connection , because each query needs its each individual connection
const pool = mysql.createPool(
    {
        host:"localhost",
        user:"root",
        database:"nodeComplete",
        password:"Inhell@143"
    }
)
module.exports = pool.promise();