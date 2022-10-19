CREATE TABLE roles (
  id int NOT NULL auto_increment,
  name varchar(45) DEFAULT NULL,
  description varchar(100) DEFAULT NULL,
  createdAt datetime DEFAULT NULL,
  updatedAt datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;