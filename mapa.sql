-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2013 at 08:16 PM
-- Server version: 5.5.32
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mapa`
--
CREATE DATABASE IF NOT EXISTS `mapa` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `mapa`;

-- --------------------------------------------------------

--
-- Table structure for table `favoritos`
--

CREATE TABLE IF NOT EXISTS `favoritos` (
  `id_favorito` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id_favorito`),
  UNIQUE KEY `id_favorito` (`id_favorito`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=58 ;

--
-- Dumping data for table `favoritos`
--

INSERT INTO `favoritos` (`id_favorito`, `id_usuario`, `nombre`) VALUES
(17, 19, 'Cyber Fly'),
(18, 19, 'Cyber Bites'),
(19, 19, 'La Red Internet'),
(20, 19, 'FotografÃ­a Lamart'),
(21, 19, 'Tecnofoto Video'),
(22, 19, 'Coppel'),
(23, 19, 'La Paloma'),
(24, 19, 'Abarrotera Casa HernÃ¡ndez'),
(25, 18, 'Comercializadora Ave'),
(26, 18, 'La Paloma'),
(27, 18, 'Abarrotera Casa HernÃ¡ndez'),
(28, 18, 'Pasteleria las Diaz Barriga'),
(29, 18, 'PastelerÃ­a del Bajio'),
(30, 18, 'Panificadora Cuellar'),
(31, 18, 'Coppel'),
(32, 18, 'Tecnofoto Video'),
(33, 18, 'Foto FrÃ­as Video'),
(34, 18, 'FotografÃ­a Lamart'),
(35, 18, 'Foto Roxy'),
(36, 18, 'Xtreme Moda Urbana'),
(37, 18, 'Palermo Calzado Zapatos'),
(38, 18, 'Pasteleria las Diaz Barriga'),
(39, 20, 'B A Buenos Aires'),
(40, 20, 'Club de Golf'),
(41, 20, 'Restaurante el Correo'),
(42, 20, 'Dolci Peccati'),
(43, 20, 'Las Gorditas del Andador'),
(44, 20, 'Pollo Feliz'),
(45, 20, 'Pasteleria las Diaz Barriga'),
(46, 18, 'Le Shop'),
(47, 20, 'B A Buenos Aires'),
(48, 21, 'PastelerÃ­a TP'),
(49, 21, 'ReposterÃ­a Gourmet Chary'),
(50, 21, 'La Coneja'),
(51, 21, 'PatelerÃ­a Marifer'),
(52, 21, 'PanaderÃ­a El Buen Gusto'),
(53, 21, 'PastelerÃ­a Madeleine'),
(54, 19, 'La Red Internet'),
(55, 20, 'Area de Subasta'),
(56, 20, 'Abarrotes el Faro'),
(57, 20, 'Abarrotes el Faro');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `id_usuario` (`id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre`) VALUES
(18, 'Cesar'),
(19, 'Krauser'),
(20, 'Omi'),
(21, 'Elias');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
