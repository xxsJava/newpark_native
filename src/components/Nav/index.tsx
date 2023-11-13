/*
 * @Author: xxs
 * @Date: 2023-10-13 09:29:33
 * @LastEditTime: 2023-10-25 17:36:01
 * @FilePath: \newpark_native\src\components\Nav\index.tsx
 * @Description: 顶部tab 导航文件
 */
import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import {Appbar, Icon} from 'react-native-paper';

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

  const [inputValue,onChangeText] = React.useState('请输入需要搜索的/帖子/UID/群聊/商品');

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
            <Text style={styles.shoolTextCent}>全国</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.schoolTypeNavb,
            activeTab == false && styles.chekedScoll,
          ]}
          onPress={() => handleTabPress(false)}>
          <View>
            <Text style={styles.shoolTextCent}>本校</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.searchNav}>
        <Image
          style={styles.searchNavImg}
          source={require('../../assets/images/search.png')}
        />
        <TextInput
          style={styles.searchNavInput}
          onChangeText={text => onChangeText(text)}
          value={inputValue}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          console.log('点击收藏');
        }}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/3.0x/goods_collect.png')}
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
    width: Dimensions.get('window').width * 0.17,
  },
  schoolTypeNava: {
    width: 35,
    height: 35,
    backgroundColor: '#FDE5B4',
    borderRadius: 50,
    justifyContent: 'center',
    margin: 10,
  },
  schoolTypeNavb: {
    width: 35,
    height: 35,
    backgroundColor: '#FDE5B4',
    borderRadius: 50,
    justifyContent: 'center',
    position: 'absolute',
    left: 25,
    top: 10,
    zIndex: -1,
  },
  shoolTextCent: {
    textAlign: 'center',
    color: '#FFF',
  },
  searchNav: {
    width: Dimensions.get('window').width * 0.7,
    height: 40,
    // backgroundColor: '#F5F5F5',
    borderRadius: 20,
    position: 'relative',
    zIndex: -10,
  },
  searchNavImg:{
    top: 11,
    left: 15,
    position: 'absolute',
    zIndex: 10,
  },
  searchNavInput:{
    width: Dimensions.get('window').width * 0.7,
    height: 40,
    borderWidth: 0,
    color: '#888',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    textAlign: 'center',
    fontSize:12,
    paddingVertical:0
  },
  chekedScoll: {
    backgroundColor: '#FABA3C',
    zIndex: 1,
  },
  tinyLogo: {
    width: 28,
    height: 28,
    marginLeft: 12,
  },
});

export default HomeNav;
