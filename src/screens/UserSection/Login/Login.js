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
import {styles} from './LoginStyle';
import MyButton from '../../../components/MyButton/MyButton';
import {useDispatch, useSelector} from 'react-redux';
import CustomLoader from '../../../components/CustomLoader/CustomLoader';
import {setUserToken} from '../../../reduxToolkit/reducer/user';

const Login = ({navigation}) => {
  //variables
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.user.userToken);
  //states
  const [showLoader, setShowLoader] = useState(false);
  const [token, setToken] = useState('');

  const getNewToken = async () => {
    setShowLoader(true);
    try {
      const resp = await Service.getApiWithToken(
        `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzA0NmQxMTQwZGZiMmNkYzY0NzdkMGViMzU3NmY3NSIsInN1YiI6IjY1N2Q0NWQ5MWRhN2E2MDc2ZDJhMzA4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DCAkF2UKpCAY5_zgl7fau2EFFLHzz9VCefe1eo60p_o`,
        Service.NEW_TOKEN,
        false,
      );
      console.log('getNewToken resp', resp?.data);
      if (resp?.data?.success) {
        setToken(resp?.data?.request_token);
        dispatch(setUserToken(resp?.data?.request_token));
        console.log('here');
        // navigation.navigate(ScreenNames.HOME)
      } else {
        // Alert.alert('', `${resp.data.message}`);
        Toast.show({text1: resp.data.message});
      }
    } catch (error) {
      console.log('error in getNewToken', error);
    }
    setShowLoader(false);
  };
  const authenticate = async () => {
    setShowLoader(true);
    try {
      const resp = await Service.getApiWithToken(
        token,
        Service.AUTHENTICATE,
        true,
        true,
      );
      console.log('authenticate resp', resp);
      // if (resp?.data?.success) {
      //   setToken(resp?.data?.request_token);
      //   dispatch(setUserToken(resp?.data?.request_token));
      //   console.log('here');
      // } else {
      //   Toast.show({text1: resp.data.message});
      // }
    } catch (error) {
      console.log('error in authenticate', error);
    }
    setShowLoader(false);
  };
  const signInUser = async () => {
    setShowLoader(true);
    try {
      const resp = await Service.getApiWithToken(token, Service.CREATE_SESSION);
      console.log('signInUser resp', resp?.data);
      if (resp?.data?.success) {
        console.log('here');
        navigation.navigate(ScreenNames.HOME);
      } else {
        // Alert.alert('', `${resp.data.message}`);
        Toast.show({text1: resp.data.message});
      }
    } catch (error) {
      console.log('error in signInUser', error);
    }
    setShowLoader(false);
  };
  //UI
  return (
    <View style={styles.container}>
      <MyHeader Title="LOGIN" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <MyButton text="GET NEW TOKEN" onPress={getNewToken} />
          {token ? (
            <>
              <MyButton
                text="AUTHENTICATE"
                onPress={authenticate}
                style={{marginTop: 20}}
              />
              <MyButton
                text="LOGIN"
                onPress={signInUser}
                style={{marginTop: 20}}
              />
            </>
          ) : null}
        </View>
      </ScrollView>
      {showLoader ? <CustomLoader /> : null}
    </View>
  );
};
export default Login;
