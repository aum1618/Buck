import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../../../shared/components/molecules/Header';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import typography from '../../../shared/theme/typography';
import SIZES from '../../../shared/theme/sizes';
import {MoveUp, MoveDown} from 'lucide-react-native';
import {Circle} from '../../../shared/components/atoms/Circle';

export default function Presenter({color}) {
  const styles = getStyles(color);

  return (
    <Wrapper color={color}>
      <Header color={color} />
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.contentContainer}>
            <Circle
              position={{left: -SIZES.SCALE_40, bottom: -SIZES.SCALE_50}}
              color={color.primary}
              size={180}
            />
            <Circle
              position={{right: SIZES.SCALE_40, bottom: -SIZES.SCALE_10}}
              color={color.primary}
              size={SIZES.SCALE_38}
            />
            <Circle
              position={{right: SIZES.SCALE_50, bottom: SIZES.SCALE_50}}
              color={color.primary}
              size={SIZES.SCALE_10}
            />

            <Circle
              position={{right: SIZES.SCALE_100, top: SIZES.SCALE_30}}
              color={color.accent}
              size={SIZES.SCALE_20}
            />
            <Circle
              position={{left: SIZES.SCALE_100, top: SIZES.SCALE_10}}
              color={color.accent}
              size={SIZES.SCALE_24}
            />
            <Circle
              position={{right: -SIZES.SCALE_10, top: -SIZES.SCALE_10}}
              color={color.accent}
              size={SIZES.SCALE_60}
            />
            <Text
              style={{
                fontSize: typography.FONT_SIZE_16,
                color: color.accent,
                fontFamily: typography.regular,
              }}>
              Available Balance
            </Text>

            <Text
              style={{
                fontSize: typography.FONT_SIZE_26,
                color: color.text2,
                fontFamily: typography.bold,
              }}>
              $ 2,500
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.SCALE_10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <MoveUp color={color.success} />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: typography.FONT_SIZE_14,
                      color: color.accent,
                      fontFamily: typography.regular,
                    }}>
                    Income
                  </Text>
                  <Text
                    style={{
                      fontSize: typography.FONT_SIZE_16,
                      color: color.text2,
                      fontFamily: typography.bold,
                    }}>
                    $ 2,500
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <MoveDown color={color.error} />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: typography.FONT_SIZE_14,
                      color: color.accent,
                      fontFamily: typography.regular,
                    }}>
                    Expenses
                  </Text>
                  <Text
                    style={{
                      fontSize: typography.FONT_SIZE_16,
                      color: color.text2,
                      fontFamily: typography.bold,
                    }}>
                    $ 1,247
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Wrapper>
  );
}

const getStyles = color =>
  StyleSheet.create({
    container: {
      padding: SIZES.SCALE_20,
      backgroundColor: color.background,
    },
    card: {
      borderRadius: 16,
      // height: 150,
      elevation: 10,
    },
    contentContainer: {
      overflow: 'hidden',
      justifyContent: 'center',
      padding: SIZES.SCALE_20,
      borderRadius: 16,
      backgroundColor: color.secondary,
    },
  });
