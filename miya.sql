/*
Navicat MySQL Data Transfer

Source Server         : miyawang
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : miya

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-08 20:05:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `dds` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `off` decimal(10,2) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '28费雪 Fisher Price 探索学习六面盒(双语)积木盒CMY', '直降', '限时直降', '74.00', '155.00', '../../images/lby/1003539_topic_1.jpg', null);
INSERT INTO `product` VALUES ('2', '奥迪双钻 AULDEY 超级飞侠-益智早教磁力片132件套', '拼团', '包邮包税', '66.00', '266.00', '../../images/lby/1011412_topic_1.jpg', null);
INSERT INTO `product` VALUES ('3', '澳贝 auby 动感驾驶室 宝宝方向盘幼儿童模拟开车驾驶早教益智玩具', '直降', '限时直降', '231.00', '322.00', '../../images/lby/1016478_topic_1.jpg', null);
INSERT INTO `product` VALUES ('4', '火火兔 ALILO 智能机器人儿童早教机M6遥控故事机', '满199减20', '满199减20', '77.00', '188.00', '../../images/lby/1025468_topic_1.jpg', null);
INSERT INTO `product` VALUES ('5', '伟易达 vtech 学习智立方多功能游戏桌早教认知', '拼团', '包邮包税', '199.00', '355.00', '../../images/lby/1025572_topic_1.jpg', null);
INSERT INTO `product` VALUES ('6', '澳贝 auby 电子多功能学习桌 学步推车 音乐游戏桌', '直降', '限时直降', '122.00', '211.00', '../../images/lby/1025573_topic_1.jpg', null);
INSERT INTO `product` VALUES ('7', '小猪佩奇 peppapig Peppa Pig粉红猪小妹佩佩猪玩具过家家套装 玩具屋套装', '满199减20', '满199减20', '99.00', '199.00', '../../images/lby/1248224_topic_1.jpg', null);
INSERT INTO `product` VALUES ('8', '芭比 Barbie 娃娃梦幻衣橱大型礼盒套装女孩益智过家家X4833', '拼团', '包邮包税', '155.00', '422.00', '../../images/lby/1245767_topic_1.jpg', null);
INSERT INTO `product` VALUES ('9', '28费雪 Fisher Price 探索学习六面盒(双语)积木盒CMY', '直降', '限时直降', '223.00', '355.00', '../../images/lby/1160065_topic_2.jpg', null);
INSERT INTO `product` VALUES ('10', '奥迪双钻 AULDEY 超级飞侠-益智早教磁力片132件套', '满199减20', '满199减20', '189.00', '278.00', '../../images/lby/b74a326842756ee3911c1e651662fe2a612399496.jpg', null);
INSERT INTO `product` VALUES ('11', '澳贝 auby 动感驾驶室 宝宝方向盘幼儿童模拟开车驾驶早教益智玩具', '拼团', '包邮包税', '274.00', '455.00', '../../images/lby/78f6879496aad3ed1bcb5b01db32f707847102693.jpg', null);
INSERT INTO `product` VALUES ('12', '火火兔 ALILO 智能机器人儿童早教机M6遥控故事机', '直降', '限时直降', '55.00', '105.00', '../../images/lby/e3020e4e0750b7a1a7a7948b153240ac217914394.jpg', null);
INSERT INTO `product` VALUES ('13', '伟易达 vtech 学习智立方多功能游戏桌早教认知', '满199减20', '满199减20', '44.00', '95.00', '../../images/lby/1315581_topic_1.jpg', null);
INSERT INTO `product` VALUES ('14', '澳贝 auby 电子多功能学习桌 学步推车 音乐游戏桌', '拼团', '包邮包税', '99.00', '158.00', '../../images/lby/1192730_topic_1.jpg', null);
INSERT INTO `product` VALUES ('15', '小猪佩奇 peppapig Peppa Pig粉红猪小妹佩佩猪玩具过家家套装 玩具屋套装', '直降', '限时直降', '56.00', '187.00', '../../images/lby/a2e685f2ba31aa24d39c650fdd64f7ad529562870.jpg', null);
INSERT INTO `product` VALUES ('16', '芭比 Barbie 娃娃梦幻衣橱大型礼盒套装女孩益智过家家X4833', '满199减20', '满199减20', '99.00', '233.00', '../../images/lby/e3020e4e0750b7a1a7a7948b153240ac217914394.jpg', null);
INSERT INTO `product` VALUES ('17', '28费雪 Fisher Price 探索学习六面盒(双语)积木盒CMY', '拼团', '包邮包税', '111.00', '305.00', '../../images/lby/1141481_topic_1.jpg', null);
INSERT INTO `product` VALUES ('18', '奥迪双钻 AULDEY 超级飞侠-益智早教磁力片132件套', '直降', '限时直降', '130.00', '250.00', '../../images/lby/b74a326842756ee3911c1e651662fe2a612399496.jpg', null);
INSERT INTO `product` VALUES ('19', '澳贝 auby 动感驾驶室 宝宝方向盘幼儿童模拟开车驾驶早教益智玩具', '满199减20', '满199减20', '55.00', '125.00', '../../images/lby/bf94ceefe3347f2bfdab8a3c68ff05f1431753082.jpg', null);
INSERT INTO `product` VALUES ('20', '火火兔 ALILO 智能机器人儿童早教机M6遥控故事机', '拼团', '包邮包税', '107.00', '177.00', '../../images/lby/1192730_topic_1.jpg', null);
INSERT INTO `product` VALUES ('21', '伟易达 vtech 学习智立方多功能游戏桌早教认知', '直降', '限时直降', '97.00', '180.00', './../images/lby/b1e658c0c2e1d1126b35c02cb5a4b457836867126.jpg', null);
INSERT INTO `product` VALUES ('22', '澳贝 auby 电子多功能学习桌 学步推车 音乐游戏桌', '满199减20', '满199减20', '77.00', '177.00', '../../images/lby/1082424_topic_1.jpg', null);
INSERT INTO `product` VALUES ('23', '小猪佩奇 peppapig Peppa Pig粉红猪小妹佩佩猪玩具过家家套装 玩具屋套装', '拼团', '包邮包税', '111.00', '222.00', '../../images/lby/29ce52c0014b603b669bf3934212305c946899854.jpg', null);
INSERT INTO `product` VALUES ('24', '芭比 Barbie 娃娃梦幻衣橱大型礼盒套装女孩益智过家家X4833', '直降', '限时直降', '88.00', '189.00', '../../images/lby/1082424_topic_1.jpg', null);
INSERT INTO `product` VALUES ('25', '28费雪 Fisher Price 探索学习六面盒(双语)积木盒CMY', '满199减20', '满199减20', '66.00', '155.00', '../../images/lby/5d3c4a94544b2823cb0077105bddd03f213713965.jpg', null);
INSERT INTO `product` VALUES ('26', '奥迪双钻 AULDEY 超级飞侠-益智早教磁力片132件套', '拼团', '包邮包税', '123.00', '213.00', '../../images/lby/bf94ceefe3347f2bfdab8a3c68ff05f1431753082.jpg', null);
INSERT INTO `product` VALUES ('27', '澳贝 auby 动感驾驶室 宝宝方向盘幼儿童模拟开车驾驶早教益智玩具', '直降', '限时直降', '34.00', '165.00', '../../images/lby/5d3c4a94544b2823cb0077105bddd03f213713965.jpg', null);
INSERT INTO `product` VALUES ('28', '火火兔 ALILO 智能机器人儿童早教机M6遥控故事机', '满199减20', '满199减20', '174.00', '235.00', '../../images/lby/b1e658c0c2e1d1126b35c02cb5a4b457836867126.jpg', null);
INSERT INTO `product` VALUES ('29', '伟易达 vtech 学习智立方多功能游戏桌早教认知', '拼团', '包邮包税', '34.00', '165.00', '../../images/lby/1027613_topic_1.jpg', null);
INSERT INTO `product` VALUES ('30', '澳贝 auby 电子多功能学习桌 学步推车 音乐游戏桌', '直降', '限时直降', '84.00', '176.00', '../../images/lby/1248224_topic_1.jpg', null);
INSERT INTO `product` VALUES ('31', '小猪佩奇 peppapig Peppa Pig粉红猪小妹佩佩猪玩具过家家套装 玩具屋套装', '满199减20', '满199减20', '88.00', '134.00', '../../images/lby/1027613_topic_1.jpg', null);
INSERT INTO `product` VALUES ('32', '芭比 Barbie 娃娃梦幻衣橱大型礼盒套装女孩益智过家家X4833', '拼团', '包邮包税', '78.00', '199.00', '../../images/lby/1248224_topic_1.jpg', null);
INSERT INTO `product` VALUES ('33', '28费雪 Fisher Price 探索学习六面盒(双语)积木盒CMY', '直降', '限时直降', '76.00', '145.00', '../../images/lby/2fc2f7ca31e9c61376e5a5bc20611ebd789636872.jpg', null);
INSERT INTO `product` VALUES ('34', '奥迪双钻 AULDEY 超级飞侠-益智早教磁力片132件套', '满199减20', '满199减20', '90.00', '200.00', '../../images/lby/b1e658c0c2e1d1126b35c02cb5a4b457836867126.jpg', null);
INSERT INTO `product` VALUES ('35', '澳贝 auby 动感驾驶室 宝宝方向盘幼儿童模拟开车驾驶早教益智玩具', '拼团', '包邮包税', '66.00', '155.00', '../../images/lby/1248129_topic_1.jpg', null);
INSERT INTO `product` VALUES ('36', '火火兔 ALILO 智能机器人儿童早教机M6遥控故事机', '直降', '限时直降', '153.00', '344.00', '../../images/lby/1027613_topic_1.jpg', null);
INSERT INTO `product` VALUES ('37', '伟易达 vtech 学习智立方多功能游戏桌早教认知', '满199减20', '满199减20', '251.00', '311.00', '../../images/lby/951c6643d1b086ba8ef8e02b18b02e4d761287984.jpg', null);
INSERT INTO `product` VALUES ('38', '澳贝 auby 电子多功能学习桌 学步推车 音乐游戏桌', '拼团', '包邮包税', '342.00', '555.00', '../../images/lby/bf94ceefe3347f2bfdab8a3c68ff05f1431753082.jpg', null);
INSERT INTO `product` VALUES ('39', '小猪佩奇 peppapig Peppa Pig粉红猪小妹佩佩猪玩具过家家套装 玩具屋套装', '直降', '限时直降', '33.00', '211.00', '../../images/lby/b4283566dd143012c9225d21a2e37bfb797196796.jpg', null);
INSERT INTO `product` VALUES ('40', '芭比 Barbie 娃娃梦幻衣橱大型礼盒套装女孩益智过家家X4833', '满199减20', '满199减20', '222.00', '342.00', '../../images/lby/748b0841d622d28c1f34d42559b76cdd136226479.jpg', null);
INSERT INTO `product` VALUES ('41', '28费雪 Fisher Price 探索学习六面盒(双语)积木盒CMY', '拼团', '包邮包税', '83.00', '233.00', '../../images/lby/e002ed79ef4a080919a038b29dc2893a604042156.jpg', null);
INSERT INTO `product` VALUES ('42', '奥迪双钻 AULDEY 超级飞侠-益智早教磁力片132件套', '直降', '限时直降', '234.00', '422.00', '../../images/lby/748b0841d622d28c1f34d42559b76cdd136226479.jpg', null);
INSERT INTO `product` VALUES ('43', '澳贝 auby 动感驾驶室 宝宝方向盘幼儿童模拟开车驾驶早教益智玩具', '满199减20', '满199减20', '122.00', '321.00', '../../images/lby/1141481_topic_1.jpg', null);
INSERT INTO `product` VALUES ('44', '火火兔 ALILO 智能机器人儿童早教机M6遥控故事机', '拼团', '包邮包税', '99.00', '333.00', '../../images/lby/1141481_topic_1.jpg', null);
INSERT INTO `product` VALUES ('45', '伟易达 vtech 学习智立方多功能游戏桌早教认知', '直降', '限时直降', '78.00', '213.00', '../../images/lby/24270f943e6b24711fb22deb61948ed8980629623.jpg', null);
INSERT INTO `product` VALUES ('46', '澳贝 auby 电子多功能学习桌 学步推车 音乐游戏桌', '满199减20', '满199减20', '90.00', '232.00', '../../images/lby/78f6879496aad3ed1bcb5b01db32f707847102693.jpg', null);
INSERT INTO `product` VALUES ('47', '小猪佩奇 peppapig Peppa Pig粉红猪小妹佩佩猪玩具过家家套装 玩具屋套装', '拼团', '包邮包税', '134.00', '199.00', '../../images/lby/bf94ceefe3347f2bfdab8a3c68ff05f1431753082.jpg', null);
INSERT INTO `product` VALUES ('48', '芭比 Barbie 娃娃梦幻衣橱大型礼盒套装女孩益智过家家X4833', '直降', '限时直降', '144.00', '244.00', '../../images/lby/1ed79b0de0392e64a27f4b4f87e95afa456691006.jpg', null);
INSERT INTO `product` VALUES ('49', '伟易达 vtech 学习智立方多功能游戏桌早教认知', '满199减20', '满199减20', '120.00', '233.00', '../../images/lby/bf94ceefe3347f2bfdab8a3c68ff05f1431753082.jpg', null);
INSERT INTO `product` VALUES ('50', '澳贝 auby 电子多功能学习桌 学步推车 音乐游戏桌', '拼团', '包邮包税', '96.00', '133.00', '../../images/lby/b4283566dd143012c9225d21a2e37bfb797196796.jpg', null);
INSERT INTO `product` VALUES ('51', '小猪佩奇 peppapig Peppa Pig粉红猪小妹佩佩猪玩具过家家套装 玩具屋套装', '直降', '限时直降', '77.00', '222.00', '../../images/lby/748b0841d622d28c1f34d42559b76cdd136226479.jpg', null);
INSERT INTO `product` VALUES ('52', '芭比 Barbie 娃娃梦幻衣橱大型礼盒套装女孩益智过家家X4833', '满199减20', '满199减20', '87.00', '135.00', '../../images/lby/e002ed79ef4a080919a038b29dc2893a604042156.jpg', null);
SET FOREIGN_KEY_CHECKS=1;
