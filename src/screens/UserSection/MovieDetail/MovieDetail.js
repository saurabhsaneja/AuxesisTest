//react components
import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
//third parties
//custom components
import MyHeader from 'components/MyHeader/MyHeader';
import MyText from 'components/MyText/MyText';

//global
import {Colors, Constant, Images, ScreenNames, Service} from 'global/Index';
//styles
import {styles} from './MovieDetailStyle';

const MovieDetail = ({navigation}) => {
  //variables
  //states
  //UI
  return (
    <View style={styles.container}>
      <MyHeader Title="MOVIE DETAIL" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyText
          text="Today's Games"
          fontSize={16}
          fontFamily="bold"
          textColor={Colors.THEME_BLACK}
        />
      </ScrollView>
    </View>
  );
};
export default MovieDetail;
