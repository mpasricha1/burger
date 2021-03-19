const express = require("express"); 
const burgers = require("../models/burger.js"); 

const router = express.Router(); 

router.get("/", (req, res) =>{
	burgers.all( (data) =>{
		let burgerData = {
			burgers: data
		};
		res.render("index", burgerData); 
	})
	
});
router.post("/api/burgers", (req, res) =>{
	let data = burgers.insert("burger_name", req.body.name, (result) =>{
		res.json({id: result.insertId}); 
	});
});
router.put("/api/burgers/:id", (req,res) =>{
	let data = burgers.update({devoured : true}, {id: req.params.id}, (result) =>{
		if(result.changedRows === 0){
			return res.status(404).end(); 
		}else{ 
			res.status(200).end(); 
		}
	});
});

module.exports = router; 