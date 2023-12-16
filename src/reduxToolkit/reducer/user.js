import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  userToken: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzA0NmQxMTQwZGZiMmNkYzY0NzdkMGViMzU3NmY3NSIsInN1YiI6IjY1N2Q0NWQ5MWRhN2E2MDc2ZDJhMzA4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DCAkF2UKpCAY5_zgl7fau2EFFLHzz9VCefe1eo60p_o',
  userNotifications: false,
  cartCount: 0,
};
const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserToken(state, {payload}) {
      return {
        ...state,
        userToken: payload,
      };
    },
    setUser(state, {payload}) {
      return {
        ...state,
        userInfo: payload,
      };
    },
    setUserNotifications(state, {payload}) {
      return {
        ...state,
        userNotifications: payload,
      };
    },
    setCartCount(state, {payload}) {
      return {
        ...state,
        cartCount: payload,
      };
    },
    clearCart(state, {payload}) {
      return {
        ...state,
        cartCount: 0,
      };
    },
    logOutUser(state, {payload}) {
      return {
        userInfo: {},
        userToken: '',
      };
    },
  },
});

export const {setUserToken, setUser, setUserNotifications, logOutUser, clearCart, setCartCount} = user.actions;
const userReducer = user.reducer;

export default userReducer;
