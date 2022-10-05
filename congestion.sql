DROP DATABASE IF EXISTS congestion_db;
CREATE DATABASE congestion_db default CHARACTER SET UTF8;
USE congestion_db;
DROP TABLE IF EXISTS place_info;
CREATE TABLE place_info(
    PlaceID INT(11) Auto_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Object VARCHAR(15),
    Latitude DOUBLE(28, 25),
    Longitude DOUBLE(28, 25)
);

DROP TABLE IF EXISTS congestion_data;
CREATE TABLE congestion_data(
    PlaceID INT(11),
    CongestionID INT(11) AUTO_INCREMENT PRIMARY KEY,
    NumberOfObject INT(11),
    FOREIGN KEY(PlaceID) REFERENCES place_info(PlaceID)
);
