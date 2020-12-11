-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.10-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for koperasi
DROP DATABASE IF EXISTS `koperasi`;
CREATE DATABASE IF NOT EXISTS `koperasi` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `koperasi`;

-- Dumping structure for table koperasi.admin
DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `login_id` varchar(25) NOT NULL,
  `nama` varchar(25) DEFAULT NULL,
  `PASSWORD` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`login_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasi.admin: ~0 rows (approximately)
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- Dumping structure for table koperasi.inisial
DROP TABLE IF EXISTS `inisial`;
CREATE TABLE IF NOT EXISTS `inisial` (
  `nota` smallint(8) DEFAULT NULL,
  `nama` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasi.inisial: ~0 rows (approximately)
/*!40000 ALTER TABLE `inisial` DISABLE KEYS */;
REPLACE INTO `inisial` (`nota`, `nama`) VALUES
	(32, '');
/*!40000 ALTER TABLE `inisial` ENABLE KEYS */;

-- Dumping structure for table koperasi.login
DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `login_id` int(25) NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

-- Dumping data for table koperasi.login: ~5 rows (approximately)
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
REPLACE INTO `login` (`login_id`, `username`, `nomor_nasabah`, `namadepan`, `namabelakang`, `email`, `PASSWORD`, `active`, `hak_akses`, `code`) VALUES
	(1, 'adi', '123', 'Adi', 'saputra', 'b@gmail.com', 'admin', '', NULL, NULL),
	(2, 'fajar', '124', 'Fajar', 'karunia', 'fajar.karunia12.fk@gmail.com', '4297f44b13955235245b2497399d7a93', 'true', '1', NULL),
	(3, 'safii', '1211', 'Safi`i', 'muhammad', 'fajar.karunia05.fk@gmail.com', 'admin', NULL, NULL, NULL),
	(14, 'Ab', '125', 'A', 'B', 'Abs', '132132', NULL, NULL, NULL),
	(15, 'Test', '126', 'Tester', 'Aja', 'Test', 'Yt', 'true', NULL, NULL);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;

-- Dumping structure for table koperasi.nasabah
DROP TABLE IF EXISTS `nasabah`;
CREATE TABLE IF NOT EXISTS `nasabah` (
  `nomor_nasabah` varchar(25) NOT NULL,
  `nama_nasabah` varchar(50) DEFAULT NULL,
  `tempat_lahir` varchar(50) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `usia` int(11) DEFAULT NULL,
  `jenis_kelamin` varchar(20) DEFAULT NULL,
  `type_identitas` varchar(25) DEFAULT NULL,
  `no_identitas` varchar(25) DEFAULT NULL,
  `alamat` varchar(100) DEFAULT NULL,
  `Bank` varchar(15) DEFAULT NULL,
  `no_rek` int(11) DEFAULT NULL,
  `telepon` varchar(20) DEFAULT NULL,
  `Gaji` int(11) DEFAULT NULL,
  `total_tabungan` int(11) DEFAULT NULL,
  `Foto` varchar(255) DEFAULT NULL,
  `Foto_Identitas` varchar(255) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`nomor_nasabah`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasi.nasabah: ~9 rows (approximately)
/*!40000 ALTER TABLE `nasabah` DISABLE KEYS */;
REPLACE INTO `nasabah` (`nomor_nasabah`, `nama_nasabah`, `tempat_lahir`, `tanggal_lahir`, `usia`, `jenis_kelamin`, `type_identitas`, `no_identitas`, `alamat`, `Bank`, `no_rek`, `telepon`, `Gaji`, `total_tabungan`, `Foto`, `Foto_Identitas`, `status`) VALUES
	('NB001', 'Safi\'i', 'Purworejo', '1965-11-28', 55, 'Laki-Laki', 'KTP', '09824342', 'Kp sawah Rt005/03', 'BCA', 0, '0', 8000000, NULL, '', NULL, NULL),
	('NB002', 'Muhammad Ali', 'Solo', '1966-12-09', 54, 'Laki-Laki', 'KTP', '09024902', 'o', 's', NULL, '3', 1000, NULL, '2', '1', NULL),
	('NB003', 'Fajar Karunia', 'Jakarta', '1989-01-17', 31, 'Perempuan', 'SIM', '981928301909932', 'abc', 'abc', 0, '1231412', 1241241241, NULL, '23267.jpg', '5536.jpg', NULL),
	('NB004', 'Irwan Nurhadi', 'Purworejo', '1989-07-30', 31, 'Laki-Laki', 'KTP', '31750612312315', 'kp sawah', 'bca', 999, '0089123', 0, 2000000, '9176.jpg', '17201.jpg', NULL),
	('NB005', 'Basuki', 'Indramayu', '2020-09-20', 24, 'Laki-Laki', 'SIM', '999', 'p', 'bd', 99, '999', 5000000, NULL, NULL, '6729.jpg', NULL),
	('NB006', 'aki', 'k', '2020-10-04', 20, 'laki', 'v', 'P', 'o', 's', NULL, '3', 1000, NULL, '2', '1', NULL),
	('NB007', 'Jamal', '', '2020-11-28', 0, '[object Object]', '', '', '', '', 0, '', NULL, NULL, '', NULL, NULL),
	('NB008', 'Sira', '', '2020-11-28', 0, 'Laki-Laki', '', '', '', '', 0, '', NULL, NULL, '', NULL, NULL),
	('NB009', 'Adi', '', '2020-11-28', 0, '', '', '9999', 'Apapa', 'Bca', 0, '1122', NULL, NULL, '', NULL, NULL);
/*!40000 ALTER TABLE `nasabah` ENABLE KEYS */;

-- Dumping structure for table koperasi.pelunasan
DROP TABLE IF EXISTS `pelunasan`;
CREATE TABLE IF NOT EXISTS `pelunasan` (
  `nomor_pelunasan` varchar(25) NOT NULL,
  `tanggal_transaksi` date DEFAULT NULL,
  `nomor_nasabah` varchar(25) DEFAULT NULL,
  `nominal` decimal(12,2) DEFAULT NULL,
  `keterangan` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`nomor_pelunasan`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasi.pelunasan: ~0 rows (approximately)
/*!40000 ALTER TABLE `pelunasan` DISABLE KEYS */;
/*!40000 ALTER TABLE `pelunasan` ENABLE KEYS */;

-- Dumping structure for table koperasi.peminjaman
DROP TABLE IF EXISTS `peminjaman`;
CREATE TABLE IF NOT EXISTS `peminjaman` (
  `nomor_pengajuan` varchar(25) NOT NULL,
  `tanggal_transaksi` date DEFAULT NULL,
  `nomor_pinjam` varchar(25) NOT NULL,
  `nomor_nasabah` varchar(25) DEFAULT NULL,
  `nominal` decimal(10,0) DEFAULT NULL,
  `cicilan` decimal(10,0) DEFAULT NULL,
  `bunga` decimal(10,4) DEFAULT NULL,
  `kredit_bulan` decimal(10,0) DEFAULT NULL,
  `keterangan` varchar(50) DEFAULT NULL,
  `admin` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`nomor_pinjam`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasi.peminjaman: ~10 rows (approximately)
/*!40000 ALTER TABLE `peminjaman` DISABLE KEYS */;
REPLACE INTO `peminjaman` (`nomor_pengajuan`, `tanggal_transaksi`, `nomor_pinjam`, `nomor_nasabah`, `nominal`, `cicilan`, `bunga`, `kredit_bulan`, `keterangan`, `admin`) VALUES
	('1', '2020-09-01', '', 'NB001', 1, 0, 0.0000, 0, '', NULL),
	('12', '2020-09-20', '1223', 'NB002', 50000000, 5000000, 0.2000, 1200000, 'a', 'fajar'),
	('22', '2020-11-28', '123', 'NB002', 2000000, 2, 0.3000, 215000, 'Abcc', NULL),
	('14', '2020-09-03', '14', 'NB003', 15000000, 0, 0.0000, 0, '', NULL),
	('1', '2020-11-28', 'A', 'NB004', 0, 0, 0.0000, 0, '', NULL),
	('P001', '2020-10-01', 'AB0001', 'NB005', 1000, 5, 0.1000, 100, 'a', NULL),
	('P0022', '2020-10-01', 'AB0002', 'NB005', 1000, 5, 0.1000, 100, 'a', NULL),
	('P0032', '2020-10-01', 'AB0003', 'NB006', 1000, 5, 0.1000, 100, 'a', NULL),
	('P0032', '2020-10-01', 'AB0004', 'NB006', 1000, 5, 0.1000, 100, 'a', NULL),
	('P0032', '2020-10-01', 'AB0005', 'NB007', 1000, 5, 0.1000, 100, 'a', NULL),
	('133', '2020-11-28', 'W', 'NB007', 0, 0, 0.0000, 0, '', NULL);
/*!40000 ALTER TABLE `peminjaman` ENABLE KEYS */;

-- Dumping structure for table koperasi.pengajuan
DROP TABLE IF EXISTS `pengajuan`;
CREATE TABLE IF NOT EXISTS `pengajuan` (
  `nomor_transaksi` varchar(25) NOT NULL,
  `tanggal_transaksi` date DEFAULT NULL,
  `nomor_nasabah` varchar(25) DEFAULT NULL,
  `tanggal_peminjaman` date DEFAULT NULL,
  `keterangan` varchar(50) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`nomor_transaksi`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasi.pengajuan: ~5 rows (approximately)
/*!40000 ALTER TABLE `pengajuan` DISABLE KEYS */;
REPLACE INTO `pengajuan` (`nomor_transaksi`, `tanggal_transaksi`, `nomor_nasabah`, `tanggal_peminjaman`, `keterangan`, `status`) VALUES
	('1', '2020-07-07', 'NB001', '2020-08-08', 'abc', ''),
	('11', '2020-07-07', 'NB002', '2020-08-08', 'abc', ''),
	('PP20-10-31001', '0000-00-00', 'NB001', '2020-11-16', 'abctest transaksi urut', NULL),
	('PP2020-12-70013', '2020-12-07', 'NB002', '2020-12-07', 'C', NULL),
	('PP2020-12-90013', '2020-12-09', 'NB003', '2020-12-09', 'Tester', NULL);
/*!40000 ALTER TABLE `pengajuan` ENABLE KEYS */;

-- Dumping structure for table koperasi.ppurut
DROP TABLE IF EXISTS `ppurut`;
CREATE TABLE IF NOT EXISTS `ppurut` (
  `Ppurut` smallint(8) DEFAULT NULL,
  `nama` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasi.ppurut: ~0 rows (approximately)
/*!40000 ALTER TABLE `ppurut` DISABLE KEYS */;
REPLACE INTO `ppurut` (`Ppurut`, `nama`) VALUES
	(12, '');
/*!40000 ALTER TABLE `ppurut` ENABLE KEYS */;

-- Dumping structure for table koperasi.ppuruttabungan
DROP TABLE IF EXISTS `ppuruttabungan`;
CREATE TABLE IF NOT EXISTS `ppuruttabungan` (
  `PpurutTabungan` smallint(8) DEFAULT NULL,
  `nama` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasi.ppuruttabungan: ~0 rows (approximately)
/*!40000 ALTER TABLE `ppuruttabungan` DISABLE KEYS */;
REPLACE INTO `ppuruttabungan` (`PpurutTabungan`, `nama`) VALUES
	(18, '');
/*!40000 ALTER TABLE `ppuruttabungan` ENABLE KEYS */;

-- Dumping structure for table koperasi.transaksi_tabungan
DROP TABLE IF EXISTS `transaksi_tabungan`;
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

-- Dumping data for table koperasi.transaksi_tabungan: ~2 rows (approximately)
/*!40000 ALTER TABLE `transaksi_tabungan` DISABLE KEYS */;
REPLACE INTO `transaksi_tabungan` (`nomor_tabungan`, `nomor_nasabah`, `tanggal_transaksi`, `bulan`, `nominal`, `keterangan`, `upload_transaksi`) VALUES
	('1', NULL, '2020-10-01', NULL, 1000000.00, 'abc                                               ', NULL),
	('3', NULL, '2020-10-11', NULL, 3333333.00, '3adadda', '7250.jpg'),
	('4', '4', '2020-10-05', NULL, 100002323.00, 'asdacac', '32579.jpg');
/*!40000 ALTER TABLE `transaksi_tabungan` ENABLE KEYS */;

-- Dumping structure for table koperasi.urutnasabah
DROP TABLE IF EXISTS `urutnasabah`;
CREATE TABLE IF NOT EXISTS `urutnasabah` (
  `urutnasabah` smallint(8) DEFAULT NULL,
  `nama` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table koperasi.urutnasabah: ~0 rows (approximately)
/*!40000 ALTER TABLE `urutnasabah` DISABLE KEYS */;
REPLACE INTO `urutnasabah` (`urutnasabah`, `nama`) VALUES
	(0, '');
/*!40000 ALTER TABLE `urutnasabah` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
