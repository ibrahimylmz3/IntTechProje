-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 18 May 2019, 23:41:23
-- Sunucu sürümü: 10.1.36-MariaDB
-- PHP Sürümü: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `inttechproje`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `kategoriAdi` varchar(255) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `kategoriAciklamasi` varchar(255) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `kategoriBaglantisi` varchar(255) COLLATE utf8mb4_turkish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `kategori`
--

INSERT INTO `kategori` (`id`, `kategoriAdi`, `kategoriAciklamasi`, `kategoriBaglantisi`) VALUES
(1, 'Kategori 1 ', 'kategori 1 açıklaması', 'fb.com'),
(10, 'aa', 'aaa', 'aaa'),
(11, 'undefined', 'undefined', 'undefined');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_turkish_ci DEFAULT NULL,
  `createDate` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `email`, `createDate`) VALUES
(1, 'test', 'test', 'test@iyilmaz.com', '2019-05-08 20:28:45.158694'),
(2, 'test', 's', 'yilmazhomepc@gmail.com', '2019-05-08 20:28:45.158694'),
(3, 'test', 's', 'yilmazhomepc@gmail.com', '2019-05-08 20:28:45.158694'),
(4, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(5, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(6, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(7, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(8, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(9, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(10, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(11, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(12, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(13, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(14, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(15, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(16, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(17, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(18, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(19, 'test', '54', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(20, '11687477214', '52552', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(23, '11687477214', 'aaa', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(24, '11687477214', 'sss', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(25, 'sdfsdf', 'sdfsdf', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(26, '11687477214', 'test', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(27, 'test2', 'asdasd', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(28, 'test2', 'd', 'hiyilmaz@st.medipol.edu.tr', '2019-05-08 20:28:45.158694'),
(29, 'test', 'te', 'test@test.com', '2019-05-08 20:28:45.158694'),
(30, 'test', 't', 'test@test.com', '2019-05-08 20:28:54.469032'),
(31, 'test', 'test', 'test@test.com', '2019-05-08 20:32:26.882693'),
(32, '11687477214', 'asda', 'asdad@a', '2019-05-08 20:32:52.943791'),
(33, '11687477214', 'qweqw', 'eqweqe@aaa', '2019-05-08 20:32:59.478637');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Tablo için AUTO_INCREMENT değeri `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
