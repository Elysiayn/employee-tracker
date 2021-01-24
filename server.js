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
    console.log('Connection Suceessful')
    afterConnection();
});

//asks for which table to select from
afterConnection = () => {
    connection.query('SELECT * FROM ? WHERE ?', function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
};