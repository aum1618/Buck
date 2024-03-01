import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Easing,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Modal from 'react-native-modal';
import SIZES from '../../theme/sizes';
import typography from '../../theme/typography';
import BouncyCheckbox from '../atoms/checkBox/BouncyCheckbox';
import LottieView from 'lottie-react-native';
import {X} from 'lucide-react-native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function CategoryModal({
  color,
  text,
  isVisible,
  toggleModal,
  onPress,
  value,
  setValue,
}) {
  const StartAnimation = () => {
    toggleModal();
  };
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      onBackButtonPress={toggleModal}
      backdropOpacity={0.8}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}>
      <View
        style={{
          backgroundColor: color.border,
          padding: SIZES.SCALE_10,
          margin: SIZES.SCALE_10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: SIZES.SCALE_10,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: color.text,
              fontFamily: typography.bold,
              fontSize: typography.FONT_SIZE_16,
            }}>
            Add New Category
          </Text>
          <TouchableOpacity
            onPress={toggleModal}
            style={{
              position: 'absolute',
              right: SIZES.SCALE_10,
            }}>
            <X color={color.text} size={typography.FONT_SIZE_24} />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', margin: SIZES.SCALE_10}}>
          <TextInput
            cursorColor={color.secondary}
            style={{
              color: color.secondary,
              fontFamily: typography.regular,
              fontSize: typography.FONT_SIZE_14,
              borderBottomColor: color.outline,
              borderBottomWidth: 1,
              flex: 1,
            }}
            placeholder="Category Name"
          />
        </View>
        <View
          style={{
            alignSelf: 'flex-start',
            marginHorizontal: SIZES.SCALE_10,
          }}>
          <BouncyCheckbox
            fillColor={color.secondary}
            size={SIZES.SCALE_18}
            text="Income Category"
            textStyle={{
              fontFamily: typography.regular,
              color: color.text,
              fontSize: typography.FONT_SIZE_14,
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={StartAnimation}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: color.secondary,
              height: SIZES.SCALE_40,
              margin: SIZES.SCALE_10,
              marginTop: SIZES.SCALE_20,
              flex: 1,
            }}>
            <Text
              style={{
                fontFamily: typography.medium,
                color: color.white,
                fontSize: typography.FONT_SIZE_14,
              }}>
              SAVE CATEGORY
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: SIZES.SCALE_10,
    margin: SIZES.SCALE_10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
