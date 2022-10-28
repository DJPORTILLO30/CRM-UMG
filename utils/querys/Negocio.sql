DROP TABLE IF EXISTS Busis;
CREATE TABLE Busis(
id int(20) NOT NULL AUTO_INCREMENT,
name varchar(50) DEFAULT NULL,
contactName varchar(50) DEFAULT NULL,
amount float DEFAULT NULL,
income float DEFAULT NULL,
closingDate datetime NULL,  
campaingSource varchar(50) DEFAULT NULL,
description varchar(50) DEFAULT NULL,
createdAt datetime default null,
updatedAt datetime default null,
PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;