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
import {useSelector} from 'react-redux';
import CustomLoader from '../../../components/CustomLoader/CustomLoader';

const Login = ({navigation}) => {
  //variables
  const userToken = useSelector(state => state.user.userToken);
  //states
  const [showLoader, setShowLoader] = useState(false);

  const signInUser = async () => {
    setShowLoader(true);
    try {
      const resp = await Service.getApiWithToken(userToken, Service.LOGIN);
      console.log('signInUser resp', resp?.data);
      if (resp?.data?.success) {
        console.log('here');
        navigation.navigate(ScreenNames.HOME)
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
          <MyButton text="LOGIN" onPress={signInUser} />
        </View>
      </ScrollView>
      {showLoader ? <CustomLoader /> : null}
    </View>
  );
};
export default Login;
