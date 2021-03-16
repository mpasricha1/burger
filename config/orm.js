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
	insertOne: (table, cols, vals, cb) => {
		let query = "INSERT INTO ?? (??) VALUES (?)"; 
		connection.query(query, [table, cols, vals], (err, result) => {
			if(err){
				throw err;
			}
			cb(result)
		})
	},
	updateOne: (cb) => {
		let query = "UPDATE ?? SET ?? = ? WHERE id = ?"
	}
}

module.exports = orm; 