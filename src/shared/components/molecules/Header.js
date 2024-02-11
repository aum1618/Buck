import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Bell} from 'lucide-react-native';
import {imagePaths} from '../../constants/paths';
import SIZES from '../../theme/sizes';
import typography from '../../theme/typography';

const Header = ({color}) => {
  const size = SIZES.SCALE_18;

  return (
    <View style={styles.container}>
      <View
        style={[
          {overflow: 'hidden'},
          {width: size * 2, height: size * 2, borderRadius: size},
        ]}>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          source={imagePaths.profile}
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={{
            fontSize: typography.FONT_SIZE_12,
            color: color.placeholder,
            fontFamily: typography.regular,
          }}>
          Hey Umer!
        </Text>
        <Text
          style={{
            fontSize: typography.SCALE_16,
            fontFamily: typography.bold,
            color: color.text,
          }}>
          Thursday, 12 November
        </Text>
      </View>
      <View style={{}}>
        <View
          style={{
            backgroundColor: color.secondary,
            height: SIZES.SCALE_6,
            width: SIZES.SCALE_6,
            borderRadius: 4,
            top: -SIZES.SCALE_2,
            right: SIZES.SCALE_2,
            position: 'absolute',
            zIndex: 100,
          }}
        />
        <Bell size={SIZES.SCALE_16} color={color.text} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: SIZES.SCALE_20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SIZES.SCALE_10,
  },
});

export default Header;
