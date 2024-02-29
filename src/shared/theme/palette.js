const palette = {
  primary: '#04364A',
  secondary: '#176B87',
  tertiary: '#64CCC5',
  accent: '#DAFFFB',
  error: '#FF0000',
  success: '#00FF00',
  warning: '#FFD700',
  info: '#3498DB',
  grayLight: '#FaFaFa',
  grayMedium: '#999999',
  grayDark: '#666666',
  white: '#FFFFFF',
  black: '#000000',
  darkBackground: '#121212',
  red: '#FF5252',
  green: '#4CAF50',
};

export default palette;

export const applyOpacity = (hexColor, opacity) => {
  // Ensure the opacity is within the valid range [0, 1]

  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Generate the rgba value with the given opacity
  const rgbaColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  return rgbaColor;
};
