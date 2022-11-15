DROP DATABASE IF EXISTS congestion_db;
CREATE DATABASE congestion_db default CHARACTER SET UTF8;
USE congestion_db;
DROP TABLE IF EXISTS place_info;
CREATE TABLE place_info(
    PlaceID INT(11) Auto_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Latitude DOUBLE(28, 25),
    Longitude DOUBLE(28, 25),
    CrowdThreshold INT(11),
    Employees INT(11),
    NumberOfHuman INT(11)
);
