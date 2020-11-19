import React, {Component} from 'react';
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
  FlatList,
} from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
    setTimeout(() => {
      this.props.navigation.navigate('TrangDrawer');
    }, 2000);
    return (
      <View style={styles.ViewStyles}>
        <Text style={styles.textStyles}>Splash Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ViewStyles: {
    flex: 1,
    backgroundColor: 'orange',
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
