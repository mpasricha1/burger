const express = require("express"); 
const burgers = require("../models/burger.js"); 

const router = express.Router(); 

router.get("/", (req, res) =>{
	res.render("index") 
});

module.exports = router; 