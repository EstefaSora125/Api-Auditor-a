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
  `id_author` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT '0',
  `phone_number` int(13) DEFAULT 0,
  PRIMARY KEY (`id_author`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla library.authors: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` (`id_author`, `name`, `email`, `phone_number`) VALUES
	(1, 'maria', 'joseMaria@gmail.com', 54321),
	(2, 'jose', 'js@gmail.com', 12345),
	(3, 'jose', 'jose@gamil.com', 12345),
	(4, 'estefania', 'Estefa@gmail.com', 564732);
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;

-- Volcando estructura para tabla library.books
CREATE TABLE IF NOT EXISTS `books` (
  `id_book` int(11) NOT NULL AUTO_INCREMENT,
  `isbn` bigint(14) NOT NULL DEFAULT 0,
  `name` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `year` year(4) NOT NULL,
  `editorial` varchar(30) NOT NULL DEFAULT '',
  `id_author` int(11) NOT NULL DEFAULT 0,
  `edition` varchar(20) NOT NULL DEFAULT '0',
  `page_number` int(4) NOT NULL DEFAULT 0,
  `colombian_pesos` int(5) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_book`) USING BTREE,
  KEY `FK_books_authors` (`id_author`),
  CONSTRAINT `FK_books_authors` FOREIGN KEY (`id_author`) REFERENCES `authors` (`id_author`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla library.books: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
/*!40000 ALTER TABLE `books` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
