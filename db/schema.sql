CREATE DATABASE burger_db;

USE DATABASE burger_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM burgers;

