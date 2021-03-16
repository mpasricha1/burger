const connection = require("./connection.js"); 

const orm = { 
	selectAll: (cols, table,cb) => {
		let query = "SELECT ?? FROM ??"
		connection.query(query,[cols, table], (err, result) =>{
			if (err){
				throw err;
			}
			cb(result);
		})
	},
	insertOne: (cb) => {
		let query = "INSERT INTO ?? ?? VALUES (?)"
	},
	updateOne: (cb) => {
		let query = "UPDATE ?? SET ?? = ? WHERE id = ?"
	}
}

module.exports = orm; 