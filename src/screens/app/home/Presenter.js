/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../../shared/components/molecules/Header';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import typography from '../../../shared/theme/typography';
import SIZES from '../../../shared/theme/sizes';
import {MoveUp, MoveDown} from 'lucide-react-native';
import {Circle} from '../../../shared/components/atoms/Circle';
import AnimatedNumber from '../../../shared/components/atoms/AnimatedNumber';
import {iconPaths} from '../../../shared/constants/paths';
import TransactionCard from '../../../shared/components/molecules/TransactionCard';
import Transactions from '../../../shared/data/dummy/transactions.json';
import {FloatingButton} from '../../../shared/components/atoms/Buttons';
import Spacer from '../../../shared/components/atoms/Spacer';
import TransactionModal from '../../../shared/components/organisms/TransactionModal';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';
import {screens} from '../../../shared/constants/screens';
import CategoryModal from '../../../shared/components/molecules/CategoryModal';

export default function Presenter({color, text, navigation}) {
  const styles = getStyles(color);
  const [animateToNumber, setAnimateToNumber] = React.useState(0);
  const {dismiss} = useBottomSheetModal();
  const bottomSheetRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handlePresentModalPress = () => bottomSheetRef.current?.present();

  useEffect(() => {
    setTimeout(() => {
      setAnimateToNumber(animateToNumber + 2500);
    }, 100);
  }, []);

  return (
    <Wrapper color={color}>
      <CategoryModal
        isVisible={visible}
        toggleModal={toggleModal}
        color={color}
        text={text}
      />
      <TransactionModal color={color} text={text} ref={bottomSheetRef} />
      <FloatingButton onPress={toggleModal} />

      <Header color={color} text={text} />
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
            <Text style={styles.heading}>{text.available_balance}</Text>
            <View style={styles.headingContainer}>
              <Text style={styles.amount}>$ </Text>
              <AnimatedNumber
                animateToNumber={animateToNumber}
                includeComma={true}
                fontStyle={styles.amount}
              />
            </View>
            <View style={[styles.HorizontalItems, {marginTop: SIZES.SCALE_10}]}>
              <View style={styles.HorizontalItems}>
                <View>
                  <MoveUp color={color.income} />
                </View>
                <View>
                  <Text style={styles.subHeading}>{text.income}</Text>
                  <Text style={styles.subAmount}>$ 2,500</Text>
                </View>
              </View>
              <View style={styles.HorizontalItems}>
                <View>
                  <MoveDown color={color.expense} />
                </View>
                <View>
                  <Text style={styles.subHeading}>{text.expenses}</Text>
                  <Text style={styles.subAmount}>$ 1,247</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.HorizontalItems, {margin: SIZES.SCALE_10}]}>
          <Text style={styles.transactionHeading}>{text.transactions}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.transactions)}>
            <Text
              style={{
                fontSize: typography.FONT_SIZE_12,
                color: color.placeholder,
                fontFamily: typography.medium,
              }}>
              {text.see_all}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.FlatList}
            ItemSeparatorComponent={
              <Spacer isHorizontal={false} size={SIZES.SCALE_10} />
            }
            data={Transactions}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <TransactionCard
                  iconColor={color[item.color]}
                  color={color}
                  title={item.title}
                  amount={item.amount}
                  isIncome={item.isIncome}
                  iconPath={iconPaths[item.icon]}
                  description={item.description}
                  time={item.time}
                />
              );
            }}
          />
        </View>
      </View>
    </Wrapper>
  );
}

const getStyles = color =>
  StyleSheet.create({
    container: {
      paddingHorizontal: SIZES.SCALE_20,
      flex: 1,
    },
    card: {
      borderRadius: 16,
      elevation: 10,
    },
    contentContainer: {
      overflow: 'hidden',
      justifyContent: 'center',
      padding: SIZES.SCALE_20,
      borderRadius: 16,
      backgroundColor: color.secondary,
    },
    flex: {flex: 1},
    subHeading: {
      fontSize: typography.FONT_SIZE_14,
      color: color.accent,
      fontFamily: typography.regular,
    },
    subAmount: {
      fontSize: typography.FONT_SIZE_16,
      color: color.white,
      fontFamily: typography.bold,
    },
    FlatList: {paddingBottom: SIZES.SCALE_70},
    HorizontalItems: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    transactionHeading: {
      fontSize: typography.FONT_SIZE_18,
      color: color.text,
      fontFamily: typography.bold,
    },
    amount: {
      fontSize: typography.FONT_SIZE_26,
      color: color.white,
      fontFamily: typography.bold,
    },
    headingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    heading: {
      fontSize: typography.FONT_SIZE_16,
      color: color.accent,
      fontFamily: typography.regular,
    },
  });
