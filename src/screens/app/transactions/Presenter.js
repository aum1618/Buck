/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  SectionList,
  TextInput,
} from 'react-native';
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
import {ChevronLeft, Search} from 'lucide-react-native';

const DATA = [
  {
    title: 'Today',
    data: Transactions,
  },
  {
    title: 'Yesterday',
    data: Transactions,
  },
  {
    title: '3rd September',
    data: Transactions,
  },
  {
    title: '2nd January',
    data: Transactions,
  },
];

export default function Presenter({color, text}) {
  const styles = getStyles(color);
  const [animateToNumber, setAnimateToNumber] = React.useState(0);
  const {dismiss} = useBottomSheetModal();
  const bottomSheetRef = useRef(null);

  const handlePresentModalPress = () => bottomSheetRef.current?.present();

  useEffect(() => {
    setTimeout(() => {
      setAnimateToNumber(animateToNumber + 2500);
    }, 100);
  }, []);

  return (
    <Wrapper color={color}>
      <TransactionModal color={color} text={text} ref={bottomSheetRef} />
      <FloatingButton onPress={handlePresentModalPress} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: SIZES.SCALE_10,
        }}>
        <Text
          style={{
            fontSize: typography.FONT_SIZE_20,
            color: color.text,
            fontFamily: typography.bold,
          }}>
          Transactions
        </Text>
        <TouchableOpacity style={{position: 'absolute', left: SIZES.SCALE_20}}>
          <ChevronLeft color={color.text} size={typography.FONT_SIZE_24} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.flex}>
          <SectionList
            ListHeaderComponent={() => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: color.border,
                    paddingHorizontal: SIZES.SCALE_10,
                    borderRadius: 100,
                    alignItems: 'center',
                    gap: SIZES.SCALE_6,
                  }}>
                  <Search color={color.text} size={typography.FONT_SIZE_20} />
                  <TextInput
                    cursorColor={color.text}
                    placeholderTextColor={color.placeholder}
                    style={{
                      fontFamily: typography.regular,
                      color: color.text,
                      fontSize: typography.FONT_SIZE_16,
                      flex: 1,
                    }}
                  />
                </View>
              );
            }}
            renderSectionHeader={({section: {title}}) => {
              return (
                <View
                  style={[styles.HorizontalItems, {margin: SIZES.SCALE_10}]}>
                  <Text style={styles.transactionHeading}>{title}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.FlatList}
            ItemSeparatorComponent={() => (
              <Spacer isHorizontal={false} size={SIZES.SCALE_10} />
            )}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
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
