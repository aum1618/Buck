import React, {useRef, useState} from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SIZES, {deviceWidth} from '../../../shared/theme/sizes';
import typography from '../../../shared/theme/typography';
import {ChevronLeft, ChevronRight} from 'lucide-react-native';
import {applyOpacity} from '../../../shared/theme/palette';
import {iconPaths} from '../../../shared/constants/paths';
import {Import, Languages, Moon} from 'lucide-react-native';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';

export default function Presenter({color, text}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollable, setScrollable] = useState(false);
  const flatListRef = useRef(null);
  const dataLength = 5;
  const data = [
    {
      value: 10,
      color: color.expense,
    },
    {
      value: 20,
      color: color.info,
    },
    {
      value: 30,
      color: color.accent,
    },
    {
      value: 40,
      color: color.secondary,
    },
    {
      value: 50,
      color: color.income,
    },
  ];
  const barData = [
    {
      value: 10,
      label: 'Jan',
      spacing: SIZES.SCALE_2,
      frontColor: color.income,
    },
    {value: 40, frontColor: color.expense, spacing: SIZES.SCALE_14},
    {
      value: 50,
      label: 'Feb',
      spacing: SIZES.SCALE_2,
      frontColor: color.income,
    },
    {value: 40, frontColor: color.expense, spacing: SIZES.SCALE_14},
    {
      value: 75,
      label: 'Mar',
      spacing: SIZES.SCALE_2,
      frontColor: color.income,
    },
    {value: 40, frontColor: color.expense, spacing: SIZES.SCALE_14},
    {
      value: 30,
      label: 'Apr',
      spacing: SIZES.SCALE_2,
      frontColor: color.income,
    },
    {value: 40, frontColor: color.expense, spacing: SIZES.SCALE_14},
    {
      value: 60,
      label: 'May',
      spacing: SIZES.SCALE_2,
      frontColor: color.income,
    },
    {value: 40, frontColor: color.expense, spacing: SIZES.SCALE_14},
    {
      value: 65,
      label: 'Jun',
      spacing: SIZES.SCALE_2,
      frontColor: color.income,
    },
    {value: 40, frontColor: color.expense, spacing: SIZES.SCALE_14},
    {
      value: 40,
      label: 'Jul',
      spacing: SIZES.SCALE_2,
      frontColor: color.income,
    },
    {value: 40, frontColor: color.expense, spacing: SIZES.SCALE_14},
    {
      value: 50,
      label: 'Aug',
      spacing: SIZES.SCALE_2,
      frontColor: color.income,
    },
    {value: 40, frontColor: color.expense, spacing: SIZES.SCALE_14},
    {
      value: 75,
      label: 'Sep',
      spacing: SIZES.SCALE_2,
      frontColor: color.income,
    },
    {value: 40, frontColor: color.expense, spacing: SIZES.SCALE_14},
    {
      value: 30,
      label: 'Oct',
      spacing: SIZES.SCALE_2,
      frontColor: color.income,
    },
    {value: 40, frontColor: color.expense, spacing: SIZES.SCALE_14},
    {
      value: 60,
      label: 'Nov',
      spacing: SIZES.SCALE_2,
      frontColor: color.income,
    },
    {value: 40, frontColor: color.expense, spacing: SIZES.SCALE_14},
    {
      value: 65,
      label: 'Dec',
      spacing: SIZES.SCALE_2,
      frontColor: color.income,
    },
    {value: 40, frontColor: color.expense},
  ];

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
            Your Monthly Stats
          </Text>
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
            title={'Savings'}
            Icon={() => (
              <Import size={SIZES.SCALE_18} color={color.secondary} />
            )}
            iconColor={color.secondary}
            text={'+ 13%'}
            textColor={color.income}
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
            title={'Income Sources'}
            Icon={() => (
              <Languages size={SIZES.SCALE_18} color={color.secondary} />
            )}
            iconColor={color.secondary}
            isLanguage={true}
            text={'+ 32'}
            textColor={color.income}
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
            title={'Expenses Count'}
            Icon={() => <Moon size={SIZES.SCALE_18} color={color.secondary} />}
            iconColor={color.secondary}
            text={'+ 13'}
            textColor={color.expense}
          />
        </View>
        <View
          style={{
            borderRadius: 12,
            backgroundColor: color.border,
            padding: SIZES.SCALE_10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: SIZES.SCALE_4,
            margin: SIZES.SCALE_10,
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
                Biggest Expense This month
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: SIZES.SCALE_10,
              }}>
              <Text
                style={{
                  color: color.text,
                  fontSize: typography.FONT_SIZE_14,
                  fontFamily: typography.regular,
                }}>
                Car Payments
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: typography.FONT_SIZE_16,
                    color: color.expense,
                    fontFamily: typography.bold,
                  }}>
                  5000
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
              marginVertical: SIZES.SCALE_10,
            }}>
            Expenses Overview
          </Text>
        </View>
        <View
          style={{
            padding: SIZES.SCALE_20,
            borderRadius: 14,
            margin: SIZES.SCALE_10,
            backgroundColor: color.border,
            minHeight: SIZES.SCALE_180,
            width: deviceWidth - SIZES.SCALE_44,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <PieChart radius={SIZES.SCALE_60} data={data} />
            <View style={{flex: 0.5}} />
            <View
              style={{
                padding: SIZES.SCALE_6,
                gap: SIZES.SCALE_4,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: SIZES.SCALE_2,
                }}>
                <View
                  style={{
                    height: SIZES.SCALE_2,
                    width: SIZES.SCALE_2,
                    borderRadius: 999,
                    backgroundColor: color.expense,
                  }}
                />
                <Text
                  style={{
                    color: color.expense,
                    fontSize: typography.FONT_SIZE_12,
                    fontFamily: typography.regular,
                  }}>
                  Shopping
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: SIZES.SCALE_2,
                }}>
                <View
                  style={{
                    height: SIZES.SCALE_2,
                    width: SIZES.SCALE_2,
                    borderRadius: 999,
                    backgroundColor: color.info,
                  }}
                />
                <Text
                  style={{
                    color: color.info,
                    fontSize: typography.FONT_SIZE_12,
                    fontFamily: typography.regular,
                  }}>
                  Utility Bills
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: SIZES.SCALE_2,
                }}>
                <View
                  style={{
                    height: SIZES.SCALE_2,
                    width: SIZES.SCALE_2,
                    borderRadius: 999,
                    backgroundColor: color.accent,
                  }}
                />
                <Text
                  style={{
                    color: color.accent,
                    fontSize: typography.FONT_SIZE_12,
                    fontFamily: typography.regular,
                  }}>
                  supscriptions
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: SIZES.SCALE_2,
                }}>
                <View
                  style={{
                    height: SIZES.SCALE_2,
                    width: SIZES.SCALE_2,
                    borderRadius: 999,
                    backgroundColor: color.secondary,
                  }}
                />
                <Text
                  style={{
                    color: color.secondary,
                    fontSize: typography.FONT_SIZE_12,
                    fontFamily: typography.regular,
                  }}>
                  Tuition fees
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: SIZES.SCALE_2,
                }}>
                <View
                  style={{
                    height: SIZES.SCALE_2,
                    width: SIZES.SCALE_2,
                    borderRadius: 999,
                    backgroundColor: color.income,
                  }}
                />
                <Text
                  style={{
                    color: color.income,
                    fontSize: typography.FONT_SIZE_12,
                    fontFamily: typography.regular,
                  }}>
                  carnival
                </Text>
              </View>
            </View>
          </View>
        </View>
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
              marginVertical: SIZES.SCALE_10,
            }}>
            Expense to Income Comparison
          </Text>
        </View>

        <View
          style={{
            paddingVertical: SIZES.SCALE_20,
            borderRadius: 14,
            margin: SIZES.SCALE_10,
            backgroundColor: color.border,
            minHeight: SIZES.SCALE_180,
            width: deviceWidth - SIZES.SCALE_44,
            overflow: 'hidden',
            paddingRight: SIZES.SCALE_6,
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <BarChart
              data={barData}
              barWidth={SIZES.SCALE_6}
              spacing={SIZES.SCALE_18}
              initialSpacing={0}
              xAxisLabelTextStyle={{
                color: color.placeholder,
                fontFamily: typography.regular,
                fontSize: typography.FONT_SIZE_12,
              }}
              roundedTop
              roundedBottom
              hideRules
              labelWidth={SIZES.SCALE_16}
              rulesColor={color.placeholder}
              xAxisThickness={0}
              yAxisThickness={0}
              yAxisTextStyle={{
                color: color.placeholder,
                fontFamily: typography.regular,
                fontSize: typography.FONT_SIZE_12,
              }}
              noOfSections={3}
              maxValue={75}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: SIZES.SCALE_10,
          }}>
          <Text
            style={{
              color: color.text,
              fontFamily: typography.bold,
              fontSize: typography.FONT_SIZE_18,
            }}>
            Savings Trend
          </Text>
        </View>
        <View
          style={{
            paddingVertical: SIZES.SCALE_20,
            borderRadius: 14,
            margin: SIZES.SCALE_10,
            backgroundColor: color.border,
            minHeight: SIZES.SCALE_180,
            width: deviceWidth - SIZES.SCALE_44,
            overflow: 'hidden',
            paddingRight: SIZES.SCALE_6,
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <LineChart
              data={barData}
              spacing={SIZES.SCALE_18}
              initialSpacing={0}
              xAxisLabelTextStyle={{
                color: color.placeholder,
                fontFamily: typography.regular,
                fontSize: typography.FONT_SIZE_12,
              }}
              color={color.secondary}
              hideDataPoints={true}
              curved={true}
              areaChart={true}
              startFillColor={color.secondary}
              endFillColor={color.background}
              startOpacity={0.4}
              endOpacity={0.0}
              hideRules
              labelWidth={SIZES.SCALE_16}
              xAxisThickness={0}
              yAxisThickness={0}
              yAxisTextStyle={{
                color: color.placeholder,
                fontFamily: typography.regular,
                fontSize: typography.FONT_SIZE_12,
              }}
              noOfSections={5}
              maxValue={75}
            />
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  );
}

export const Option = ({title, Icon, color, iconColor, text, textColor}) => {
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
            marginRight: SIZES.SCALE_10,
          }}>
          <Text
            style={{
              fontSize: typography.FONT_SIZE_16,
              color: color.text,
              fontFamily: typography.bold,
            }}>
            {title}
          </Text>

          <Text
            style={{
              fontSize: typography.FONT_SIZE_16,
              color: textColor,
              fontFamily: typography.medium,
            }}>
            {text}
          </Text>
        </View>
      </View>
    </View>
  );
};
