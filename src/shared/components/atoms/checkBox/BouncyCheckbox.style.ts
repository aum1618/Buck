import {ViewStyle, TextStyle, StyleSheet} from 'react-native';
import SIZES from '../../../theme/sizes';

export const _iconContainer = (
  size: number,
  checked: boolean,
  fillColor: string,
  unfillColor: string,
): ViewStyle => {
  return {
    width: size,
    height: size,
    borderRadius: size / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: checked ? fillColor : unfillColor,
  };
};

export const _textStyle = (): TextStyle => {
  return {
    fontSize: SIZES.SCALE_16,
    color: '#757575',
  };
};

export default StyleSheet.create<any>({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: SIZES.SCALE_6,
  },
  iconImageStyle: {
    width: SIZES.SCALE_10,
    height: SIZES.SCALE_10,
  },
  textContainer: {},
  iconContainer: (
    size: number,
    checked: boolean,
    fillColor: string,
    unfillColor: string,
  ) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: checked ? fillColor : unfillColor,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  innerIconContainer: (size: number, fillColor: string) => ({
    width: size,
    height: size,
    borderWidth: 1,
    borderColor: fillColor,
    borderRadius: size / 2,
    alignItems: 'center',
    justifyContent: 'center',
  }),
});
