-- --------------------------------------------------------
-- Host:                         db4free.net
-- Server version:               8.0.22 - MySQL Community Server - GPL
-- Server OS:                    Linux
-- HeidiSQL Version:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for koperasiku
CREATE DATABASE IF NOT EXISTS `koperasiku` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `koperasiku`;

-- Dumping structure for table koperasiku.admin
CREATE TABLE IF NOT EXISTS `admin` (
  `login_id` varchar(25) NOT NULL,
  `nama` varchar(25) DEFAULT NULL,
  `PASSWORD` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`login_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasiku.admin: ~0 rows (approximately)
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- Dumping structure for table koperasiku.inisial
CREATE TABLE IF NOT EXISTS `inisial` (
  `nota` smallint DEFAULT NULL,
  `nama` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasiku.inisial: ~0 rows (approximately)
/*!40000 ALTER TABLE `inisial` DISABLE KEYS */;
REPLACE INTO `inisial` (`nota`, `nama`) VALUES
	(45, '');
/*!40000 ALTER TABLE `inisial` ENABLE KEYS */;

-- Dumping structure for table koperasiku.login
CREATE TABLE IF NOT EXISTS `login` (
  `login_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `nomor_nasabah` varchar(50) DEFAULT NULL,
  `namadepan` varchar(25) DEFAULT NULL,
  `namabelakang` varchar(25) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `PASSWORD` varchar(100) DEFAULT NULL,
  `active` varchar(100) DEFAULT NULL,
  `hak_akses` varchar(100) DEFAULT NULL,
  `code` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

-- Dumping data for table koperasiku.login: ~9 rows (approximately)
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
REPLACE INTO `login` (`login_id`, `username`, `nomor_nasabah`, `namadepan`, `namabelakang`, `email`, `PASSWORD`, `active`, `hak_akses`, `code`) VALUES
	(1, 'adi', 'NB004', 'Adi', 'saputra', 'irwan.karunia@gmail.com', '4297f44b13955235245b2497399d7a93', 'true', '2', NULL),
	(2, 'fajar', 'NB003', 'Fajar', 'karunia', 'fajar.karunia12.fk@gmail.com', 'e3afed0047b08059d0fada10f400c1e5', 'true', '1', NULL),
	(3, 'safii', 'NB001', 'Safi`i', 'muhammad', 'safei184@gmail.com', '4297f44b13955235245b2497399d7a93', NULL, NULL, NULL),
	(18, 'hafidhalbaram', 'H4F1DH', 'Hafidh', 'Albar', 'hafidh2704@gmail.com', '4297f44b13955235245b2497399d7a93', 'true', '2', 'eUD4O1TIAw3x'),
	(23, 'Xtakeitme', 'NB009', 'X', 'Takeitme', 'xtakeitme11@gdrivegue.com', 'f307589531ed529148bef0ee7715e1c9', 'true', '2', NULL),
	(26, 'Leon', 'NB011', 'fixme', 'Leon', 'fixmeleon11@gmail.com', '64450f40ac6bd33c60ce9adaffa4f954', 'true', '2', NULL),
	(29, 'Najah', 'NB010', 'Afifah', 'Najah', 'afifahdnajah@gmail.com', 'c4d98de33037d760292977d6da639943', 'true', '2', NULL),
	(30, 'Hafidh', NULL, 'Hafid', 'Albar', 'hafidhalbarmuhammad@gmail.com', '4297f44b13955235245b2497399d7a93', 'true', '2', NULL);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;

-- Dumping structure for table koperasiku.nasabah
CREATE TABLE IF NOT EXISTS `nasabah` (
  `nomor_nasabah` varchar(25) NOT NULL,
  `nama_nasabah` varchar(50) DEFAULT NULL,
  `tempat_lahir` varchar(50) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `usia` int DEFAULT NULL,
  `jenis_kelamin` varchar(20) DEFAULT NULL,
  `type_identitas` varchar(25) DEFAULT NULL,
  `no_identitas` varchar(25) DEFAULT NULL,
  `alamat` varchar(100) DEFAULT NULL,
  `Bank` varchar(15) DEFAULT NULL,
  `no_rek` int DEFAULT NULL,
  `telepon` varchar(20) DEFAULT NULL,
  `Gaji` int DEFAULT NULL,
  `total_tabungan` int DEFAULT NULL,
  `total_pinjam` decimal(10,0) DEFAULT NULL,
  `Foto` varchar(255) DEFAULT NULL,
  `Foto_Identitas` varchar(255) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`nomor_nasabah`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasiku.nasabah: ~10 rows (approximately)
/*!40000 ALTER TABLE `nasabah` DISABLE KEYS */;
REPLACE INTO `nasabah` (`nomor_nasabah`, `nama_nasabah`, `tempat_lahir`, `tanggal_lahir`, `usia`, `jenis_kelamin`, `type_identitas`, `no_identitas`, `alamat`, `Bank`, `no_rek`, `telepon`, `Gaji`, `total_tabungan`, `total_pinjam`, `Foto`, `Foto_Identitas`, `status`) VALUES
	('AB001', 'Ts', 'JKT', '1967-01-05', 54, 'Perempuan', 'KTP', '1928401', '-', '-', 0, '00000', 50000000, 0, 0, NULL, NULL, NULL),
	('AB002', 'tess', 'BDG', '2002-09-11', 18, 'Laki-Laki', 'KTP', '00000', '--', 'BRI', 92813801, '0214449019', 20000000, 0, 0, NULL, NULL, NULL),
	('H4F1DH', 'Hafidh Albar Muhammad', 'Los Angeles', '1998-04-27', 22, 'Laki-Laki', 'SIM', '317637282', '6834 Hollywood Blvd - Los Angeles CA ', 'BNI', 672259482, '085817911180', 20000000, 0, 0, NULL, NULL, 'Allowed'),
	('NB001', 'Safi\'i', 'Purworejo', '1965-11-28', 55, 'Laki-Laki', 'KTP', '09824342', 'Kp sawah Rt005/03', 'BCA', 0, '084751823912', 8000000, 10000000, 0, '', NULL, 'Allowed'),
	('NB002', 'Muhammad Ali', 'Solo', '1966-12-09', 54, 'Laki-Laki', 'KTP', '09024902', 'o', 's', NULL, '0214192849', 1000, 8000000, 0, '2', '1', 'Allowed'),
	('NB003', 'Fajar Karunia', 'Jakarta', '1989-01-17', 31, 'Perempuan', 'SIM', '981928301909932', 'abc', 'abc', 0, '1231412', 1241241241, 2000000, 0, '23267.jpg', '5536.jpg', 'Allowed'),
	('NB004', 'Irwan Nurhadi', 'Purworejo', '1989-07-30', 31, 'Laki-Laki', 'KTP', '31750612312315', 'kp sawah', 'bca', 999, '0089123', 0, 0, 0, '9176.jpg', '17201.jpg', NULL),
	('NB005', 'Basuki', 'Indramayu', '2020-09-20', 24, 'Laki-Laki', 'SIM', '999', 'p', 'bd', 99, '999', 5000000, 5000000, 0, NULL, '6729.jpg', NULL),
	('NB006', 'aki', 'k', '2020-10-04', 20, 'Laki-Laki', 'KTP', '92841928409', 'o', 's', NULL, '02143989380', 1000, 9500000, 0, '2', '1', NULL),
	('NB007', 'Jamal', '', '2020-11-28', 0, 'Laki-Laki', '', '', '', '', 0, '', NULL, 6600000, 0, '', NULL, NULL),
	('NB008', 'Sira', '', '2020-11-28', 0, 'Laki-Laki', '', '', '', '', 0, '', NULL, 4000000, 0, '', NULL, NULL),
	('NB009', 'xtakeitme', 'jakarta', '1996-11-01', 26, 'Laki-Laki', '', '', '', 'BNI', 888923711, '564781239', 0, 4500000, 0, NULL, NULL, 'Allowed'),
	('NB010', 'Afifah Najah', 'Tangerang selatan', '1998-03-20', 22, 'Perempuan', 'KTP', '', '', 'BRI', 0, '', 4000000, NULL, NULL, NULL, NULL, 'Allowed'),
	('NB011', 'FixMeLeon', 'Misterious', '1880-11-01', 140, 'Laki-Laki', 'KTP', '1209301293', 'xxxx', 'BCA', 2147483647, '0214806594', 20000000, NULL, NULL, '1227330887.jpg', NULL, NULL);
/*!40000 ALTER TABLE `nasabah` ENABLE KEYS */;

-- Dumping structure for table koperasiku.pelunasan
CREATE TABLE IF NOT EXISTS `pelunasan` (
  `nomor_pelunasan` varchar(25) NOT NULL,
  `tanggal_transaksi` date DEFAULT NULL,
  `nomor_nasabah` varchar(25) DEFAULT NULL,
  `nominal` decimal(12,2) DEFAULT NULL,
  `keterangan` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`nomor_pelunasan`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasiku.pelunasan: ~0 rows (approximately)
/*!40000 ALTER TABLE `pelunasan` DISABLE KEYS */;
/*!40000 ALTER TABLE `pelunasan` ENABLE KEYS */;

-- Dumping structure for table koperasiku.peminjaman
CREATE TABLE IF NOT EXISTS `peminjaman` (
  `nomor_pengajuan` varchar(25) NOT NULL,
  `tanggal_transaksi` date DEFAULT NULL,
  `nomor_pinjam` varchar(25) NOT NULL,
  `nomor_nasabah` varchar(25) DEFAULT NULL,
  `nominal` decimal(10,0) DEFAULT NULL,
  `cicilan` decimal(10,0) DEFAULT NULL,
  `bunga` decimal(10,0) DEFAULT NULL,
  `kredit_bulan` decimal(10,0) DEFAULT NULL,
  `keterangan` varchar(50) DEFAULT NULL,
  `admin` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`nomor_pinjam`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasiku.peminjaman: ~3 rows (approximately)
/*!40000 ALTER TABLE `peminjaman` DISABLE KEYS */;
REPLACE INTO `peminjaman` (`nomor_pengajuan`, `tanggal_transaksi`, `nomor_pinjam`, `nomor_nasabah`, `nominal`, `cicilan`, `bunga`, `kredit_bulan`, `keterangan`, `admin`) VALUES
	('PP2021-1-50031', '2021-01-07', 'TR2021-1-7-0044', 'NB001', 5000000, 12, 5000000, 5600000, 'Saya angsur selama 12 x', NULL),
	('PP2021-1-30029', '2021-01-07', 'TR2021-1-7-0045', 'NB003', 2000000, 5, 2000000, 2100000, 'Angsuran sebanyak 5x', NULL),
	('PP2021-1-30026', '2021-01-03', 'TR2021130041', 'NB001', 12000000, 12, 0, 1000000, 'Tes', NULL);
/*!40000 ALTER TABLE `peminjaman` ENABLE KEYS */;

-- Dumping structure for table koperasiku.pengajuan
CREATE TABLE IF NOT EXISTS `pengajuan` (
  `nomor_transaksi` varchar(25) NOT NULL,
  `tanggal_transaksi` date DEFAULT NULL,
  `nomor_nasabah` varchar(25) DEFAULT NULL,
  `tanggal_peminjaman` date DEFAULT NULL,
  `keterangan` varchar(50) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`nomor_transaksi`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasiku.pengajuan: ~4 rows (approximately)
/*!40000 ALTER TABLE `pengajuan` DISABLE KEYS */;
REPLACE INTO `pengajuan` (`nomor_transaksi`, `tanggal_transaksi`, `nomor_nasabah`, `tanggal_peminjaman`, `keterangan`, `status`) VALUES
	('PP2021-1-30025', '2021-01-03', 'NB001', '0161-01-25', 'Ff', 'Not Allowed'),
	('PP2021-1-30026', '2021-01-03', 'NB001', '2021-01-06', '', 'Allowed'),
	('PP2021-1-30027', '2021-01-03', 'NB001', '2021-02-04', 'Test pinjam', 'Allowed'),
	('PP2021-1-30028', '2021-01-03', 'H4F1DH', '2021-01-07', '', 'Allowed'),
	('PP2021-1-30029', '2021-01-03', 'NB003', '2021-03-12', 'Pinjam uang maret', 'Allowed'),
	('PP2021-1-50030', '2021-01-05', 'NB001', '2021-01-04', 'Mengajukan pinjaman 5000000', NULL),
	('PP2021-1-50031', '2021-01-05', 'NB001', '2021-02-04', 'Sy mengajukan pinjaman sebesar 5000000', 'Allowed');
/*!40000 ALTER TABLE `pengajuan` ENABLE KEYS */;

-- Dumping structure for table koperasiku.ppurut
CREATE TABLE IF NOT EXISTS `ppurut` (
  `Ppurut` smallint DEFAULT NULL,
  `nama` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasiku.ppurut: ~0 rows (approximately)
/*!40000 ALTER TABLE `ppurut` DISABLE KEYS */;
REPLACE INTO `ppurut` (`Ppurut`, `nama`) VALUES
	(31, '');
/*!40000 ALTER TABLE `ppurut` ENABLE KEYS */;

-- Dumping structure for table koperasiku.ppuruttabungan
CREATE TABLE IF NOT EXISTS `ppuruttabungan` (
  `PpurutTabungan` smallint DEFAULT NULL,
  `nama` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasiku.ppuruttabungan: ~0 rows (approximately)
/*!40000 ALTER TABLE `ppuruttabungan` DISABLE KEYS */;
REPLACE INTO `ppuruttabungan` (`PpurutTabungan`, `nama`) VALUES
	(24, '');
/*!40000 ALTER TABLE `ppuruttabungan` ENABLE KEYS */;

-- Dumping structure for table koperasiku.transaksi_tabungan
CREATE TABLE IF NOT EXISTS `transaksi_tabungan` (
  `nomor_tabungan` varchar(10) NOT NULL,
  `nomor_nasabah` varchar(25) DEFAULT NULL,
  `tanggal_transaksi` date DEFAULT NULL,
  `bulan` varchar(2) DEFAULT NULL,
  `nominal` decimal(12,2) DEFAULT NULL,
  `keterangan` varchar(50) DEFAULT NULL,
  `upload_transaksi` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`nomor_tabungan`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasiku.transaksi_tabungan: ~3 rows (approximately)
/*!40000 ALTER TABLE `transaksi_tabungan` DISABLE KEYS */;
REPLACE INTO `transaksi_tabungan` (`nomor_tabungan`, `nomor_nasabah`, `tanggal_transaksi`, `bulan`, `nominal`, `keterangan`, `upload_transaksi`) VALUES
	('1', NULL, '2020-10-01', NULL, 1000000.00, 'abc                                               ', NULL),
	('3', NULL, '2020-10-11', NULL, 3333333.00, '3adadda', '7250.jpg'),
	('4', '4', '2020-10-05', NULL, 100002323.00, 'asdacac', '32579.jpg'),
	('TB20-12-14', 'NB003', '2020-12-03', NULL, 20000000.00, 'senin 14/12/2020', NULL);
/*!40000 ALTER TABLE `transaksi_tabungan` ENABLE KEYS */;

-- Dumping structure for table koperasiku.urutnasabah
CREATE TABLE IF NOT EXISTS `urutnasabah` (
  `urutnasabah` smallint DEFAULT NULL,
  `nama` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasiku.urutnasabah: ~0 rows (approximately)
/*!40000 ALTER TABLE `urutnasabah` DISABLE KEYS */;
REPLACE INTO `urutnasabah` (`urutnasabah`, `nama`) VALUES
	(0, '');
/*!40000 ALTER TABLE `urutnasabah` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
