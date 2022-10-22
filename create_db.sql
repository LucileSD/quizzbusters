-- create database and table for user info
CREATE DATABASE IF NOT EXISTS quizz;
USE quizz;
CREATE TABLE IF NOT EXISTS users (
	name VARCHAR(150) NOT NULL,
	email VARCHAR(150) NOT NULL,
	password VARCHAR(150) NOT NULL,
	points INT(150)
);
