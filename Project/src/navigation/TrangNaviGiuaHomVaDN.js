import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TrangDrawer from '../navigation/TrangDrawer';
import DangNhap from '../screens/DangNhap';
import ScreensTongHop from '../screens/ScreensTongHop';
import ScreenDetails from '../screens/ScreenDetails';

const Stack = createStackNavigator();

import TrangHomeTruocKhiDangNhap from '../screens/TrangHomeTruocKhiDangNhap';

export default class TrangChu extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TrangDrawer" headerMode={'none'}>
          {/* <Stack.Screen name="Splash2" component={Splash2} /> */}
          {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
          <Stack.Screen name="TrangDrawer" component={TrangDrawer} />
          <Stack.Screen name="DangNhap" component={DangNhap} />
          <Stack.Screen name="ScreensTongHop" component={ScreensTongHop} />
          <Stack.Screen name="ScreenDetails" component={ScreenDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
