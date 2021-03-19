const express = require("express");
const exphbs = require("express-handlebars")
const routes = require("./controllers/burgers_controller.js")

const PORT = process.env.port || 5000; 

const app = express(); 

app.use(express.static("public")); 

app.use(express.urlencoded({ extended: true})); 
app.use(express.json()); 

app.engine("handlebars", exphbs({ defaultlayout: "main" })); 
app.set("view engine", "handlebars"); 

app.use(routes);



app.listen(process.env.PORT || 5000, () => {
	console.log("Server listening on: http://localhost:" + PORT);
})
