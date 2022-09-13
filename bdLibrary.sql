-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.9.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para library
CREATE DATABASE IF NOT EXISTS `library` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `library`;

-- Volcando estructura para tabla library.authors
CREATE TABLE IF NOT EXISTS `authors` (
  `id_author` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT '0',
  `phone_number` int(10) DEFAULT NULL,
  `state` char(2) NOT NULL DEFAULT 'AC',
  PRIMARY KEY (`id_author`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla library.authors: ~11 rows (aproximadamente)
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` (`id_author`, `name`, `email`, `phone_number`, `state`) VALUES
	(1, 'maria', 'joseMaria@gmail.com', 54321, 'AC'),
	(2, 'jose', 'js@gmail.com', 12345, 'AC'),
	(3, 'jose', 'jose@gamil.com', 12345, 'AC'),
	(4, 'estefania', 'Estefa@gmail.com', 564732, 'DL'),
	(5, 'Fabian', 'Fabian@gmail.com', 9346292, 'DL'),
	(6, 'esteban', 'esteban@gmail.com', 9346292, 'AC'),
	(11, 'juan', 'juan@gmail.com', 9346292, 'AC'),
	(12, 'camila', 'camila@gmail.com', 9346292, 'AC'),
	(13, 'jose', 'jose@gmail.com', 9346292, 'AC'),
	(14, 'raul', 'raul@gmail.com', 9346292, 'AC'),
	(15, 'carmen', 'carmen@gmail.com', 5555555, 'AC'),
	(16, 'Fabian', 'Fabian@gmail.com', 9346292, 'AC');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;

-- Volcando estructura para tabla library.books
CREATE TABLE IF NOT EXISTS `books` (
  `id_book` int(11) NOT NULL AUTO_INCREMENT,
  `isbn` varchar(14) NOT NULL DEFAULT '0',
  `name` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `year` year(4) NOT NULL,
  `editorial` varchar(30) NOT NULL DEFAULT '',
  `state` char(2) DEFAULT 'AC',
  `id_author` int(11) NOT NULL DEFAULT 0,
  `edition` varchar(20) NOT NULL DEFAULT '0',
  `page_number` int(4) NOT NULL DEFAULT 0,
  `colombian_pesos` int(5) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_book`) USING BTREE,
  KEY `FK_books_authors` (`id_author`),
  CONSTRAINT `FK_books_authors` FOREIGN KEY (`id_author`) REFERENCES `authors` (`id_author`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla library.books: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` (`id_book`, `isbn`, `name`, `description`, `year`, `editorial`, `state`, `id_author`, `edition`, `page_number`, `colombian_pesos`) VALUES
	(1, '290102895154', 'Zontrax', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '1993', 'Mohr, Orn and Lang', 'AC', 3, '2.5', 240, 25000),
	(2, '591533325281', 'Span', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '1993', 'Kub and Sons', 'AC', 4, '2.2', 448, 40620),
	(3, '350994172075', 'Toughjoyfax', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '1992', 'Huels, Hayes and Reichert', 'AC', 2, '1.5', 464, 136006),
	(4, '317209409466', 'Daltfresh', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '2002', 'Swift, Cronin and Bernhard', 'AC', 1, '1.2', 751, 39981),
	(5, '413414152510', 'Kanlam', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '1999', 'Bogisich Group', 'AC', 4, '1.9', 484, 110162),
	(6, '381771816874', 'Hatity', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '2012', 'Heidenreich-Volkman', 'AC', 1, '2.3', 472, 109068),
	(7, '147948077102', 'Solarbreeze', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '1988', 'Runolfsdottir-Cole', 'DL', 4, '2.4', 756, 117506),
	(29, '290102895154', 'Un lugar en el mar', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '2022', 'Mohr, Orn and Lang', 'AC', 3, '2.5', 240, 25000);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
