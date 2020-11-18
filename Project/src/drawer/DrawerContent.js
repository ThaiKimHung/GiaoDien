import * as React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

const icon_background = require('../assets/imageBG_Drawer.png');
const avatar = require('../assets/avatar.png');
const icon_home = require('../assets/icon_home.png');
const thongtindulich = require('../assets/vitri.png');
const phananhdulich = require('../assets/vitri.png');
const thongtincanhbao = require('../assets/thongtincanhbao.png');
const thongtintuyentruyen = require('../assets/thongtintruyenthong.png');
const blog = require('../assets/blog.png');
const hotrokhancap = require('../assets/hotrokhancap.png');
const thongbao = require('../assets/icon_thongbao.png');
const caidat = require('../assets/icon_caidat.png');

const DrawerItemComponents = ({image, name}) => (
  <TouchableOpacity style={styles.drawerItemCom}>
    <View style={styles.divider}>
      <View style={{marginTop: 5, flexDirection: 'row'}}>
        <Image source={image} style={styles.imageItem} />
        <Text style={styles.textDrawerItem}>{name}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <ImageBackground source={icon_background} style={styles.imageback}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={styles.avater}>
                  <Avatar.Image source={avatar} size={50} />
                </View>

                <View
                  style={{
                    marginLeft: 15,
                    flexDirection: 'column',
                    marginTop: 9,
                  }}>
                  <Title style={styles.title}>Xin chào, Nguyễn</Title>
                  {/* <Caption style={styles.caption}>@j_doe</Caption> */}
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.drawerSection}>
            <Text style={{marginLeft: 10, fontSize: 16, fontWeight: 'bold'}}>
              Du lịch An Giang
            </Text>
            <DrawerItemComponents name="Trang chủ" image={icon_home} />
            <DrawerItemComponents
              name="Thông tin du lịch"
              image={thongtindulich}
            />
            <DrawerItemComponents
              name="Phản ánh du lịch"
              image={phananhdulich}
            />
            <DrawerItemComponents
              name="Thông tin cảnh báo"
              image={thongtincanhbao}
            />
            <DrawerItemComponents
              name="Thông tin tuyên truyền"
              image={thongtintuyentruyen}
            />
            <DrawerItemComponents name="Blog" image={blog} />
            <DrawerItemComponents name="Hỗ trợ khẩn cấp" image={hotrokhancap} />
            <DrawerItemComponents name="Thông báo" image={thongbao} />
            <DrawerItemComponents name="Cài đặt" image={caidat} />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  imageback: {
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 160,
    width: 300,
    marginLeft: -20,
    marginTop: -5,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  avater: {
    marginLeft: 15,
  },

  drawerItemCom: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  imageItem: {
    height: 32,
    width: 32,
    marginLeft: 15,
  },
  textDrawerItem: {
    fontSize: 18,
    marginLeft: 10,
  },
  divider: {
    borderBottomColor: '#80808020',
    borderBottomWidth: 2,
    width: 280,
    height: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
