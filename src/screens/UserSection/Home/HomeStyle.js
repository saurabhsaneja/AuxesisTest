import {Colors} from 'global/Index';
import {StyleSheet} from 'react-native';
import {width} from '../../../global/Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    padding: 17,
  },
  movieContainer: {
    backgroundColor: Colors.WHITE,
    width: width * 0.9,
    borderWidth: 1,
    borderColor: Colors.THEME_GOLD,
    marginBottom: 10,
    padding: 10,
  },
  movieImg: {
    height: 25,
    width: 25,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pagesView: {
    width: '90%',
    alignSelf:'center',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
