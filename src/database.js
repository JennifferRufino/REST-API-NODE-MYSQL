const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'blbvabgv',
    database: 'company'
});

mysqlConnection.connect((err) => {
    if(!err) {
        console.log("DB is connected")
    }else {
        console.log("Connected failed" + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mysqlConnection;