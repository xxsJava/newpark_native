/*
 * @Author: xxs
 * @Date: 2023-10-07 18:29:15
 * @LastEditTime: 2023-10-31 16:51:18
 * @FilePath: \newpark_native\src\routes\stacker\SocializingStacker.tsx
 * @Description: Socializing路由管理
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Text, View} from 'react-native-animatable';
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {navigate} from '../../config/routs/NavigationContainer';
import IndexBar from './IndexBarView';

const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let tabVal = '1';


export default class SocializingStacker extends Component {
  tabClick(porps: string) {
    tabVal = porps;
    console.log('输出结果', tabVal);
  }

  render() {
    return (
      <SafeAreaView style={styles.safeStyle}>
        <View style={styles.headView}>
          <View style={styles.headGrid}>
            <View style={styles.tabGrid}>
              <View style={styles.tabItem}>
                <View style={styles.tabBg} />
                <View>
                  <Text
                    style={
                      tabVal === '1'
                        ? styles.selectedText
                        : styles.selectedText1
                    }
                    onPress={() => this.tabClick('1')}>
                    消息
                  </Text>
                </View>
              </View>
              <View style={styles.tabItem}>
                {/* <View style={styles.tabBg}></View> */}
                <View>
                  <Text
                    style={
                      tabVal === '2'
                        ? styles.selectedText
                        : styles.selectedText1
                    }
                    onPress={() => this.tabClick('2')}>
                    联系人
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.tabMore}>
              <Feather name="plus" size={38} color="#000000" />
            </View>
          </View>
          <View style={styles.searchGrid}>
            <TouchableOpacity onPress={() => navigate('SearchView')}>
              <View style={styles.searchBox}>
                <Text style={styles.searchText}>搜索</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1,backgroundColor:'#F5F5F5'}}>
          <IndexBar />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeStyle: {
    width: windowWidth,
    height: windowHeight-40,
    backgroundColor: '#FFFFFF',
  },
  headView: {
    width: windowWidth,
    height: 140,
    backgroundColor: '#FFFFFF',
  },
  headGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabGrid: {
    flex: 1,
    width: windowWidth,
    height: 68,
    marginTop: 20,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tabItem: {
    width: 100,
    height: 50,
    alignItems: 'center',
    zIndex: 10,
  },
  tabMore: {
    flex: 1,
    marginTop: 16,
    paddingRight: 25,
    alignItems: 'flex-end',
  },
  tabBg: {
    width: 18,
    height: 18,
    top: -3,
    right: 27,
    borderRadius: 9,
    borderWidth: 1.5,
    position: 'absolute',
    borderColor: '#DCDCDC',
    backgroundColor: '#FABA3C',
    zIndex: -10,
  },
  selectedText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000000',
  },
  selectedText1: {
    color: '#808080',
  },
  searchGrid: {
    width: windowWidth,
    height: 60,
    paddingHorizontal: 10,
  },
  searchBox: {
    width: windowWidth - 20,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
  },
  searchText: {
    lineHeight: 40,
    fontSize: 16,
    color: '#000000',
  },
  viewStyle: {
    backgroundColor: '#ccc',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
function tabClick(porps: any, string: any) {
  throw new Error('Function not implemented.');
}

