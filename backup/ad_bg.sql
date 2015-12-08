/*
Navicat MySQL Data Transfer

Source Server         : vmware
Source Server Version : 50542
Source Host           : 192.168.1.203:3306
Source Database       : ad_bg

Target Server Type    : MYSQL
Target Server Version : 50542
File Encoding         : 65001

Date: 2015-12-08 16:45:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ad_log
-- ----------------------------
DROP TABLE IF EXISTS `ad_log`;
CREATE TABLE `ad_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bundleid` varchar(50) NOT NULL COMMENT '应用对应的唯一标示',
  `name` varchar(50) NOT NULL COMMENT '应用名字',
  `platform` varchar(50) NOT NULL COMMENT '目前应用统计平台',
  `adstate` varchar(50) NOT NULL COMMENT '广告状态',
  `adtype` varchar(50) NOT NULL COMMENT '广告类型',
  `subcount` bigint(50) DEFAULT '1' COMMENT '发生次数',
  PRIMARY KEY (`id`),
  UNIQUE KEY `test` (`bundleid`,`name`,`platform`,`adstate`,`adtype`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
