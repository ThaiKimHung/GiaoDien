import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  SafeAreaView,
  ImageBackground,
  Button,
} from 'react-native';

import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// import Login from '../components/DangNhap';
import TrangHomeTruocKhiDangNhap from '../screens/TrangHomeTruocKhiDangNhap';
import DrawerContent from '../drawer/DrawerContent';
// import TrangHomeTruocKhiDangNhap from '../screens/TrangHomeTruocKhiDangNhap';
import ScreensTongHop from '../screens/ScreensTongHop';
import TrangHomeSauKhiDangNhap from '../screens/TrangHomeSauKhiDangNhap';

const Drawer = createDrawerNavigator();

export default class TrangHomeDN extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props}></DrawerContent>}
        initialRouteName="HomeStackScreen"
        options={{headerShown: false}}>
        <Drawer.Screen
          name="HomeStackScreen"
          options={{headerShown: false}}
          component={HomeStackScreen}></Drawer.Screen>
        <Drawer.Screen
          name="TongHopStackScreen"
          // options={{headerShown: false}}
          component={TongHopStackScreen}></Drawer.Screen>
        <Drawer.Screen
          name="HomeSauKhiDNStackScreen"
          // options={{headerShown: false}}
          component={HomeSauKhiDNStackScreen}></Drawer.Screen>
      </Drawer.Navigator>
      // </NavigationContainer>
    );
  }
}
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        headerMode="none"
        component={TrangHomeTruocKhiDangNhap}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const TongHopStackScreen = (props) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="ScreensTongHop"
        headerMode="none"
        component={<ScreensTongHopp {...props} />}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const HomeSauKhiDNStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TrangHomeSauKhiDangNhap"
        component={TrangHomeSauKhiDangNhap}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};
