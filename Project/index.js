/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrangHomeTruocKhiDangNhap from './src/screens/TrangHomeTruocKhiDangNhap';
import DangNhap from './src/screens/DangNhap';
import TrangDrawer from './src/navigation/TrangDrawer';
import TrangNaviGiuaHomVaDN from './src/navigation/TrangNaviGiuaHomVaDN';
import TrangHomeSauKhiDangNhap from './src/screens/TrangHomeSauKhiDangNhap';
import Test from './src/components/Test';

AppRegistry.registerComponent(appName, () => TrangNaviGiuaHomVaDN);
