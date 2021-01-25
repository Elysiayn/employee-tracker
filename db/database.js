const mysql = require('mysql2');

// connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'coding',
    database: 'business_db'
});

connection.connect(err => {
    if (err) throw err;
});




// module.exports = db;