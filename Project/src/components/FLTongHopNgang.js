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
const dataFLNgang = [
  {
    keyNgang: '1',
    DuLieu: 'Khách Sạn',
  },
  {
    keyNgang: '2',
    DuLieu: 'Homestay',
  },
  {
    keyNgang: '3',
    DuLieu: 'Du lịch tâm linh',
  },
  {
    keyNgang: '4',
    DuLieu: 'Khách Sạn',
  },
  {
    keyNgang: '5',
    DuLieu: 'Homestay',
  },
  {
    keyNgang: '6',
    DuLieu: 'Du lịch tâm linh',
  },
];
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
export default class FLTongHopNgang extends React.Component {
  renderItemNgang = ({item}) => {
    return (
      <View style={styles.khungDataFlNgang}>
        <TouchableOpacity>
          <Text style={{marginHorizontal: 10}}>{item.DuLieu}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  keyExtractorNgang = (item) => item.keyNgang;
  render() {
    return (
      <View style={styles.khungTongHop}>
        <View style={styles.containerFLNgang}>
          <View style={styles.textTongHop}>
            <Text>Tổng Hợp</Text>
          </View>

          <View style={styles.divider}></View>

          <FlatList
            horizontal={true}
            renderItem={this.renderItemNgang}
            keyExtractor={this.keyExtractorNgang}
            data={dataFLNgang}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  khungTongHop: {
    flexDirection: 'row',
    // height: 50,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    height: 60,
  },

  containerFLNgang: {
    flexDirection: 'row',
  },

  khungDataFlNgang: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTongHop: {
    backgroundColor: '#33CCFF80',
    height: 50,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  divider: {
    borderRightWidth: 1,
    borderColor: '#C0C0C0',
    marginRight: 5,
    marginLeft: 5,
  },
});
