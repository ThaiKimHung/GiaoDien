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
  Platform,
  Alert,
} from 'react-native';

const ButtonCuss = ({image, name, temp, hoatdong}) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => temp.navigation.navigate(hoatdong)}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.itemName} numberOfLines={2}>
      {name}
    </Text>
  </TouchableOpacity>
);

export default ButtonCuss;

// export default class ButtonCuss extends React.Component {
//   render() {
//     const {onPress, data} = this.props;
//     const {image, name} = '';
//     return (
//       <TouchableOpacity
//         style={styles.itemContainer}
//         // onPress={}
//       >
//         <Image source={image} style={styles.itemImage} />
//         <Text style={styles.itemName} numberOfLines={2}>
//           {name}
//         </Text>
//       </TouchableOpacity>
//     );
//   }
// }

// const {height, width} = Dimensions.get('window');
// const standarWidth = 360;
// const standardHeight = 592;
// const boxWidth = (300 / standarWidth) * width;
// const boxHeight = (450 / standardHeight) * height;
const styles = StyleSheet.create({
  itemContainer: {
    // flex: 1,
    width: 100,
    height: 100,
    marginRight: 12,
    marginTop: 10,
    backgroundColor: '#ffffff90',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 22,
    marginTop: 4,
    marginBottom: 2,
  },
  itemName: {
    color: '#484848',
    fontSize: 14,
    marginHorizontal: 8,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
