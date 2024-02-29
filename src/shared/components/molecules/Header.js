import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Bell} from 'lucide-react-native';
import {imagePaths} from '../../constants/paths';
import SIZES from '../../theme/sizes';
import typography from '../../theme/typography';

const Header = ({color, text}) => {
  const size = SIZES.SCALE_18;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.overFlow,
          {width: size * 2, height: size * 2, borderRadius: size},
        ]}>
        <Image style={styles.image} source={imagePaths.profile} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.welcome, {color: color.placeholder}]}>
          {text.hey} Umer!
        </Text>
        <Text style={[styles.time, {color: color.text}]}>
          Thursday, 12 November
        </Text>
      </View>
      <View>
        <View style={[styles.circle, {backgroundColor: color.secondary}]} />
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
  circle: {
    height: SIZES.SCALE_6,
    width: SIZES.SCALE_6,
    borderRadius: 4,
    top: -SIZES.SCALE_2,
    right: SIZES.SCALE_2,
    position: 'absolute',
    zIndex: 100,
  },
  time: {
    fontSize: typography.SCALE_16,
    fontFamily: typography.bold,
  },
  welcome: {
    fontSize: typography.FONT_SIZE_12,
    fontFamily: typography.regular,
  },
  overFlow: {overflow: 'hidden'},
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Header;
