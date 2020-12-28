-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 28, 2020 at 06:21 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flight_search`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `cityId` int(11) NOT NULL,
  `cityCode` varchar(255) NOT NULL,
  `cityName` varchar(255) NOT NULL,
  `background` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`cityId`, `cityCode`, `cityName`, `background`) VALUES
(1, 'LON', ' london', 'https://images.pexels.com/photos/1837591/pexels-photo-1837591.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'),
(2, 'MAN', 'manchester', 'https://images.pexels.com/photos/5212818/pexels-photo-5212818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(3, 'GLA', 'glasgow', 'https://images.pexels.com/photos/3035106/pexels-photo-3035106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(4, 'PAR', 'paris', 'https://images.pexels.com/photos/705764/pexels-photo-705764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(5, 'LYO', 'lyon', 'https://images.pexels.com/photos/5868282/pexels-photo-5868282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(6, 'MAR', 'marseille', 'https://images.pexels.com/photos/3651813/pexels-photo-3651813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(7, 'MAD', 'madrid', 'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(8, 'BCN', 'barcelona', 'https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(9, 'BIL', 'bilbao', 'https://bit.ly/38UHvGX'),
(10, 'LIS', 'lisabon', 'https://images.pexels.com/photos/3412019/pexels-photo-3412019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(11, 'BRU', 'brussels', 'https://images.pexels.com/photos/1595086/pexels-photo-1595086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(12, 'AMS', 'amsterdam', 'https://images.pexels.com/photos/2901481/pexels-photo-2901481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(13, 'STK', 'stockholm', 'https://images.pexels.com/photos/2377432/pexels-photo-2377432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(14, 'BER', 'berlin', 'https://images.pexels.com/photos/11742/pexels-photo-11742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(15, 'HAM', 'hamburg', 'https://images.pexels.com/photos/5477386/pexels-photo-5477386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(16, 'CGN', 'cologne', 'https://images.pexels.com/photos/1744609/pexels-photo-1744609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(17, 'MUN', 'munich', 'https://images.pexels.com/photos/3523938/pexels-photo-3523938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(18, 'WAR', 'warsaw', 'https://images.pexels.com/photos/2613438/pexels-photo-2613438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(19, 'PRG', 'prague', 'https://images.pexels.com/photos/820735/pexels-photo-820735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(20, 'VIE', 'vienna', 'https://images.pexels.com/photos/2422253/pexels-photo-2422253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
(21, 'ANK', 'ankara', 'https://bit.ly/3hpuBEy'),
(22, 'IST', 'istanbul', 'https://bit.ly/3nUNEci'),
(23, 'ROM', 'rome', 'https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'),
(24, 'MIL', 'milano', 'https://images.pexels.com/photos/2097092/pexels-photo-2097092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(25, 'RDJ', 'rio de janeiro', 'https://images.pexels.com/photos/3648269/pexels-photo-3648269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(26, 'SAN', 'santiago de chile', 'https://images.pexels.com/photos/3874262/pexels-photo-3874262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `companyId` int(11) NOT NULL,
  `companyLogo` varchar(100) NOT NULL,
  `companyName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`companyId`, `companyLogo`, `companyName`) VALUES
(1, 'https://bit.ly/2I364I3', 'british airways'),
(2, 'https://bit.ly/2JG8nS0', 'turkish airlines'),
(3, 'https://bit.ly/3g2FKKF', 'air france'),
(4, 'https://bit.ly/3lAfGb8', 'alitalia'),
(5, 'https://bit.ly/3lDJSSt', 'airberlin'),
(6, 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg', 'lufthansa'),
(7, 'https://bit.ly/2JDirLq', 'iberia'),
(8, 'https://bit.ly/3mDx67S', 'easyjet');

-- --------------------------------------------------------

--
-- Table structure for table `flights`
--

CREATE TABLE `flights` (
  `flightId` int(11) NOT NULL,
  `departure` int(11) DEFAULT NULL,
  `destination` int(11) DEFAULT NULL,
  `hourOfStart` time NOT NULL,
  `hourOfLanding` time NOT NULL,
  `companyId` int(11) DEFAULT NULL,
  `duration` varchar(50) NOT NULL,
  `frequency` varchar(20) NOT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `isSpecialOffer` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `flights`
--

INSERT INTO `flights` (`flightId`, `departure`, `destination`, `hourOfStart`, `hourOfLanding`, `companyId`, `duration`, `frequency`, `price`, `isSpecialOffer`) VALUES
(3, 1, 14, '07:00:00', '08:30:00', 1, '1:30 h', 'daily', '79.99', 0),
(4, 1, 7, '07:00:00', '08:30:00', 7, '1:30 h', 'daily', '79.99', 0),
(5, 1, 8, '09:00:00', '10:30:00', 7, '1:30 h', 'daily', '89.99', 0),
(6, 7, 8, '11:00:00', '11:30:00', 7, '0:30 h', 'daily', '59.99', 0),
(7, 7, 23, '10:00:00', '20:30:00', 7, '10:30 h', 'daily', '189.99', 0),
(8, 23, 7, '09:00:00', '19:30:00', 7, '10:30 h', 'daily', '189.99', 0),
(9, 19, 12, '12:00:00', '15:30:00', 8, '3:30 h', 'daily', '21.99', 1),
(10, 12, 19, '16:00:00', '19:30:00', 8, '3:30 h', 'daily', '21.99', 1),
(11, 12, 7, '06:00:00', '09:30:00', 7, '3:30 h', 'daily', '89.99', 0),
(12, 7, 12, '09:00:00', '11:30:00', 8, '1:30 h', 'daily', '79.99', 0),
(13, 23, 13, '08:30:00', '14:00:00', 4, '5:30 h', 'daily', '69.99', 0),
(14, 13, 23, '14:30:00', '20:00:00', 4, '5:30 h', 'daily', '69.99', 0),
(15, 23, 18, '09:00:00', '13:30:00', 4, '4:30 h', 'daily', '79.99', 0),
(16, 18, 23, '14:00:00', '18:30:00', 4, '4:30 h', 'daily', '79.99', 0),
(17, 24, 4, '05:00:00', '06:30:00', 4, '1:30 h', 'daily', '19.99', 1),
(18, 4, 24, '07:00:00', '08:30:00', 4, '1:30 h', 'daily', '19.99', 1),
(19, 24, 14, '18:30:00', '21:00:00', 4, '2:30 h', 'daily', '79.99', 0),
(20, 14, 24, '21:00:00', '23:30:00', 4, '2:30 h', 'daily', '79.99', 0),
(21, 18, 10, '06:00:00', '11:30:00', 8, '5:30 h', 'daily', '29.99', 1),
(22, 10, 18, '12:00:00', '17:30:00', 8, '5:30 h', 'daily', '29.99', 1),
(23, 18, 11, '07:00:00', '11:30:00', 8, '3:30 h', 'daily', '29.99', 1),
(24, 11, 18, '12:00:00', '16:30:00', 8, '3:30 h', 'daily', '29.99', 1),
(25, 19, 13, '04:00:00', '08:30:00', 8, '4:30 h', 'daily', '29.99', 1),
(26, 13, 19, '09:00:00', '14:30:00', 8, '4:30 h', 'daily', '29.99', 1),
(27, 19, 18, '20:00:00', '21:30:00', 8, '1:30 h', 'daily', '19.99', 1),
(28, 18, 19, '22:00:00', '23:30:00', 8, '1:30 h', 'daily', '19.99', 1),
(29, 19, 1, '12:30:00', '18:00:00', 8, '5:30 h', 'daily', '29.99', 1),
(30, 1, 19, '18:30:00', '24:00:00', 8, '5:30 h', 'daily', '29.99', 1),
(31, 1, 14, '07:00:00', '08:30:00', 8, '1:30 h', 'daily', '29.99', 1),
(32, 1, 14, '07:00:00', '08:30:00', 8, '1:30 h', 'daily', '29.99', 1),
(33, 12, 13, '07:00:00', '08:30:00', 8, '1:30 h', 'daily', '19.99', 1),
(34, 13, 12, '09:00:00', '10:30:00', 8, '1:30 h', 'daily', '19.99', 1),
(35, 12, 20, '06:30:00', '09:00:00', 8, '2:30 h', 'daily', '29.99', 1),
(36, 20, 12, '09:00:00', '11:30:00', 8, '2:30 h', 'daily', '29.99', 1),
(37, 11, 17, '07:00:00', '08:30:00', 8, '1:30 h', 'daily', '29.99', 1),
(38, 17, 11, '09:00:00', '10:30:00', 8, '1:30 h', 'daily', '29.99', 1),
(39, 11, 19, '05:00:00', '07:30:00', 8, '2:30 h', 'daily', '29.99', 1),
(40, 19, 11, '08:00:00', '10:30:00', 8, '2:30 h', 'daily', '29.99', 1),
(41, 23, 24, '02:00:00', '07:30:00', 7, '5:30 h', 'daily', '89.99', 0),
(42, 24, 23, '08:00:00', '13:30:00', 7, '5:30 h', 'daily', '89.99', 0),
(43, 23, 10, '00:30:00', '12:00:00', 7, '11:30 h', 'daily', '229.99', 0),
(44, 10, 23, '12:30:00', '23:30:00', 7, '11:00 h', 'daily', '229.99', 0),
(45, 24, 7, '04:00:00', '18:30:00', 7, '14:30 h', 'daily', '229.99', 0),
(46, 7, 24, '09:55:00', '23:55:00', 7, '14:00 h', 'daily', '229.99', 0),
(47, 9, 7, '12:00:00', '12:30:00', 7, '0:30 h', 'daily', '79.99', 0),
(48, 7, 9, '14:00:00', '14:30:00', 7, '0:30 h', 'daily', '79.99', 0),
(49, 9, 8, '15:00:00', '15:30:00', 7, '0:30 h', 'daily', '79.99', 0),
(50, 8, 9, '16:00:00', '16:30:00', 7, '0:30 h', 'daily', '79.99', 0),
(51, 1, 3, '08:00:00', '09:00:00', 1, '1:00 h', 'daily', '79.99', 0),
(52, 1, 12, '11:55:00', '13:00:00', 1, '1:05 h', 'daily', '59.99', 0),
(53, 1, 13, '14:30:00', '15:35:00', 1, '1:05 h', 'daily', '69.99', 0),
(54, 3, 1, '15:20:00', '16:45:00', 1, '1:25 h', 'daily', '29.99', 1),
(55, 3, 4, '06:55:00', '08:10:00', 1, '1:15 h', 'daily', '93.99', 0),
(56, 2, 11, '15:25:00', '16:25:00', 1, '1:00 h', 'daily', '99.99', 0),
(57, 2, 1, '10:00:00', '11:15:00', 1, '1:15 h', 'daily', '79.99', 0),
(58, 1, 22, '12:25:00', '19:00:00', 1, '3:35 h', 'daily', '95.99', 1),
(59, 1, 21, '14:25:00', '21:30:00', 1, '3:30 h', 'daily', '99.99', 0),
(60, 1, 4, '06:25:00', '08:45:00', 1, '1:20 h', 'daily', '89.99', 0),
(61, 1, 4, '11:30:00', '13:50:00', 1, '1:20 h', 'daily', '79.99', 0),
(62, 1, 5, '07:00:00', '09:30:00', 1, '2:30 h', 'daily', '59.99', 0),
(63, 6, 3, '10:00:00', '13:30:00', 1, '3:30 h', 'daily', '99.99', 0),
(64, 6, 22, '09:00:00', '14:30:00', 1, '3:30 h', 'daily', '79.99', 0),
(65, 2, 21, '15:00:00', '21:30:00', 1, '4:30 h', 'daily', '39.99', 0),
(66, 2, 4, '07:00:00', '08:30:00', 1, '1:30 h', 'daily', '29.99', 1),
(67, 22, 19, '17:25:00', '20:12:00', 2, '3:00 h', 'daily', '59.99', 0),
(68, 22, 21, '20:35:00', '21:30:00', 2, '1:00 h', 'daily', '79.99', 0),
(69, 22, 12, '10:35:00', '11:30:00', 2, '3:55 h', 'daily', '99.99', 0),
(70, 22, 17, '08:50:00', '00:55:00', 2, '4:5 h', 'daily', '79.99', 0),
(71, 22, 23, '15:55:00', '16:05:00', 2, '4:10 h', 'daily', '49.99', 1),
(72, 22, 20, '08:45:00', '10:00:00', 2, '4:25 h', 'daily', '95.99', 0),
(73, 22, 10, '08:45:00', '10:00:00', 2, '4:15 h', 'daily', '79.99', 1),
(74, 21, 4, '11:00:00', '12:45:00', 2, '3:45 h', 'daily', '93.99', 0),
(75, 21, 13, '15:30:00', '17:15:00', 2, '3:40 h', 'daily', '59.99', 1),
(76, 21, 3, '08:30:00', '11:45:00', 2, '3:15 h', 'daily', '79.99', 0),
(77, 21, 10, '11:00:00', '12:45:00', 2, '3:45 h', 'daily', '93.99', 0),
(78, 21, 6, '15:30:00', '17:15:00', 2, '3:40 h', 'daily', '59.99', 1),
(79, 21, 18, '08:30:00', '09:30:00', 2, '1:00 h', 'daily', '29.99', 1),
(80, 21, 24, '11:00:00', '12:00:00', 2, '1:00 h', 'daily', '39.99', 1),
(81, 21, 5, '15:30:00', '17:15:00', 2, '3:40 h', 'daily', '99.99', 1),
(82, 21, 6, '08:30:00', '11:45:00', 2, '3:15 h', 'daily', '89.99', 0),
(83, 4, 15, '21:20:00', '21:45:00', 3, '1:25 h', 'daily', '29.99', 1),
(84, 4, 16, '20:45:00', '21:15:00', 3, '1:30 h', 'daily', '39.99', 1),
(85, 4, 3, '08:20:00', '09:45:00', 3, '1:30 h', 'daily', '89.99', 0),
(86, 4, 22, '22:40:00', '04:10:00', 3, '3:30 h', 'daily', '99.99', 0),
(87, 4, 7, '13:55:00', '19:10:00', 3, '3:15 h', 'daily', '99.99', 0),
(88, 4, 21, '12:50:00', '18:30:00', 3, '3:40 h', 'daily', '69.99', 1),
(89, 4, 8, '10:00:00', '10:30:00', 3, '1:30 h', 'daily', '19.99', 1),
(90, 4, 13, '11:00:00', '12:05:00', 3, '1:05 h', 'daily', '19.99', 1),
(91, 4, 6, '15:35:00', '17:00:00', 3, '1:15 h', 'daily', '39.99', 1),
(92, 4, 5, '13:05:00', '14:15:00', 3, '1:15 h', 'daily', '79.99', 0),
(93, 4, 17, '10:05:00', '11:30:00', 3, '1:25 h', 'daily', '59.99', 0),
(94, 4, 1, '11:45:00', '12:25:00', 3, '1:15 h', 'daily', '29.99', 1),
(95, 4, 22, '13:15:00', '18:40:00', 3, '3:15 h', 'daily', '99.99', 0),
(96, 4, 22, '13:55:00', '19:10:00', 3, '3:15 h', 'daily', '69.99', 1),
(97, 4, 3, '10:30:00', '11:45:00', 3, '1:15 h', 'daily', '59.99', 0),
(98, 4, 11, '08:30:00', '09:45:00', 3, '1:15 h', 'daily', '49.99', 1),
(99, 4, 1, '15:20:00', '15:45:00', 3, '1:25 h', 'daily', '79.99', 0),
(100, 4, 12, '17:20:00', '17:45:00', 3, '1:25 h', 'daily', '39.99', 1),
(101, 17, 25, '08:00:00', '21:00:00', 6, '13:00 h', 'daily', '179.99', 0),
(102, 17, 21, '08:00:00', '21:00:00', 6, '13:00 h', 'daily', '179.99', 0),
(105, 17, 26, '05:00:00', '20:30:00', 6, '15:30 h', 'daily', '179.99', 0),
(107, 25, 17, '07:00:00', '22:30:00', 6, '15:30 h', 'daily', '59.99', 1),
(108, 17, 9, '10:00:00', '13:00:00', 6, '3:00 h', 'daily', '69.99', 0),
(109, 9, 17, '14:00:00', '17:00:00', 6, '3:00 h', 'daily', '79.99', 0),
(110, 17, 23, '10:00:00', '12:00:00', 6, '2:00 h', 'daily', '19.99', 1),
(111, 23, 17, '13:00:00', '15:00:00', 6, '2:00 h', 'daily', '19.99', 1),
(112, 17, 1, '10:00:00', '13:00:00', 6, '3:00 h', 'daily', '69.99', 0),
(113, 1, 17, '14:00:00', '15:00:00', 6, '3:00 h', 'daily', '69.99', 0),
(114, 17, 8, '11:00:00', '14:00:00', 6, '3:00 h', 'daily', '69.99', 0),
(115, 8, 17, '15:00:00', '18:00:00', 6, '3:00 h', 'daily', '69.99', 0),
(116, 17, 12, '10:00:00', '13:00:00', 6, '3:00 h', 'daily', '69.99', 0),
(117, 12, 17, '14:00:00', '17:00:00', 6, '3:00 h', 'daily', '69.99', 0),
(118, 14, 4, '08:00:00', '10:00:00', 5, '2:00 h', 'daily', '19.99', 1),
(119, 4, 14, '11:00:00', '12:00:00', 5, '2:00 h', 'daily', '19.99', 1),
(120, 14, 7, '16:00:00', '19:00:00', 5, '3:00 h', 'daily', '79.99', 0),
(121, 7, 14, '20:00:00', '23:00:00', 5, '3:00 h', 'daily', '79.99', 0),
(122, 14, 23, '12:00:00', '15:00:00', 5, '3:00 h', 'daily', '79.99', 0),
(123, 23, 14, '16:00:00', '19:00:00', 5, '3:00 h', 'daily', '79.99', 0),
(124, 14, 16, '12:00:00', '13:00:00', 5, '1:00 h', 'daily', '49.99', 0),
(125, 16, 14, '14:00:00', '15:00:00', 5, '1:00 h', 'daily', '49.99', 0),
(126, 14, 22, '11:00:00', '17:00:00', 5, '5:00 h', 'daily', '79.99', 0),
(127, 22, 14, '18:00:00', '23:00:00', 5, '5:00 h', 'daily', '79.99', 0),
(128, 15, 6, '16:00:00', '19:00:00', 6, '3:00 h', 'daily', '79.99', 0),
(129, 6, 15, '20:00:00', '23:00:00', 6, '3:00 h', 'daily', '9.99', 1),
(130, 15, 20, '13:00:00', '16:00:00', 6, '3:00 h', 'daily', '79.99', 0),
(131, 20, 15, '17:00:00', '20:00:00', 6, '3:00 h', 'daily', '79.99', 0),
(132, 15, 18, '09:00:00', '12:00:00', 6, '3:00 h', 'daily', '79.99', 0),
(133, 18, 15, '13:00:00', '16:00:00', 6, '3:00 h', 'daily', '79.99', 0),
(134, 16, 9, '13:00:00', '16:00:00', 6, '3:00 h', 'daily', '19.99', 1),
(135, 9, 16, '17:00:00', '20:00:00', 6, '3:00 h', 'daily', '19.99', 1),
(136, 16, 10, '06:00:00', '10:00:00', 6, '4:00 h', 'daily', '79.99', 0),
(137, 10, 16, '17:00:00', '21:00:00', 6, '4:00 h', 'daily', '79.99', 0),
(138, 16, 18, '11:00:00', '13:00:00', 6, '2:00 h', 'daily', '69.99', 0),
(139, 18, 16, '14:00:00', '16:00:00', 6, '2:00 h', 'daily', '69.99', 0),
(140, 16, 24, '13:00:00', '15:00:00', 6, '2:00 h', 'daily', '79.99', 0),
(141, 24, 16, '16:00:00', '18:00:00', 6, '2:00 h', 'daily', '79.99', 0),
(142, 16, 3, '12:00:00', '14:00:00', 6, '2:00 h', 'daily', '79.99', 0),
(143, 3, 16, '15:00:00', '17:00:00', 6, '2:00 h', 'daily', '19.99', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`cityId`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`companyId`);

--
-- Indexes for table `flights`
--
ALTER TABLE `flights`
  ADD PRIMARY KEY (`flightId`),
  ADD KEY `destination` (`destination`),
  ADD KEY `companyId` (`companyId`),
  ADD KEY `departure` (`departure`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `cityId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `companyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `flights`
--
ALTER TABLE `flights`
  MODIFY `flightId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `flights`
--
ALTER TABLE `flights`
  ADD CONSTRAINT `flights_ibfk_1` FOREIGN KEY (`departure`) REFERENCES `city` (`cityId`),
  ADD CONSTRAINT `flights_ibfk_2` FOREIGN KEY (`destination`) REFERENCES `city` (`cityId`),
  ADD CONSTRAINT `flights_ibfk_3` FOREIGN KEY (`companyId`) REFERENCES `company` (`companyId`),
  ADD CONSTRAINT `flights_ibfk_4` FOREIGN KEY (`departure`) REFERENCES `city` (`cityId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
