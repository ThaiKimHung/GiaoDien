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
import {Avatar} from 'react-native-paper';
import ButtonCuss from '../components/ButtonCuss';
// import HeaderComponent from './DangNhap';

const avatar = require('../assets/avatar.png');
const background = require('../assets/backgroundTong.png');
const logo = require('../assets/lologo.png');
const blog = require('../assets/blog.png');
const hotro = require('../assets/hotrokhancap.png');
const canhbao = require('../assets/thongtincanhbao.png');
const truyenthong = require('../assets/thongtintruyenthong.png');
const vitri = require('../assets/vitri.png');

const thongbao = require('../assets/icon_thongbao.png');

const PhanButtonCus = ({temp}) => (
  <View style={styles.containerButtonCus}>
    <View>
      <View style={styles.containerFooter}>
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

const PhanUser = () => (
  <View style={styles.containerUser}>
    <View style={styles.khungAva}>
      <TouchableOpacity style={styles.containerAVa}>
        <Avatar.Image source={avatar} style={styles.avater} size={40} />
        <Text style={{fontSize: 15, color: 'white'}}>
          Xin chào, Tien Nhat A
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={thongbao}
          style={{marginLeft: 15, width: 30, height: 30}}></Image>
      </TouchableOpacity>
    </View>

    <View style={styles.khungHD}>
      <TouchableOpacity style={styles.containerHD}>
        <Text style={{fontSize: 15, color: 'white', marginBottom: 20}}>
          Hướng dẫn
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default class HomeScreen extends React.Component {
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

            <PhanUser></PhanUser>
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

  containerUser: {
    flex: 1.5,
    // backgroundColor: 'red',
  },
  khungAva: {
    flex: 0.7,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  khungHD: {
    flex: 0.7,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAVa: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerHD: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avater: {
    // marginLeft: 5,
    marginRight: 15,
  },
});
