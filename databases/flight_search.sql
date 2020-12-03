-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 03, 2020 at 12:09 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

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
  `cityName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`cityId`, `cityCode`, `cityName`) VALUES
(1, 'LON', ' london'),
(2, 'MAN', 'manchester'),
(3, 'GLA', 'glasgow'),
(4, 'PAR', 'paris'),
(5, 'LYO', 'lyon'),
(6, 'MAR', 'marseille'),
(7, 'MAD', 'madrid'),
(8, 'BCN', 'barcelona'),
(9, 'BIL', 'bilbao'),
(10, 'LIS', 'lisabon'),
(11, 'BRU', 'brussels'),
(12, 'AMS', 'amsterdam'),
(13, 'STK', 'stockholm'),
(14, 'BER', 'berlin'),
(15, 'HAM', 'hamburg'),
(16, 'CGN', 'cologne'),
(17, 'MUN', 'munich'),
(18, 'WAR', 'warsaw'),
(19, 'PRG', 'prague'),
(20, 'VIE', 'vienna'),
(21, 'ANK', 'ankara'),
(22, 'IST', 'istanbul'),
(23, 'ROM', 'rome'),
(24, 'MIL', 'milano'),
(25, 'RDJ', 'rio de janeiro'),
(26, 'SAN', 'santiago de chile');

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
(6, 'https://bit.ly/2I8rnbo', 'lufthansa'),
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
(50, 8, 9, '16:00:00', '16:30:00', 7, '0:30 h', 'daily', '79.99', 0);

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
  MODIFY `flightId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

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
