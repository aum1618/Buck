import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import SIZES from '../../theme/sizes';
import typography from '../../theme/typography';
import colors from '../../theme/colors';
import {Plus} from 'lucide-react-native';

export const FloatingButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Plus size={typography.FONT_SIZE_24} color={colors.light.text2} />
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light.secondary,
    width: SIZES.SCALE_50,
    height: SIZES.SCALE_50,
    borderRadius: 999,
    elevation: 4,
    position: 'absolute',
    zIndex: 100,
    bottom: SIZES.SCALE_10,
    right: SIZES.SCALE_10,
  },
};
