import {Dimensions} from 'react-native';

// Get the dimensions of the current device window
const {height: deviceHeight} = Dimensions.get('window');

// Define the guideline base height based on the main test device
const guidelineBaseHeight = 667; // The height of the main test device

/**
 * Scale a size proportionally based on the device's height
 * @function height
 * @param {number} size - The size to scale
 * @returns {number} - The scaled size
 */
const scaleSize = size => size * (deviceHeight / guidelineBaseHeight);

const SIZES = {
  SCALE_2: scaleSize(2),
  SCALE_4: scaleSize(4),
  SCALE_6: scaleSize(6),
  SCALE_8: scaleSize(8),
  SCALE_10: scaleSize(10),
  SCALE_12: scaleSize(12),
  SCALE_14: scaleSize(14),
  SCALE_16: scaleSize(16),
  SCALE_18: scaleSize(18),
  SCALE_20: scaleSize(20),
  SCALE_22: scaleSize(22),
  SCALE_24: scaleSize(24),
  SCALE_26: scaleSize(26),
  SCALE_28: scaleSize(28),
  SCALE_30: scaleSize(30),
  SCALE_32: scaleSize(32),
  SCALE_34: scaleSize(34),
  SCALE_36: scaleSize(36),
  SCALE_38: scaleSize(38),
  SCALE_40: scaleSize(40),
  SCALE_42: scaleSize(42),
  SCALE_44: scaleSize(44),
  SCALE_46: scaleSize(46),
  SCALE_48: scaleSize(48),
  SCALE_50: scaleSize(50),
  SCALE_52: scaleSize(52),
  SCALE_54: scaleSize(54),
  SCALE_56: scaleSize(56),
  SCALE_58: scaleSize(58),
  SCALE_60: scaleSize(60),
  SCALE_62: scaleSize(62),
  SCALE_64: scaleSize(64),
  SCALE_66: scaleSize(66),
  SCALE_68: scaleSize(68),
  SCALE_70: scaleSize(70),
  SCALE_72: scaleSize(72),
  SCALE_74: scaleSize(74),
  SCALE_76: scaleSize(76),
  SCALE_78: scaleSize(78),
  SCALE_80: scaleSize(80),
  SCALE_82: scaleSize(82),
  SCALE_84: scaleSize(84),
  SCALE_86: scaleSize(86),
  SCALE_88: scaleSize(88),
  SCALE_90: scaleSize(90),
  SCALE_92: scaleSize(92),
  SCALE_94: scaleSize(94),
  SCALE_96: scaleSize(96),
  SCALE_98: scaleSize(98),
  SCALE_100: scaleSize(100),
};

export default SIZES;
