const express = require("express"); 
const burgers = require("../models/burger.js"); 

const router = express.Router(); 

router.get("/", (req, res) =>{
	let data = burgers.all( (data) =>{
		console.log(data)
	})
	res.render("index") 
});
router.get("/api/burgers", (req, res) =>{
	let data = burgers.insert("burger_name", "Mushroom Burger", (result) =>{
		res.json({id: result.insertId}); 
	});
});
router.get("/api/burgers/:id", (req,res) =>{
	let data = burgers.update({devoured : true}, {id: req.params.id}, (result) =>{
		if(result.changedRows === 0){
			return res.status(404).end(); 
		}else{ 
			res.status(200).end(); 
		}
	});
});

module.exports = router; 