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

const MovieDetail = ({navigation, route}) => {
  //variables
  //states
  const [data] = useState(route?.params?.data);
  console.log('data', data);
  //UI
  return (
    <View style={styles.container}>
      <MyHeader Title="MOVIE DETAIL" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <View style={styles.movieContainer}>
            <View style={styles.row}>
              <MyText
                text={'id'}
                textColor={Colors.DARK_GREY}
                fontSize={18}
                fontFamily="bold"
              />
              <MyText
                text={data.id}
                textColor={Colors.THEME_GOLD}
                fontSize={18}
                fontFamily="bold"
              />
            </View>
            <View style={styles.row}>
              <MyText
                text={'movie_title'}
                textColor={Colors.DARK_GREY}
                fontSize={18}
                fontFamily="bold"
              />
              <MyText
                text={data.movie_title}
                textColor={Colors.THEME_GOLD}
                fontSize={18}
                fontFamily="bold"
              />
            </View>
            <View style={styles.row}>
              <MyText
                text={'release_date'}
                textColor={Colors.DARK_GREY}
                fontSize={18}
                fontFamily="bold"
              />
              <MyText
                text={data.release_date}
                textColor={Colors.THEME_GOLD}
                fontSize={18}
                fontFamily="bold"
              />
            </View>
            <View style={styles.row}>
              <MyText
                text={'brief'}
                textColor={Colors.DARK_GREY}
                fontSize={18}
                fontFamily="bold"
              />
              <MyText
                text={data.brief}
                textColor={Colors.THEME_GOLD}
                fontSize={18}
                fontFamily="bold"
              />
            </View>

            <View style={styles.row}>
              <MyText
                text={'genre'}
                textColor={Colors.DARK_GREY}
                fontSize={18}
                fontFamily="bold"
              />
              <MyText
                text={data.genre}
                textColor={Colors.THEME_GOLD}
                fontSize={18}
                fontFamily="bold"
              />
            </View>
            <View style={styles.row}>
              <MyText
                text={'runtime'}
                textColor={Colors.DARK_GREY}
                fontSize={18}
                fontFamily="bold"
              />
              <MyText
                text={data.runtime}
                textColor={Colors.THEME_GOLD}
                fontSize={18}
                fontFamily="bold"
              />
            </View>
            <View style={styles.row}>
              <MyText
                text={'movie_poster'}
                textColor={Colors.DARK_GREY}
                fontSize={18}
                fontFamily="bold"
              />
              <Image
                source={{uri: data.movie_poster}}
                style={styles.movieImg}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default MovieDetail;
