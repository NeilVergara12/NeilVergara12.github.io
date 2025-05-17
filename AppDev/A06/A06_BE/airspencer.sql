-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2025 at 09:17 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `airspencer`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(4) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `name`) VALUES
(1, 'Air Spencer Can'),
(2, 'Cantule Holder'),
(3, 'Bundle'),
(4, 'Air Spencer Giga Clipia and Refill'),
(5, 'Soft99 Wax'),
(6, 'Headlight Lens'),
(7, 'Parklights and Interior Lights');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(4) NOT NULL,
  `categoryID` int(4) NOT NULL,
  `name` varchar(70) NOT NULL,
  `isAvailable` varchar(5) NOT NULL DEFAULT 'true',
  `code` varchar(70) NOT NULL,
  `price` int(4) NOT NULL,
  `image` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `name`, `isAvailable`, `code`, `price`, `image`) VALUES
(1, 1, 'Marine Squash', 'true', 'Marine Squash', 334, 'img/MS.webp'),
(2, 1, 'Pink Shower', 'true', 'Pink Shower', 334, 'img/PS.webp'),
(3, 1, 'Aqua Shower', 'true', 'Aqua Shower', 334, 'img/AS.webp'),
(4, 1, 'Green Breeze', 'true', 'Green Breeze', 395, 'img/GB.jpg'),
(5, 1, 'Lemon Squash', 'true', 'Lemon Squash', 334, 'img/LS.webp'),
(6, 1, 'Blue Musk', 'true', 'Blue Musk', 349, 'img/BM.webp'),
(7, 1, 'R90 Squash', 'true', 'R90 Squash', 395, 'img/RS.png'),
(8, 1, 'R90 Pink Shower', 'true', 'R90 Pink Shower', 395, 'img/RPS.png'),
(9, 2, 'Cantule Holder', 'true', 'Cantule', 219, 'img/Cantule.png'),
(10, 3, 'Cantule + Can', 'true', 'Cantule + Can', 550, 'img/Cantule.png'),
(11, 3, 'Box Order', 'true', 'Box Order (10cans)', 2995, 'img/Box.png'),
(12, 4, 'Giga Clipia', 'true', 'Giga Clip', 615, 'img/Giga Clip.png'),
(13, 4, 'Giga Refill', 'true', 'Giga Refill', 284, 'img/Giga Refill.png'),
(14, 5, 'Water Block Wax', 'true', 'WB Wax', 875, 'img/Water Block Wax.png'),
(15, 5, 'Mirror Finish Wax', 'true', 'MF Wax', 975, 'img/Mirror Finish Wax.png'),
(16, 5, 'Mirror Shine x Water Block', 'true', 'MSxWB Wax', 1800, 'img/Mirror Shine x Water Block.png'),
(17, 6, 'Premium Headlight Lens for Honda Jazz/Fit GE pre MMC (2009-11)', 'true', 'Headlight Lens Honda Jazz/Fit GE (2009-11)', 2900, 'img/Jazz lens.webp'),
(18, 6, 'Premium Headlight Lens for Jazz GK pre MMC & MMC (2014-2021)', 'true', 'Headlight Lens Honda Jazz GK (2014-21)', 3095, 'img/Jazz GK.png'),
(19, 6, 'Toyota Vios Gen 3 Headlight Lens pair fits (2014-2018)', 'true', 'Headlight Lens Toyota Vios Gen 3 (2014-18)', 2995, 'img/Vios.png'),
(20, 6, 'Premium Headlight Lens for Hyundai Tucson Gen 2 (2010-2015)', 'true', 'Headlight Lens Hyundai Tucson Gen 2 (2010-15)', 2995, 'img/Hyundai.png'),
(21, 7, 'T10 (2 pcs) quality automotive park lights AMBER, BLUE, WHITE', 'true', 'T10 Park Light', 259, 'img/Park Light.png'),
(22, 7, 'T10 LED light (pair) low cost but high quality Amber and White', 'true', 'T10 LED Light', 182, 'img/T10 LED.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
