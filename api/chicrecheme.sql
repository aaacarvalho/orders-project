-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 27-Fev-2020 às 13:03
-- Versão do servidor: 10.1.37-MariaDB
-- versão do PHP: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `orders_project`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `buffets`
--

CREATE TABLE `buffets` (
  `id` int(255) NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `category_id` int(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `buffets`
--

INSERT INTO `buffets` (`id`, `name`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Batata Frita', 1, '2020-02-22 21:24:01', '2020-02-22 21:24:01'),
(2, 'Mini Hamburguer', 1, '2020-02-22 21:24:16', '2020-02-22 21:24:16'),
(3, 'Nuggets', 1, '2020-02-22 21:24:35', '2020-02-22 21:24:35'),
(4, 'Torradas', 3, '2020-02-22 21:24:58', '2020-02-22 21:24:58'),
(5, 'Patê de Sardinha', 3, '2020-02-22 21:25:23', '2020-02-22 21:25:23'),
(6, 'Escalopinho de Carne', 2, '2020-02-22 21:30:54', '2020-02-22 21:30:54'),
(7, 'Medalhão de Frango', 2, '2020-02-22 21:31:10', '2020-02-22 21:31:10');

-- --------------------------------------------------------

--
-- Estrutura da tabela `buffets_categories`
--

CREATE TABLE `buffets_categories` (
  `id` int(255) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `buffets_categories`
--

INSERT INTO `buffets_categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Infantil', '2020-02-22 21:20:24', '2020-02-22 21:20:24'),
(2, 'Casamento', '2020-02-22 21:20:47', '2020-02-22 21:20:47'),
(3, 'Coffee Break', '2020-02-22 21:21:16', '2020-02-22 21:21:16'),
(4, 'Jantar', '2020-02-22 21:23:41', '2020-02-22 21:23:41');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cities`
--

CREATE TABLE `cities` (
  `id` int(255) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `cities`
--

INSERT INTO `cities` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Campos', '2020-02-22 21:31:33', '2020-02-22 21:31:33'),
(2, 'Macaé', '2020-02-22 21:31:39', '2020-02-22 21:31:39'),
(3, 'Rio de Janeiro', '2020-02-22 21:31:48', '2020-02-22 21:31:48');

-- --------------------------------------------------------

--
-- Estrutura da tabela `neighborhoods`
--

CREATE TABLE `neighborhoods` (
  `id` int(255) NOT NULL,
  `name` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `city_id` int(255) NOT NULL,
  `price` float(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `neighborhoods`
--

INSERT INTO `neighborhoods` (`id`, `name`, `city_id`, `price`, `created_at`, `updated_at`) VALUES
(1, 'Pelinca', 1, 8.00, '2020-02-22 21:40:33', '2020-02-22 21:40:33'),
(2, 'Centro', 1, 10.00, '2020-02-22 21:41:07', '2020-02-22 21:41:07'),
(3, 'Pq. Tamandaré', 1, 10.00, '2020-02-22 21:41:31', '2020-02-22 21:41:31'),
(4, 'Cavaleiros', 2, 10.00, '2020-02-22 21:41:43', '2020-02-22 21:41:43'),
(5, 'Nova Holanda', 2, 14.00, '2020-02-22 21:41:58', '2020-02-22 21:41:58'),
(6, 'Aeroporto', 2, 12.00, '2020-02-22 21:42:11', '2020-02-22 21:42:11'),
(7, 'Flamengo', 3, 14.00, '2020-02-22 21:42:23', '2020-02-22 21:42:23'),
(8, 'Botafogo', 3, 16.00, '2020-02-22 21:42:33', '2020-02-22 21:42:33'),
(9, 'Ipanema', 3, 20.00, '2020-02-22 21:42:45', '2020-02-22 21:42:45');

-- --------------------------------------------------------

--
-- Estrutura da tabela `snacks`
--

CREATE TABLE `snacks` (
  `id` int(255) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `category_id` int(255) NOT NULL,
  `price` float(10,2) NOT NULL,
  `minimum` int(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `snacks`
--

INSERT INTO `snacks` (`id`, `name`, `category_id`, `price`, `minimum`, `created_at`, `updated_at`) VALUES
(1, 'Coxinha', 1, 0.50, 25, '2020-02-22 21:43:47', '0000-00-00 00:00:00'),
(2, 'Coxinha', 3, 0.40, 25, '2020-02-22 21:44:10', '0000-00-00 00:00:00'),
(3, 'Kibe', 1, 0.60, 25, '2020-02-22 21:44:28', '0000-00-00 00:00:00'),
(4, 'Kibe', 3, 0.45, 25, '2020-02-22 21:45:41', '2020-02-22 21:45:41'),
(5, 'Pastel', 1, 0.65, 25, '2020-02-22 21:46:26', '2020-02-22 21:46:26'),
(6, 'Pastel', 2, 0.50, 25, '2020-02-22 21:46:36', '2020-02-22 21:46:36'),
(7, 'Pastel', 0, 3.00, 25, '2020-02-22 21:46:49', '2020-02-22 21:46:49');

-- --------------------------------------------------------

--
-- Estrutura da tabela `snacks_categories`
--

CREATE TABLE `snacks_categories` (
  `id` int(255) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `snacks_categories`
--

INSERT INTO `snacks_categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Pronto', '2020-02-22 21:42:55', '2020-02-22 21:42:55'),
(2, 'Semi-pronto', '2020-02-22 21:43:02', '2020-02-22 21:43:02'),
(3, 'Cru', '2020-02-22 21:43:06', '2020-02-22 21:43:06'),
(4, 'Especiais', '2020-02-22 21:43:12', '2020-02-22 21:43:12'),
(5, 'Sanduíches', '2020-02-22 21:43:18', '2020-02-22 21:43:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buffets`
--
ALTER TABLE `buffets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buffets_categories`
--
ALTER TABLE `buffets_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `neighborhoods`
--
ALTER TABLE `neighborhoods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `snacks`
--
ALTER TABLE `snacks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `snacks_categories`
--
ALTER TABLE `snacks_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buffets`
--
ALTER TABLE `buffets`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `buffets_categories`
--
ALTER TABLE `buffets_categories`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `neighborhoods`
--
ALTER TABLE `neighborhoods`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `snacks`
--
ALTER TABLE `snacks`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `snacks_categories`
--
ALTER TABLE `snacks_categories`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
