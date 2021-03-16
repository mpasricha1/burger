const orm = require("../config/orm.js"); 

const burger = {
	all: (cb) => {
		orm.selectAll("burger_name", "burgers", (res) =>{
			cb(res);
		});
	}, 
	insert: (cols, vals, cb) => {
		orm.insertOne("burgers", cols, vals, (res) =>{
			cb(res);
		});
	},
	update: (colsObj, valueObj, cb) => {
		orm.updateOne("burgers", colsObj, valueObj, (res) =>{
			cb(res); 
		});
	}
}

module.exports = burger;