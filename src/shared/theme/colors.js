import palette from './palette';

const colors = {
  light: {
    background: palette.white,
    text: palette.black,
    primaryText: palette.primary,
    secondaryText: palette.secondary,
    placeholder: palette.grayMedium,
    primary: palette.primary,
    secondary: palette.secondary,
    accent: palette.accent,
    error: palette.error,
    success: palette.success,
    warning: palette.warning,
    info: palette.info,
    border: palette.grayLight,
    shadow: 'rgba(0, 0, 0, 0.1)',
    outline: palette.grayDark,
  },
  dark: {
    background: palette.darkBackground,
    text: palette.white,
    primaryText: palette.primary,
    secondaryText: palette.secondary,
    placeholder: palette.grayMedium,
    primary: palette.primary,
    secondary: palette.secondary,
    accent: palette.accent,
    error: palette.error,
    success: palette.success,
    warning: palette.warning,
    info: palette.info,
    border: '#333333',
    shadow: 'rgba(255, 255, 255, 0.1)',
    outline: palette.grayLight,
  },
};

export default colors;
