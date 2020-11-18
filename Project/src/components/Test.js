import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Moment from 'moment';
const icon_dongho = require('../assets/dongho.png');
export default class Test extends React.Component {
  render() {
    const {onPress, data} = this.props;
    const {loai, hinh, name, location, thongtinmota} = data;
    let d = new Date();
    return (
      <View style={styles.container}>
        <View style={styles.khungHeader}>
          <View style={styles.divider}>
            <View style={{marginBottom: 10, marginLeft: 10, marginTop: 20}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>{name}</Text>

              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{color: 'red', borderColor: 'red', borderWidth: 1}}>
                  {loai}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 10,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={icon_dongho}
                    //style={styles.imagest}
                    resizeMode="stretch"
                  />
                  <Text>
                    {d.getDate() +
                      '/' +
                      d.getMonth() +
                      '/' +
                      d.getFullYear() +
                      ' ' +
                      d.getHours()}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'blue'}}> 1 yêu thích</Text>
                <Text> / 1 đánh giá </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="map-marker"
                  size={20}
                  style={{color: '#006699', marginRight: 2}}></Icon>
                <Text style={{color: '#006699'}}>{location}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{flex: 8, marginLeft: 10}}>
          <Image
            source={{
              uri:
                'https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/04_2019/thumbs/780_crop_rung-tram-tra-su.jpg',
            }}
            style={styles.imageItem}
          />
          <Text style={{color: 'blue'}}>Thông tin mô tả</Text>
          <Text>{thongtinmota}</Text>
          <Text>Thông tin địa điểm</Text>
          <Icon
            name="map-marker"
            size={20}
            style={{color: '#006699', marginRight: 2}}>
            <Text>{location}</Text>
          </Icon>
          <Text style={{color: 'blue'}}>Thông tin tương tự </Text>
          <Text>Đánh giá kết quả</Text>
        </View>
      </View>
    );
  }
}

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  khungHeader: {
    flex: 1.5,
    // backgroundColor: 'blue',
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
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
  },
  containerFLData: {
    flex: 8,
    backgroundColor: '#C0C0C080',
  },
  khungLoai: {
    // backgroundColor: '#FFFFFF80',
    // marginLeft: 5,
    // borderTopLeftRadius: ,
    marginTop: 5,
    maxWidth: 120,
    minWidth: 100,
  },
  textLoai: {
    backgroundColor: '#FFFFFF80',
    // maxWidth: 120,
    // minWidth: 100,
    textAlign: 'center',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
    color: '#0099FF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  khungFLItemBu: {
    backgroundColor: '#66666680',
    // marginTop
  },
  imageItem: {
    width: width - 20,
    height: height - 650,
    marginTop: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  khungFLItemNho: {
    marginLeft: 15,
    // marginTop: 10,
    marginBottom: 3,
  },
  textTen: {
    fontWeight: 'bold',
    // marginTop: 5,
    marginVertical: 5,
  },
});
