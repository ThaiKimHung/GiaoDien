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
import Icon from 'react-native-vector-icons/FontAwesome';
import DataFlatList from '../data/dataFlatList';
import FLTongHopNgang from '../components/FLTongHopNgang';
import Header from '../components/Header';
import List from '../components/List';
import ListItem from '../components/ListItem';
import ListDetailsItem from '../components/ListDetailsItem';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default class ScreensTongHop extends Component {
  constructor(props) {
    super(props);
    this.item = this.props.route.params?.item;
    // this.state = {}
    // console
  }
  componentDidMount() {
    console.log(' propssssssssss', this.props);
  }
  // phần flatlist
  renderItem = ({item}) => {
    return <FlatListItem item={item}></FlatListItem>;
  };
  keyExtractor = (item) => item.key;

  render() {
    return (
      <View style={styles.container}>
        {/* <Header headerText={'Title App'} temp={this.props.navigation} />
        {/** phần tổng hợp */}
        {/* <FLTongHopNgang /> */}
        {/** phần flastlist */}
        {this.props.route.params.item ? (
          <ListItem item={this.props.route.params?.item}></ListItem>
        ) : null}

        {/* <View style={styles.containerFLData}> */}
        <List data={DataFlatList} item={ListDetailsItem} />
        {/* </View> */}
      </View>
    );
  }
}

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
