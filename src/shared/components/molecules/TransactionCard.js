import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import typography from '../../theme/typography';
import {applyOpacity} from '../../theme/palette';
import SIZES from '../../theme/sizes';
import {formatTime} from '../../utils/dateTime';

export default function TransactionCard({
  color,
  title,
  amount,
  description,
  time,
  iconPath,
  iconColor,
  isIncome,
}) {
  return (
    <View
      style={{
        borderRadius: 12,
        backgroundColor: color.border,
        padding: SIZES.SCALE_10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SIZES.SCALE_4,
      }}>
      <View
        style={{
          padding: SIZES.SCALE_10,
          backgroundColor: applyOpacity(iconColor, 0.2),
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={iconPath}
          style={{height: SIZES.SCALE_24, aspectRatio: 1}}
          resizeMode="contain"
          tintColor={iconColor}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: typography.FONT_SIZE_16,
              color: color.text,
              fontFamily: typography.bold,
            }}>
            {title}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: typography.FONT_SIZE_16,
                color: isIncome ? color.income : color.expense,
                fontFamily: typography.bold,
              }}>
              {isIncome ? '+' : '-'} {amount}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: typography.FONT_SIZE_14,
              color: color.placeholder,
              fontFamily: typography.semiBold,
              width: '80%',
            }}>
            {description}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: typography.FONT_SIZE_14,
                color: color.placeholder,
                fontFamily: typography.medium,
              }}>
              {formatTime(time)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const CategoryCard = ({
  color,
  title,
  iconPath,
  iconColor,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 8,
        backgroundColor: color.border,
        padding: SIZES.SCALE_6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SIZES.SCALE_6,
      }}>
      <View
        style={{
          padding: SIZES.SCALE_6,
          backgroundColor: applyOpacity(iconColor, 0.2),
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={iconPath}
          style={{height: SIZES.SCALE_12, aspectRatio: 1}}
          resizeMode="contain"
          tintColor={iconColor}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: typography.FONT_SIZE_14,
              color: color.text,
              fontFamily: typography.bold,
            }}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
