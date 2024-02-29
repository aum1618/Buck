import {
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  Text,
  FlatList,
} from 'react-native';
import React, {useState, useRef, useMemo, forwardRef, useCallback} from 'react';
import {BottomSheetModal, BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {Calendar, Clock} from 'lucide-react-native';
import typography from '../../theme/typography';
import SIZES from '../../theme/sizes';
import DatePicker from 'react-native-date-picker';
import {CategoryCard} from '../molecules/TransactionCard';
import Transactions from '../../../shared/data/dummy/transactions.json';
import {iconPaths} from '../../constants/paths';
import Spacer from '../atoms/Spacer';
import BouncyCheckbox from '../atoms/checkBox/BouncyCheckbox';

const TransactionModal = forwardRef(
  ({isVisible, toggleModal, color, text}, ref) => {
    const scrollRef = useRef(null);
    const snapPoints = useMemo(() => ['45%'], []);
    const [scrollEnabled, setScrollEnabled] = useState(false);
    const [isIncome, setIsIncome] = useState(true);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    const handleSheetChanges = useCallback(index => {
      console.log('handleSheetChanges', index);
    }, []);

    const handleFirstScreenPress = () => {
      setScrollEnabled(true);
      scrollRef.current.scrollToEnd({animated: true});
      setScrollEnabled(false);
      ref.current.expand();
    };

    // renders
    const renderBackdrop = useCallback(
      props => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={0.8}
        />
      ),
      [],
    );

    return (
      <BottomSheetModal
        enableContentPanningGesture={false}
        backdropComponent={renderBackdrop}
        style={{
          borderTopRightRadius: 20,
          overflow: 'hidden',
          borderTopLeftRadius: 20,
          backgroundColor: color.background,
        }}
        //   enableDynamicSizing={true}
        onChange={handleSheetChanges}
        handleComponent={() => <View />}
        ref={ref}
        index={0}
        snapPoints={snapPoints}>
        <View style={{flex: 1, backgroundColor: color.background}}>
          <DatePicker
            modal
            open={open}
            date={date}
            title={'Transaction time'}
            fadeToColor={color.background}
            mode="datetime"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <ScrollView
            ref={scrollRef}
            horizontal={true}
            scrollEnabled={scrollEnabled}
            contentContainerStyle={{height: '100%', width: '200%'}}
            style={{height: '100%', width: '100%'}}>
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: SIZES.SCALE_10,
                  // gap: SIZES.SCALE_2,
                }}>
                <TouchableOpacity
                  onPress={() => setIsIncome(true)}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: SIZES.SCALE_8,
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    backgroundColor: isIncome ? color.income : color.shadow,
                  }}>
                  <Text
                    style={{
                      fontSize: typography.FONT_SIZE_14,
                      color: isIncome ? color.white : color.placeholder,
                      fontFamily: typography.regular,
                    }}>
                    Income
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setIsIncome(false)}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: SIZES.SCALE_8,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    backgroundColor: !isIncome ? color.expense : color.shadow,
                  }}>
                  <Text
                    style={{
                      fontSize: typography.FONT_SIZE_14,
                      color: !isIncome ? color.white : color.placeholder,
                      fontFamily: typography.regular,
                    }}>
                    Expense
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => setOpen(true)}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: SIZES.SCALE_12,
                  marginBottom: SIZES.SCALE_10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: SIZES.SCALE_4,
                  }}>
                  <Calendar color={color.text} size={18} />
                  <Text
                    style={{
                      fontSize: typography.FONT_SIZE_14,
                      color: color.text,
                      fontFamily: typography.regular,
                    }}>
                    18 September,2024
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: SIZES.SCALE_4,
                  }}>
                  <Clock color={color.text} size={18} />
                  <Text
                    style={{
                      fontSize: typography.FONT_SIZE_14,
                      color: color.text,
                      fontFamily: typography.regular,
                    }}>
                    18:34
                  </Text>
                </View>
              </TouchableOpacity>
              <TextInput
                keyboardType="numeric"
                placeholder="$ 00.00"
                placeholderTextColor={color.placeholder}
                textAlign="center"
                cursorColor={color.secondary}
                style={{
                  fontFamily: typography.bold,
                  color: color.secondary,
                  fontSize: typography.FONT_SIZE_26,
                  borderBottomColor: color.placeholder,
                  borderBottomWidth: 1,
                  marginHorizontal: SIZES.SCALE_20,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginHorizontal: SIZES.SCALE_20,
                  gap: SIZES.SCALE_6,
                }}>
                <TextInput
                  placeholder="Note (Optional)"
                  placeholderTextColor={color.placeholder}
                  textAlign="center"
                  cursorColor={color.secondary}
                  style={{
                    fontFamily: typography.regular,
                    color: color.text,
                    flex: 1,
                    fontSize: typography.FONT_SIZE_14,
                    borderBottomColor: color.placeholder,
                    borderBottomWidth: 1,
                  }}
                />
                <Text
                  style={{
                    fontFamily: typography.regular,
                    color: color.text,
                    fontSize: typography.FONT_SIZE_14,
                  }}>
                  ✏️ 12/80
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <FlatList
                  horizontal={true}
                  scrollEnabled={!scrollEnabled}
                  showsHorizontalScrollIndicator={false}
                  style={{margin: SIZES.SCALE_10}}
                  ItemSeparatorComponent={
                    <Spacer isHorizontal={true} size={SIZES.SCALE_6} />
                  }
                  keyExtractor={(_, i) => i.toString()}
                  data={Transactions}
                  renderItem={({item, index}) => {
                    return (
                      <CategoryCard
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
              <View style={{marginHorizontal: SIZES.SCALE_20}}>
                <BouncyCheckbox
                  fillColor={color.secondary}
                  size={SIZES.SCALE_18}
                  text="Recurring Transaction"
                  textStyle={{
                    fontFamily: typography.regular,
                    color: color.text,
                    fontSize: typography.FONT_SIZE_14,
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={handleFirstScreenPress}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                  backgroundColor: color.secondary,
                  padding: SIZES.SCALE_10,
                  margin: SIZES.SCALE_10,
                  marginTop: SIZES.SCALE_20,
                }}>
                <Text
                  style={{
                    fontFamily: typography.bold,
                    color: color.white,
                    fontSize: typography.FONT_SIZE_18,
                  }}>
                  SAVE TRANSACTION
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow',
                flex: 1,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setScrollEnabled(true);
                  scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
                  setScrollEnabled(false);
                  ref.current.collapse();
                }}
                style={{
                  padding: 20,
                  backgroundColor: 'blue',
                  margin: 20,
                  borderRadius: 20,
                  width: 200,
                }}></TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </BottomSheetModal>
    );
  },
);
export default TransactionModal;
