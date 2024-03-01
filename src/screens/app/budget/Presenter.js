import React, {useRef, useState} from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import SIZES, {deviceWidth} from '../../../shared/theme/sizes';
import typography from '../../../shared/theme/typography';
import {MoreVertical, ChevronLeft, ChevronRight} from 'lucide-react-native';
import {applyOpacity} from '../../../shared/theme/palette';

export default function Presenter({color, text}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollable, setScrollable] = useState(false);
  const flatListRef = useRef(null);
  const dataLength = 5;

  const scrollToIndex = index => {
    // if (currentIndex === 0 || currentIndex === 5) {
    //   return;
    // }
    setScrollable(true);
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({animated: true, index});
    }
    setCurrentIndex(index);
    setScrollable(false);
  };
  return (
    <Wrapper color={color}>
      <View style={{flex: 1, margin: SIZES.SCALE_10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: color.text,
              fontFamily: typography.bold,
              fontSize: typography.FONT_SIZE_20,
            }}>
            Budget Overview
          </Text>
          {/* {showDropdown && <DropDown color={color} />}
          <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
            <MoreVertical color={color.text} size={typography.FONT_SIZE_24} />
          </TouchableOpacity> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: SIZES.SCALE_10,
          }}>
          <TouchableOpacity
            onPress={
              currentIndex === 0
                ? () => {}
                : () => scrollToIndex(currentIndex - 1)
            }>
            {currentIndex !== 0 && (
              <ChevronLeft color={color.text} size={typography.FONT_SIZE_24} />
            )}
          </TouchableOpacity>
          <Text
            style={{
              color: color.text,
              fontFamily: typography.medium,
              fontSize: typography.FONT_SIZE_18,
            }}>
            May
          </Text>
          <TouchableOpacity
            onPress={
              currentIndex === dataLength - 1
                ? () => {}
                : () => scrollToIndex(currentIndex + 1)
            }>
            {currentIndex !== dataLength - 1 && (
              <ChevronRight color={color.text} size={typography.FONT_SIZE_24} />
            )}
          </TouchableOpacity>
        </View>
        <FlatList
          ref={flatListRef}
          data={new Array(dataLength)}
          scrollEnabled={scrollable}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          renderItem={() => {
            return (
              <View
                style={{
                  padding: SIZES.SCALE_20,
                  borderRadius: 14,
                  margin: SIZES.SCALE_10,
                  backgroundColor: color.border,
                  height: SIZES.SCALE_100,
                  width: deviceWidth - SIZES.SCALE_44,
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: color.text,
                      fontFamily: typography.regular,
                      textAlign: 'center',
                      width: '50%',
                      fontSize: typography.FONT_SIZE_14,
                    }}>
                    No Budget set for this Month.
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </Wrapper>
  );
}

const DropDown = ({color}) => {
  return (
    <View
      style={{
        backgroundColor: color.border,
        borderRadius: 12,
        position: 'absolute',
        right: 0,
        top: SIZES.SCALE_26,
        width: SIZES.SCALE_70,
        zIndex: 100,
      }}>
      <Text
        style={{
          color: color.text,
          fontSize: typography.FONT_SIZE_14,
          fontFamily: typography.regular,
          padding: SIZES.SCALE_6,
        }}>
        Monthly
      </Text>
      <View
        style={{
          height: 1,
          borderRadius: 999,
          backgroundColor: color.placeholder,
          marginHorizontal: SIZES.SCALE_4,
        }}
      />
      <Text
        style={{
          color: color.text,
          fontSize: typography.FONT_SIZE_14,
          fontFamily: typography.regular,
          padding: SIZES.SCALE_6,
        }}>
        Yearly
      </Text>
      <View
        style={{
          height: 1,
          borderRadius: 999,
          backgroundColor: color.placeholder,
          marginHorizontal: SIZES.SCALE_4,
        }}
      />
      <Text
        style={{
          color: color.text,
          fontSize: typography.FONT_SIZE_14,
          fontFamily: typography.regular,
          padding: SIZES.SCALE_6,
        }}>
        Daily
      </Text>
    </View>
  );
};
