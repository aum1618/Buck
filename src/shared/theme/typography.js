import {PixelRatio} from 'react-native';

// Font family variable
const fontFamily = 'Montserrat';

/**
 * Scale a font size proportionally based on the device's pixel density.
 * @function scaleFont
 * @param {number} size - The font size to scale.
 * @returns {number} - The scaled font size.
 */
const scaleFont = size => size * PixelRatio.getFontScale();

const FONT_SIZE_60 = scaleFont(60);
const FONT_SIZE_50 = scaleFont(50);
const FONT_SIZE_40 = scaleFont(40);
const FONT_SIZE_44 = scaleFont(44);
const FONT_SIZE_46 = scaleFont(46);
const FONT_SIZE_48 = scaleFont(48);
const FONT_SIZE_30 = scaleFont(28);
const FONT_SIZE_28 = scaleFont(26);
const FONT_SIZE_26 = scaleFont(24);
const FONT_SIZE_24 = scaleFont(22);
const FONT_SIZE_22 = scaleFont(20);
const FONT_SIZE_21 = scaleFont(19);
const FONT_SIZE_20 = scaleFont(18);
const FONT_SIZE_18 = scaleFont(16);
const FONT_SIZE_16 = scaleFont(14);
const FONT_SIZE_14 = scaleFont(12);
const FONT_SIZE_12 = scaleFont(10);
const FONT_SIZE_10 = scaleFont(8);
const FONT_SIZE_8 = scaleFont(6);

const typography = {
  regular: `${fontFamily}-Regular`,
  bold: `${fontFamily}-Bold`,
  italic: `${fontFamily}-Italic`,
  boldItalic: `${fontFamily}-BoldItalic`,
  light: `${fontFamily}-Light`,
  lightItalic: `${fontFamily}-LightItalic`,
  semiBold: `${fontFamily}-SemiBold`,
  semiBoldItalic: `${fontFamily}-SemiBoldItalic`,
  extraLight: `${fontFamily}-ExtraLight`,
  extraLightItalic: `${fontFamily}-ExtraLightItalic`,
  thin: `${fontFamily}-Thin`,
  thinItalic: `${fontFamily}-ThinItalic`,
  medium: `${fontFamily}-Medium`,
  mediumItalic: `${fontFamily}-MediumItalic`,
  extraBold: `${fontFamily}-ExtraBold`,
  extraBoldItalic: `${fontFamily}-ExtraBoldItalic`,
  black: `${fontFamily}-Black`,
  blackItalic: `${fontFamily}-BlackItalic`,

  FONT_SIZE_60,
  FONT_SIZE_50,
  FONT_SIZE_40,
  FONT_SIZE_44,
  FONT_SIZE_46,
  FONT_SIZE_48,
  FONT_SIZE_30,
  FONT_SIZE_28,
  FONT_SIZE_26,
  FONT_SIZE_24,
  FONT_SIZE_22,
  FONT_SIZE_21,
  FONT_SIZE_20,
  FONT_SIZE_18,
  FONT_SIZE_16,
  FONT_SIZE_14,
  FONT_SIZE_12,
  FONT_SIZE_10,
  FONT_SIZE_8,
};

export default typography;
