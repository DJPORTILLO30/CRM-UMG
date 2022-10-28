DROP TABLE IF EXISTS communicationType;
CREATE TABLE communicationType(
id int(20) NOT NULL AUTO_INCREMENT,
contactName varchar(50) DEFAULT NULL,
description varchar(50) DEFAULT NULL,
comunicationDate DATETIME DEFAULT NULL,
createdAt datetime default null,
updatedAt datetime default null,
PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;