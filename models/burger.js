const orm = require("../config/orm.js"); 

const burger = {
	all: (cb) => {
		orm.selectAll("", (res) =>{
			cb(res);
		});
	}, 
	insert: (cb) => {
		orm.insertOne("", (res) =>{
			cb(res);
		});
	},
	update: (cb) => {
		orm.updateOne("", (res) =>{
			cb(res); 
		});
	}
}

module.exports = burger;