const mysql = require("mysql"); 
require("dotenv").config(); 

const connection = mysql.createConnection({
	host: process.env.DB_HOST, 
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS, 
	database: process.env.DB
}); 

connection.connect( (err) => {
	if(err) { 
		console.error(`error connecting: ${err.stack}`); 
		return;
	}
	console.log("connected as id " + connection.threadId);
}); 

module.exports = connection;