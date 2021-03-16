const express = require("express"); 
const burgers = require("../models/burger.js"); 

const router = express.Router(); 

router.get("/", (req, res) =>{
	let data = burgers.all( (data) =>{
		console.log(data)
	})
	res.render("index") 
});

module.exports = router; 