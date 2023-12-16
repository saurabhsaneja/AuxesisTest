//import : react components
import React from 'react';
import {View, TouchableOpacity, Image, Keyboard} from 'react-native';
//import : custom components
import MyText from 'components/MyText/MyText';
//import : global
import {Colors, Images, ScreenNames, Service} from 'global/Index';
//import : styles
import {styles} from './MyHeaderStyle';
//redux
const MyHeader = ({Title}) => {
  //UI
  return (
    <View
      style={{
        ...styles.container,
      }}>
      {/* section first drawer and back icon  */}
      <TouchableOpacity>
        {/* <Image
          resizeMode="contain"
          source={require('assets/images/drawer-icon.png')}
        /> */}
      </TouchableOpacity>
      {/* title section  */}
      <MyText
        text={Title}
        fontFamily="medium"
        fontSize={14}
        textColor={Colors.DARK_GREY}
      />
      {/* message icon  */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              position: 'absolute',
              top: -10,
              right: -5,
              height: 16,
              width: 16,
              borderRadius: 16 / 2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.THEME_VIOLET,
              borderRadius: 100,
              zIndex: 10,
            }}>
            <MyText text={1} fontSize={11} textColor="white" />
          </View>
          {/* <Image
            resizeMode="contain"
            source={require('assets/images/message-icon.png')}
            style={{zIndex: 1}}
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyHeader;
