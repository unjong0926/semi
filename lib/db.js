var mysql = require('mysql2');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'user',
});
db.connect();

module.exports = db;
