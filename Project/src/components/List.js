import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ListItem from './ListItem';
export default class List extends React.Component {
  renderItem = ({item, index}) => {
    const Item = this.props.item;
    return <Item item={item} key={index} />;
  };

  keyExtractor = (item) => String(item.key);

  ItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

  render() {
    return (
      <View style={styles.flatListContainer}>
        <FlatList
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.ItemSeparatorComponent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    marginTop: 20,
  },
  itemSeparator: {
    height: 20,
  },
});
