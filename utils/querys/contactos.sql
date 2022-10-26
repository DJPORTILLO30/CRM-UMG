CREATE TABLE `contactos` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`ownerContact` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`email` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`phone` INT(12) NOT NULL,
	`address` VARCHAR(50) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`description` VARCHAR(50) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`department` VARCHAR(50) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`createdAt` TIMESTAMP NOT NULL,
	`updatedAt` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;