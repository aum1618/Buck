import React, {useEffect, useRef, useState} from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import {
  Animated,
  Easing,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Switch} from 'react-native-paper';
import SIZES, {deviceWidth} from '../../../shared/theme/sizes';
import typography from '../../../shared/theme/typography';
import {MoreVertical, ChevronLeft, ChevronRight} from 'lucide-react-native';
import {applyOpacity} from '../../../shared/theme/palette';
import {iconPaths} from '../../../shared/constants/paths';
import {
  LayoutGrid,
  ReceiptText,
  Import,
  LogOut,
  Languages,
  Moon,
  ChevronDown,
  Handshake,
  SquarePen,
  Plus,
} from 'lucide-react-native';
import {PieChart} from 'react-native-gifted-charts';

export default function Presenter({color, text}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollable, setScrollable] = useState(false);
  const flatListRef = useRef(null);
  const dataLength = 5;
  const [animation] = useState(new Animated.Value(0));
  const data = [
    {
      value: 80,
      color: color.secondary,
    },
    {
      value: 20,
      color: color.accent,
    },
  ];

  const interpolatedWidth = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '80%'], // Adjust the final width as needed
  });

  useEffect(() => {
    // Define the animation configuration
    const animationConfig = {
      toValue: 1,
      duration: 600, // Adjust the duration as needed
      useNativeDriver: false, // Set to true if possible for better performance
      easing: Easing.linear,
    };

    // Create the width animation
    const widthAnimation = Animated.timing(animation, animationConfig);

    // Start the animation
    widthAnimation.start();
  }, []);

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, margin: SIZES.SCALE_10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: SIZES.SCALE_10,
          }}>
          <Text
            style={{
              color: color.text,
              fontFamily: typography.bold,
              fontSize: typography.FONT_SIZE_18,
            }}>
            Budget History
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
            <ChevronLeft
              color={currentIndex !== 0 ? color.text : color.background}
              size={typography.FONT_SIZE_24}
            />
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
            <ChevronRight
              color={
                currentIndex !== dataLength - 1 ? color.text : color.background
              }
              size={typography.FONT_SIZE_24}
            />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            ref={flatListRef}
            data={new Array(dataLength)}
            scrollEnabled={scrollable}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    padding: SIZES.SCALE_20,
                    borderRadius: 14,
                    margin: SIZES.SCALE_10,
                    backgroundColor: color.border,
                    minHeight: SIZES.SCALE_200,
                    width: deviceWidth - SIZES.SCALE_44,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {index % 2 !== 0 ? (
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
                    ) : (
                      <PieChart
                        donut={true}
                        innerRadius={SIZES.SCALE_40}
                        radius={SIZES.SCALE_60}
                        data={data}
                        innerCircleColor={color.border}
                        centerLabelComponent={() => {
                          return (
                            <Text
                              style={{
                                color: color.text,
                                fontFamily: typography.regular,
                                fontSize: typography.FONT_SIZE_14,
                              }}>
                              20% Left
                            </Text>
                          );
                        }}
                      />
                    )}
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            margin: SIZES.SCALE_10,
            marginTop: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: color.text,
              fontFamily: typography.bold,
              fontSize: typography.FONT_SIZE_18,
            }}>
            Active Budget Plan
          </Text>
          <TouchableOpacity>
            <SquarePen color={color.text} size={typography.FONT_SIZE_20} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderRadius: 12,
            backgroundColor: color.border,
            padding: SIZES.SCALE_10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: SIZES.SCALE_4,
            marginHorizontal: SIZES.SCALE_10,
          }}>
          <View
            style={{
              padding: SIZES.SCALE_10,
              backgroundColor: applyOpacity(color.accent, 0.2),
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={iconPaths.moneyBag}
              style={{height: SIZES.SCALE_24, aspectRatio: 1}}
              resizeMode="contain"
              tintColor={color.accent}
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
                Car Budget
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: typography.FONT_SIZE_16,
                    color: color.income,
                    fontFamily: typography.bold,
                  }}>
                  5000
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: SIZES.SCALE_10,
              }}>
              <View
                style={{
                  height: SIZES.SCALE_4,
                  borderRadius: 999,
                  flex: 1,
                  backgroundColor: color.outline,
                  overflow: 'hidden',
                }}>
                <Animated.View
                  style={{
                    height: '100%',
                    width: interpolatedWidth,
                    backgroundColor: color.secondary,
                    borderRadius: 999,
                  }}
                />
              </View>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: typography.FONT_SIZE_14,
                    color: color.placeholder,
                    fontFamily: typography.medium,
                  }}>
                  20% left
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            margin: SIZES.SCALE_10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: color.text,
              fontFamily: typography.bold,
              fontSize: typography.FONT_SIZE_18,
            }}>
            Your Budget Plans
          </Text>

          <TouchableOpacity>
            <Plus color={color.text} size={typography.FONT_SIZE_20} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderRadius: 12,
            backgroundColor: color.border,
            padding: SIZES.SCALE_10,
            gap: SIZES.SCALE_4,
            marginHorizontal: SIZES.SCALE_10,
          }}>
          <Option
            color={color}
            title={text.categories}
            Icon={() => (
              <LayoutGrid size={SIZES.SCALE_18} color={color.secondary} />
            )}
            iconColor={color.secondary}
          />
          <View
            style={{
              height: 1,
              borderRadius: 999,
              backgroundColor: applyOpacity(color.placeholder, 0.2),
              margin: SIZES.SCALE_4,
            }}
          />
          <Option
            color={color}
            title={text.import_data}
            Icon={() => (
              <Import size={SIZES.SCALE_18} color={color.secondary} />
            )}
            iconColor={color.secondary}
          />
          <View
            style={{
              height: 1,
              borderRadius: 999,
              backgroundColor: applyOpacity(color.placeholder, 0.2),
              margin: SIZES.SCALE_4,
            }}
          />
          <Option
            color={color}
            title={text.language}
            Icon={() => (
              <Languages size={SIZES.SCALE_18} color={color.secondary} />
            )}
            iconColor={color.secondary}
            isLanguage={true}
          />
          <View
            style={{
              height: 1,
              borderRadius: 999,
              backgroundColor: applyOpacity(color.placeholder, 0.2),
              margin: SIZES.SCALE_4,
            }}
          />
          <Option
            color={color}
            title={text.dark_mode}
            Icon={() => <Moon size={SIZES.SCALE_18} color={color.secondary} />}
            iconColor={color.secondary}
            isTheme={true}
          />
        </View>
      </ScrollView>
    </Wrapper>
  );
}

export const Option = ({title, Icon, color, iconColor}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = async () => {
    setIsSwitchOn(!isSwitchOn);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SIZES.SCALE_10,
      }}>
      <View
        style={{
          padding: SIZES.SCALE_10,
          backgroundColor: applyOpacity(iconColor, 0.2),
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon />
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

          <Switch
            value={isSwitchOn}
            color={iconColor}
            onValueChange={onToggleSwitch}
          />
        </View>
      </View>
    </View>
  );
};

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
