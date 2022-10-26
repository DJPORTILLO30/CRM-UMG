DROP TABLE IF EXISTS `products`;
CREATE TABLE `productos` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `Category` varchar(150) DEFAULT NULL,
  `Price` int(20) NOT NULL,
  `Feature` varchar(150) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;