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
import Toast from 'react-native-toast-message';
//global
import {Colors, Constant, Images, ScreenNames, Service} from 'global/Index';
//styles
import {styles} from './HomeStyle';
import {useSelector} from 'react-redux';
import CustomLoader from '../../../components/CustomLoader/CustomLoader';
import MyButton from '../../../components/MyButton/MyButton';

const Home = ({navigation}) => {
  //variables
  const userToken = useSelector(state => state.user.userToken);
  //states
  const [showLoader, setShowLoader] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMoviesList();
  }, []);
  const getMoviesList = async () => {
    setShowLoader(true);
    try {
      const resp = await Service.getApiWithToken(
        userToken,
        // Service.MOVIE_NOW_PLAYING,
        Service.MOVIE_LIST,
      );
      console.log('getMoviesList resp', JSON.stringify(resp?.data));
      if (resp?.data?.success) {
        console.log('here');
        navigation.navigate(ScreenNames.HOME);
      } else {
        // Alert.alert('', `${resp.data.message}`);
        Toast.show({text1: resp.data.message});
      }
    } catch (error) {
      console.log('error in getMoviesList', error);
    }
    setShowLoader(false);
  };

  const renderMovie = ({item}) => {
    return (
      <TouchableOpacity style={styles.movieContainer}>
        <View style={styles.row}>
          <MyText
            text={'id'}
            textColor={Colors.DARK_GREY}
            fontSize={18}
            fontFamily="bold"
          />
          <MyText
            text={item.id}
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
            text={item.movie_title}
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
            text={item.release_date}
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
            text={item.brief}
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
            text={item.runtime}
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
            text={item.genre}
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
          <Image source={{uri: item.movie_poster}} style={styles.movieImg} />
        </View>
      </TouchableOpacity>
    );
  };
  const changePage = num => {
    setPage(num);
  };
  const Pagination = () => {
    const pages = [...Array(moviesList?.length / 2).keys()];
    return (
      <View style={styles.pagesView}>
        {pages?.map(el => (
          <TouchableOpacity
            onPress={() => {
              changePage(el + 1);
            }}
            style={{marginRight: 10}}>
            <MyText
              text={el + 1}
              textColor={page == el + 1 ? Colors.THEME_GOLD : Colors.DARK_GREY}
              fontSize={18}
              fontFamily="bold"
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  //UI
  return (
    <View style={styles.container}>
      <MyHeader Title="Home" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={moviesList?.filter(
            (mov, index) => index >= page * 2 - 2 && index < page * 2,
          )}
          keyExtractor={(_, index) => {
            index.toString();
          }}
          style={{alignSelf: 'center'}}
          renderItem={renderMovie}
        />
        <Pagination />
      </ScrollView>
      {showLoader ? <CustomLoader /> : null}
    </View>
  );
};
export default Home;

const img = `https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww`;

const moviesList = [
  {
    id: '1',
    movie_title: 'abc',
    release_date: '25-01-2020',
    brief: 'brief',
    movie_poster: img,
    genre: 'horror',
    runtime: '100 min',
  },
  {
    id: '2',
    movie_title: 'abc',
    release_date: '25-01-2020',
    brief: 'brief',
    movie_poster: img,
    genre: 'horror',
    runtime: '100 min',
  },
  {
    id: '3',
    movie_title: 'abc',
    release_date: '25-01-2020',
    brief: 'brief',
    movie_poster: img,
    genre: 'comedy',
    runtime: '100 min',
  },
  {
    id: '4',
    movie_title: 'mkj',
    release_date: '25-01-2020',
    brief: 'brief',
    movie_poster: img,
    genre: 'comedy',
    runtime: '100 min',
  },
  {
    id: '5',
    movie_title: 'mkj',
    release_date: '25-01-2020',
    brief: 'brief',
    movie_poster: img,
    genre: 'comedy',
    runtime: '100 min',
  },
  {
    id: '6',
    movie_title: 'mkj',
    release_date: '25-01-2020',
    brief: 'brief',
    movie_poster: img,
    genre: 'comedy',
    runtime: '100 min',
  },
];
