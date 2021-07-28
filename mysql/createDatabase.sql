USE nodedb;

CREATE TABLE people (
    id INT NOT NULL auto_increment,
    PRIMARY KEY(id),
    name VARCHAR(255)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;