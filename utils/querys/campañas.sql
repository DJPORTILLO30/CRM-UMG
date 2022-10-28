CREATE TABLE `campañas` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`propietarioCampania` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`nombreCampania` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`idTipoCampania` INT(11) NULL DEFAULT NULL,
	`fechaInicio` DATE NOT NULL,
	`fechaFin` DATE NOT NULL,
	`estado` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`descripcion` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`createdAt` TIMESTAMP NOT NULL,
	`updatedAt` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;