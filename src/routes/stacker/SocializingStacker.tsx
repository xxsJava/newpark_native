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
import SocializingStackerRout from '../../config/routs-config/StackerRout/SocializingStackerRout';
import {Text, View} from 'react-native-animatable';
import {Dimensions, StyleSheet, SafeAreaView,TouchableOpacity} from 'react-native';
import {navigate} from '../../config/routs/NavigationContainer';

const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let tabVal = '1';
var AlphabetListView = require('react-native-alphabetlistview');

const state = {
        A: ['some', 'entries', 'are here'],
        B: ['some', 'entries', 'are here'],
        C: ['some', 'entries', 'are here'],
        D: ['some', 'entries', 'are here'],
        E: ['some', 'entries', 'are here'],
        F: ['some', 'entries', 'are here'],
        G: ['some', 'entries', 'are here'],
        H: ['some', 'entries', 'are here'],
        I: ['some', 'entries', 'are here'],
        J: ['some', 'entries', 'are here'],
        K: ['some', 'entries', 'are here'],
        L: ['some', 'entries', 'are here'],
        M: ['some', 'entries', 'are here'],
        N: ['some', 'entries', 'are here'],
        O: ['some', 'entries', 'are here'],
        P: ['some', 'entries', 'are here'],
        Q: ['some', 'entries', 'are here'],
        R: ['some', 'entries', 'are here'],
        S: ['some', 'entries', 'are here'],
        T: ['some', 'entries', 'are here'],
        U: ['some', 'entries', 'are here'],
        V: ['some', 'entries', 'are here'],
        W: ['some', 'entries', 'are here'],
        X: ['some', 'entries', 'are here'],
        Y: ['some', 'entries', 'are here'],
        Z: ['some', 'entries', 'are here'],
}

// class SectionHeader extends Component {
//   render() {
//     // inline styles used for brevity, use a stylesheet when possible
//     return (
//       <View style={styles.viewStyle}>
//         {/* <Text style={styles.textStyle}>{this.props.title}</Text> */}
//       </View>
//     );
//   }
// }

// class SectionItem extends Component {
  

//   render() {
//     console.log(this.props)
//     return <Text style={{color: '#f00'}}>1</Text>;
//   }
// }

// class Cell extends Component {
//   render() {
//     return (
//       <View style={{height: 30}}>
//         {/* <Text>{this.props.item}</Text> */}
//       </View>
//     );
//   }
// }

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
              <View style={styles.searchBox} >
                <Text style={styles.searchText}>搜索</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View>
          <AlphabetListView
            data={state}
            cell={Cell}
            cellHeight={30}
            sectionListItem={SectionItem}
            sectionHeader={SectionHeader}
            sectionHeaderHeight={22.5}
          />
        </View> */}
      </SafeAreaView>
      // <Stack.Navigator>
      //   {Object.entries(SocializingStackerRout).map(
      //     ([key, value]) => {
      //       return (
      //         <Stack.Screen
      //           name={key}
      //           key={key}
      //           component={value.component}
      //           options={value.options}
      //         />
      //       );
      //     },
      //   )}
      // </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  safeStyle: {
    width: windowWidth,
    height: 30,
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
  viewStyle:{
    backgroundColor: '#ccc',
  },
  textStyle:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  }
});
