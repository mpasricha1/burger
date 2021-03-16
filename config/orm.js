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
	updateOne: (table, colsObj, valueObj, cb) => {
		let query = "UPDATE ?? SET ? WHERE ?"
		connection.query(query,[table, colsObj, valueObj], (err, result) =>{
			if(err){
				throw err; 
			}
			cb(result);
		});
	}
}

module.exports = orm; 