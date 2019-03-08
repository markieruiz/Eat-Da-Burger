var mysql = require('mysql');
var connection;

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: 'd13xat1hwxt21t45.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//         user: 'zoukrvat5j9c2orc',
//         password: 'btcfk9hzerxq4zpv',
//         database: 'gzh2tkrzp3dk0ua9',
//         port: '3306'
//     });
// };


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'burgers_db'
    });
};

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;