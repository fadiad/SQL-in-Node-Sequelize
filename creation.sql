USE sql_intro;

-- DROP TABLE town;

-- SET FOREIGN_KEY_CHECKS=OFF; 
-- DROP TABLE trainer;
-- SET FOREIGN_KEY_CHECKS=ON; // enabling foreign key

-- CREATE TABLE town(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20)
-- );

-- CREATE TABLE trainer(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20),
--     town_id INT(20),

--    FOREIGN KEY (town_id) REFERENCES town(id)
-- );



-- CREATE TABLE pokemon_type(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     type VARCHAR(20)
-- );

-- CREATE TABLE pokemon(
--     id INT NOT NULL PRIMARY KEY,
--     name VARCHAR(20),
--     type_id INT ,
--     height INT ,
--     weight INT , 
    
--     FOREIGN KEY (type_id) REFERENCES pokemon_type(id)
-- );

-- CREATE TABLE  pokemon_trainer (
--     pokemon_id INT,
--     trainer_id INT,

--     FOREIGN KEY(pokemon_id) REFERENCES pokemon(id),
--     FOREIGN KEY(trainer_id) REFERENCES trainer(id)
-- )



