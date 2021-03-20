DROP DATABASE IF EXIST burgers_db; 

CREATE DATABASE burgers_db; 

USE DATABASE burgers_db; 

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(25), 
	devoured BOOLEAN DEFAULT false,  
	PRIMARY KEY(id)
);