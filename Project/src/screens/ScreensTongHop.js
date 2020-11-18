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

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default class ScreensTongHop extends Component {
  constructor(props) {
    super(props);
  }

  goToDetails = (item) => {
    this.props.navigation.navigate('ScreenDetails', item.data);
  };

  render() {
    this.props.navigation;
    return (
      <View style={styles.container}>
        <Header headerText={'Title App'} temp={this.props} />
        {/** phần tổng hợp */}
        <FLTongHopNgang />

        {/** phần flastlist */}
        <View style={styles.containerFLData}>
          <List
            data={DataFlatList}
            // item={(props) => (
            //    <ListItem {...props} onPress={this.goToDetails(props)} />

            // )}
            item={ListItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFLData: {
    flex: 8,
    backgroundColor: '#C0C0C080',
  },
});
