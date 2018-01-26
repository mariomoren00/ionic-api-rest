# ************************************************************
# Sequel Pro SQL dump
# Versión 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.18)
# Base de datos: blog
# Tiempo de Generación: 2018-01-26 03:38:50 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8_spanish_ci,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`, `deleted`)
VALUES
	(1,'Bot facebook messenger','2017-06-26 22:38:21','2017-06-26 22:38:21',0),
	(2,'Nodejs',NULL,NULL,0),
	(3,'Ruby on rails ',NULL,NULL,0),
	(4,'Vaqueros','2017-07-02 23:34:22','2018-01-20 12:27:14',0),
	(5,NULL,'2018-01-20 11:12:49','2018-01-20 11:53:57',1),
	(6,NULL,'2018-01-20 11:14:05','2018-01-20 11:55:30',1),
	(7,'Comic','2018-01-20 11:14:27','2018-01-20 11:14:27',0),
	(8,'Ciencia','2018-01-20 11:17:00','2018-01-20 11:17:00',0),
	(9,'Manga','2018-01-20 11:19:22','2018-01-20 11:19:22',0),
	(10,'Romantica','2018-01-20 11:20:54','2018-01-20 11:56:22',1),
	(11,'Aventuras','2018-01-20 11:22:15','2018-01-20 11:22:15',0),
	(12,'Programación','2018-01-20 11:24:27','2018-01-20 11:24:27',0),
	(13,'Espacial','2018-01-20 11:26:27','2018-01-20 12:20:42',0),
	(14,'Ingeniería ','2018-01-20 11:32:51','2018-01-20 11:32:51',0),
	(15,'Enfermería','2018-01-20 11:33:53','2018-01-20 12:29:19',0),
	(16,'Infantil','2018-01-20 12:23:35','2018-01-20 12:24:01',0);

/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
