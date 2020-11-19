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
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontSize from '../components/size';
const background = require('../assets/backgroundTong.png');
const logo = require('../assets/lologo.png');

function CusTomDangNhap({temp}) {
  return (
    <View style={styles.ContainerDangNhap}>
      <View style={styles.khung}>
        <Text style={{fontSize: FontSize.reText(12)}}>
          Vui lòng sử dụng tài khoản đã đăng ký để đăng nhập
        </Text>
        <View>
          {/* tài khoản */}
          <View style={styles.khungtextinput}>
            <Icon name="person-outline" size={24} color="white" />

            <TextInput
              autoCapitalize="none"
              placeholderTextColor="white"
              placeholder="Số điện thoại đăng nhập"
              style={styles.textinput}></TextInput>
          </View>
          {/* mật khẩu */}
          <View style={styles.khungtextinputMK}>
            <Icon
              name="key-outline"
              size={24}
              color="white"
              style={{marginRight: 2}}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Nhập mật khẩu"
              placeholderTextColor="white"
              style={([styles.textinput], {width: width - 120})}></TextInput>
            <TouchableOpacity>
              <Icon
                name="eye-outline"
                size={24}
                color="#FFFFFF80"
                // style={{marginRight: 5}}
              />
            </TouchableOpacity>

            {/* <Icon name="eye-off-outline" size={26} /> */}
          </View>
        </View>
        {/* button đăng nhập */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonDangnhap}
            onPress={() => temp.navigation.navigate('ScreensTongHop')}>
            <Text style={styles.textDangNhap}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.quenmk}>
        <Text style={styles.textChuaTK}>Bạn chưa có tài khoản?</Text>
        <Text style={styles.textDangKyTK}>Đăng ký tài khoản!</Text>
      </View>
    </View>
  );
}
export default class DangNhap extends React.Component {
  constructor(props) {
    super(props);
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
            <CusTomDangNhap temp={this.props} />
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
    // backgroundColor: 'red',
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
  ContainerDangNhap: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 30,
    // height: 320,
    marginBottom: 20,
    // flex: 7,
  },
  khung: {
    backgroundColor: '#00000080',
    height: height - 500,
    width: width - 30,
    marginHorizontal: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 20,
  },
  Title: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  khungtextinput: {
    borderColor: 'white',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: 'white',
    width: 350,
    marginRight: 2,
    marginLeft: 10,
    marginTop: 30,
  },
  khungtextinputMK: {
    borderColor: 'white',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: 'white',
    width: 350,
    marginRight: 2,
    marginLeft: 10,
    marginTop: 10,
  },
  textinput: {
    color: 'white',
    width: 330,
  },
  buttonContainer: {
    // marginBottom: 80,
    height: 60,
    marginTop: 20,
    alignItems: 'center',
    // flex: 1,
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
  quenmk: {
    flex: 3,
    backgroundColor: 'green',
    // marginBottom: 100,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textChuaTK: {
    color: 'white',
    fontSize: 15,
  },
  textDangKyTK: {
    color: 'white',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});
