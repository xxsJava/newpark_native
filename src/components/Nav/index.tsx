/*
 * @Author: xxs
 * @Date: 2023-10-13 09:29:33
 * @LastEditTime: 2023-10-25 17:36:01
 * @FilePath: \newpark_native\src\components\Nav\index.tsx
 * @Description: 顶部tab 导航文件
 */
import * as React from 'react';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { navigate } from '../../config/routs/NavigationContainer';

const HomeNav = () => {
  const [activeTab, setActiveTab] = useState(true);

  /**
   * false 为全校 true 本校
   * @param tab 
   * @returns 
   */
  const handleTabPress = (tab: boolean) => {

    if(activeTab === tab){
      setActiveTab(!tab);
      return
    }
    setActiveTab(tab);
  };

  return (
    <Appbar.Header>
      <View style={styles.navWiidtha}>
        <TouchableOpacity
          style={[
            styles.schoolTypeNava,
            activeTab && styles.chekedScoll,
          ]}
          onPress={() => handleTabPress(true)}>
          <View>
            <Text allowFontScaling={false} style={styles.shoolTextCent}>全国</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.schoolTypeNavb,
            activeTab == false && styles.chekedScoll,
          ]}
          onPress={() => handleTabPress(false)}>
          <View>
            <Text allowFontScaling={false} style={styles.shoolTextCent}>本校</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.searchNav}>
        <Image
          style={styles.searchNavImg}
          source={require('../../assets/images/search.png')}
          accessibilityLabel='图片'
        />
        {/* <TextInput
          style={styles.searchNavInput}
          onChangeText={text => onChangeText(text)}
          value={inputValue}
        /> */}
        <TouchableOpacity activeOpacity={0.6} style={styles.searchNavInput} onPress={() => navigate('SearchView')}>
          <Text allowFontScaling={false} style={styles.searchNavInputText}>请输入需要搜索的/帖子/UID/群聊/商品</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          console.log('点击收藏');
          navigate('CollectionRoute');
        }}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/3.0x/goods_collect.png')}
          accessibilityLabel='图片'
        />
      </TouchableOpacity>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navWiidtha: {
    width: Dimensions.get('window').width * 0.18,
    // backgroundColor:'plum',
  },
  schoolTypeNava: {
    width: 35,
    height: 35,
    backgroundColor: '#FDE5B4',
    borderRadius: 50,
    justifyContent: 'center',
    margin: 10,
    marginLeft:5
  },
  schoolTypeNavb: {
    width: 35,
    height: 35,
    backgroundColor: '#FDE5B4',
    borderRadius: 50,
    justifyContent: 'center',
    position: 'absolute',
    left: 20,
    top: 10,
    zIndex: -1,
  },
  shoolTextCent: {
    textAlign: 'center',
    color: '#FFF',
  },
  searchNav: {
    width: Dimensions.get('window').width * 0.68,
    height: 40,
    // paddingLeft:8,
    backgroundColor: 'pink',
    borderRadius: 20,
    position: 'relative',
    zIndex: -10,
  },
  searchNavImg:{
    top: 11,
    left: 12,
    position: 'absolute',
    zIndex: 10,
  },
  searchNavInput:{
    width: Dimensions.get('window').width * 0.68,
    height: 40,
    // borderWidth: 0,
    paddingLeft:8,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingVertical:0,
    alignItems:'center'
  },
  searchNavInputText:{
    width: Dimensions.get('window').width * 0.65,
    fontSize:11,
    color: '#888',
    lineHeight:40,
    textAlign: 'center',
  },
  chekedScoll: {
    backgroundColor: '#FABA3C',
    zIndex: 1,
  },
  tinyLogo: {
    width: 28,
    height: 28,
    marginLeft: 8,
  },
});

export default HomeNav
