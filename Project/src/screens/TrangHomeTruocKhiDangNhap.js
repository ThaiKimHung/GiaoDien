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

import ButtonCuss from '../components/ButtonCuss';
// import HeaderComponent from './DangNhap';

const background = require('../assets/backgroundTong.png');
const logo = require('../assets/lologo.png');
const blog = require('../assets/blog.png');
const hotro = require('../assets/hotrokhancap.png');
const canhbao = require('../assets/thongtincanhbao.png');
const truyenthong = require('../assets/thongtintruyenthong.png');
const vitri = require('../assets/vitri.png');

const PhanButtonCus = ({temp}) => (
  <View style={styles.containerButtonCus}>
    <View>
      <View style={styles.containerFooter}>
        {/* <ButtonCuss ></ButtonCuss> */}
        <ButtonCuss
          image={vitri}
          name="Thông tin du lịch"
          temp={temp}
          hoatdong="ScreensTongHop"
        />
        <ButtonCuss image={vitri} name="Phản ánh du lịch" />
        <ButtonCuss image={canhbao} name="Thông tin cảnh báo" />
      </View>
      <View style={styles.containerFooter}>
        <ButtonCuss image={truyenthong} name="Thông tin truyền thông" />
        <ButtonCuss image={blog} name="Blog" />
        <ButtonCuss image={hotro} name="Hỗ trợ khẩn cấp" />
      </View>
    </View>
  </View>
);
function PhanDangNhap({temp}) {
  return (
    <View style={styles.cusPhanDN}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonDangnhap}
          onPress={() => temp.navigation.navigate('DangNhap')}>
          <Text style={styles.textDangNhap}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonDangKy}
          // onPress={() => temp.navigation.navigate('Register')}>
        >
          <Text style={styles.textDangKy}>ĐĂNG KÝ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerHuongDan}>
        <Text style={styles.textHD}>Hướng dẫn</Text>
      </View>
    </View>
  );
}

// function ClassHomeNe (){
//   return(

//   );
// }

export default class Splash2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dangnhap: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.imageback}>
          <View style={[styles.header]}>
            <Image source={logo} style={styles.imagest} resizeMode="stretch" />
            <Text style={styles.textHeader}>
              SỞ VĂN HÓA, THỂ THAO VÀ DU LỊCH
            </Text>
          </View>
          <View style={styles.footer}>
            <PhanButtonCus temp={this.props} />
            <PhanDangNhap temp={this.props} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageback: {
    resizeMode: 'cover',
    justifyContent: 'center',
    height: height,
    width: width,
    flex: 1,
  },
  header: {
    flex: 2,
    alignItems: 'center',
    paddingVertical: 50,
    // backgroundColor: 'blue',
  },
  footer: {
    flex: 7,
  },
  containerButtonCus: {
    // backgroundColor: 'yellow',
    marginBottom: 20,
    flex: 4,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 50,
    marginTop: 12,
  },
  imagest: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  containerFooter: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
    // backgroundColor: 'green',
  },
  buttonDangnhap: {
    backgroundColor: '#3180CC',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  textDangNhap: {
    fontSize: 20,
    color: '#fff',
  },
  buttonDangKy: {
    backgroundColor: '#fff',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  textDangKy: {
    fontSize: 20,
    color: '#000000',
  },
  containerHuongDan: {
    // backgroundColor: 'yellow',
    alignItems: 'center',
    height: 30,
  },
  cusPhanDN: {
    flex: 2,
  },
  textHD: {
    fontSize: 15,
    color: 'white',
  },
});
