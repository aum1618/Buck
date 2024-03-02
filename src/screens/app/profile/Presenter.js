import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import typography from '../../../shared/theme/typography';
import SIZES from '../../../shared/theme/sizes';
import {iconPaths, imagePaths} from '../../../shared/constants/paths';
import {Switch} from 'react-native-paper';
import {
  LayoutGrid,
  ReceiptText,
  Import,
  LogOut,
  Languages,
  Moon,
  ChevronDown,
  Handshake,
} from 'lucide-react-native';
import {applyOpacity} from '../../../shared/theme/palette';
import {useDispatch} from 'react-redux';
import {setLanguage, toggleTheme} from '../../../redux/reducers/appConfig';
import config from '../../../shared/constants/config';

export default function Presenter({color, currentTheme, text}) {
  const dispatch = useDispatch();
  const size = SIZES.SCALE_24;
  return (
    <Wrapper color={color}>
      <View style={styles.container}>
        <View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              backgroundColor: color.secondary,
              borderWidth: 1,
              borderColor: color.white,
              borderRadius: 999,
              zIndex: 999,
              padding: SIZES.SCALE_4,
            }}>
            <Image
              tintColor={color.white}
              source={iconPaths.edit}
              style={{height: SIZES.SCALE_10, width: SIZES.SCALE_10}}
            />
          </View>
          <View
            style={[
              styles.overFlow,
              {width: size * 2, height: size * 2, borderRadius: size},
            ]}>
            <Image style={styles.image} source={imagePaths.profile} />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={[styles.time, {color: color.text}]}>
            Muhammad Umer Abbas
          </Text>
        </View>
      </View>
      <View
        style={{
          borderRadius: 12,
          backgroundColor: color.border,
          padding: SIZES.SCALE_10,
          gap: SIZES.SCALE_4,
          marginTop: SIZES.SCALE_20,
          marginHorizontal: SIZES.SCALE_20,
          marginBottom: SIZES.SCALE_10,
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
          Icon={() => <Import size={SIZES.SCALE_18} color={color.secondary} />}
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
          dispatch={dispatch}
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
          dispatch={dispatch}
          currentTheme={currentTheme}
        />
      </View>
      <View
        style={{
          borderRadius: 12,
          backgroundColor: color.border,
          padding: SIZES.SCALE_10,
          gap: SIZES.SCALE_4,
          margin: SIZES.SCALE_20,
          marginVertical: SIZES.SCALE_10,
        }}>
        <Option
          color={color}
          title={text.privacy_policy}
          Icon={() => <ReceiptText size={SIZES.SCALE_18} color={color.info} />}
          iconColor={color.info}
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
          title={text.terms_of_service}
          Icon={() => <Handshake size={SIZES.SCALE_18} color={color.info} />}
          iconColor={color.info}
        />
      </View>

      <View
        style={{
          borderRadius: 12,
          backgroundColor: color.border,
          padding: SIZES.SCALE_10,
          gap: SIZES.SCALE_4,
          margin: SIZES.SCALE_20,
          marginVertical: SIZES.SCALE_10,
        }}>
        <Option
          color={color}
          title={text.log_out}
          Icon={() => <LogOut size={SIZES.SCALE_18} color={color.error} />}
          iconColor={color.error}
        />
      </View>
    </Wrapper>
  );
}

export const Option = ({
  title,
  Icon,
  color,
  iconColor,
  isLanguage,
  isTheme,
  dispatch,
  currentTheme,
}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(
    currentTheme === config.themes.dark,
  );
  const onToggleSwitch = async () => {
    await dispatch(toggleTheme());
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
          {isLanguage && (
            <TouchableOpacity
              onPress={() => {
                dispatch(setLanguage(config.languages.en));
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: typography.FONT_SIZE_12,
                  color: color.text,
                  fontFamily: typography.regular,
                }}>
                English
              </Text>
              <ChevronDown size={SIZES.SCALE_14} color={color.placeholder} />
            </TouchableOpacity>
          )}
          {isTheme && (
            <Switch
              value={isSwitchOn}
              color={iconColor}
              onValueChange={onToggleSwitch}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: SIZES.SCALE_30,
    justifyContent: 'center',
    alignItems: 'center',
    gap: SIZES.SCALE_6,
    paddingBottom: SIZES.SCALE_10,
  },
  textContainer: {
    justifyContent: 'center',
    gap: SIZES.SCALE_10,
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
    textAlign: 'center',
  },
  welcome: {
    fontSize: typography.FONT_SIZE_12,
    fontFamily: typography.regular,
    textAlign: 'center',
  },
  overFlow: {overflow: 'hidden'},
  image: {
    width: '100%',
    height: '100%',
  },
});
