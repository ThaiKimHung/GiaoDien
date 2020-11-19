import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class listItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {onPress, item} = this.props;
    const {loai, hinh, name, location} = item;
    return (
      <View style={{marginLeft: 10, marginRight: 10, marginTop: 5}}>
        <View style={styles.khungLoai}>
          <Text style={styles.textLoai}>{loai}</Text>
        </View>
        <TouchableOpacity style={styles.khungFLItemBu} onPress={onPress}>
          <View style={styles.khungFLItemNho}>
            <Image source={{uri: hinh}} style={styles.imageItem}></Image>
            <Text style={styles.textTen}>{name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="map-marker"
                size={20}
                style={{color: '#006699', marginRight: 2}}></Icon>
              <Text style={{color: '#006699'}}>{location}</Text>
            </View>
          </View>
        </TouchableOpacity>
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
    width: width - 50,
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
