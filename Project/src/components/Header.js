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
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const iconDrawer = require('../assets/icon_Drawer.png');
const location = require('../assets/icon_location.png');
const timkiem = require('../assets/icon_timKiem.png');
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
//make a Component
const Header = ({temp, headerText}) => {
  // const {headerStyle, bgHeader} = styles;

  return (
    <View style={styles.bgHeader}>
      <TouchableOpacity
        onPress={() => {
          // temp.navigation.openDrawer();
        }}>
        <Image source={iconDrawer} style={styles.icon}></Image>
      </TouchableOpacity>

      {/* <Icon name="map-marker" size={24}></Icon> */}
      <Text style={styles.headerStyle}>{headerText}</Text>
      <Image source={location} style={styles.icon_location}></Image>
      <Image source={timkiem} style={styles.icon}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  bgHeader: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 10,
    height: 45,
    // shadowColor: '#00000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    position: 'relative',
    flexDirection: 'row',
    width: width,
    height: height - 1000,
  },
  headerStyle: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    marginLeft: 100,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 5,
    tintColor: '#000000',
  },
  icon_location: {
    width: 15,
    height: 15,
    marginLeft: 20,
    tintColor: '#000000',
  },
});

module.exports = Header;
