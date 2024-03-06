import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradinet from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { navigate } from '../../../config/routs/NavigationContainer';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const listData = [
    {
      index: 1,
      title: '一起学Java',
      sum: '150',
      slogan: 'n个牛友在xxx',
      bgShow: false,
      icon: require('../../../assets/images/alimom/java.png'),
    },
    {
      index: 2,
      title: '一起玩耍',
      sum: '150',
      slogan: 'n个牛友在xxx',
      bgShow: false,
      icon: require('../../../assets/images/alimom/R-C.jpg'),
    },
    {
      index: 3,
      title: '女神在哪',
      sum: '4.5w',
      slogan: 'n个牛友在xxx',
      bgShow: false,
      icon: require('../../../assets/images/3.0x/chatroomicon01.png'),
    },
  ];

const CommunityModule = () => {
    return(
        <ScrollView style={styles.scrollStyle}>
          <View style={styles.listStyle}>
            {listData.map(item => {
              return (
                <TouchableOpacity style={styles.itemStyle} key={item.index} activeOpacity={0.8} onPress={() => navigate('CommunityChannelRoute')}>
                  <View style={styles.itemLeft}>
                    <Image
                      style={styles.imgStyle}
                      source={item.icon}
                    />
                  </View>
                  <View style={styles.itemMiddle}>
                    <View style={styles.middleStyle}>
                      <Text allowFontScaling={false} style={styles.middleStart}>{item.title}</Text>
                      <Image
                        style={styles.middleImage}
                        source={require('../../../assets/images/2.0x/hotfuckicon.png')}
                      />
                      <Text allowFontScaling={false} style={styles.middleEnd}>热度{item.sum}</Text>
                    </View>
                    <View style={styles.middleBottom}>
                      <LinearGradinet
                        colors={[
                          'rgba(233,231,255,0.9)',
                          'rgba(233,231,255,0)',
                        ]}
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}}
                        style={styles.bottomBg}>
                        <Text allowFontScaling={false} style={styles.bottomText}>{item.slogan}</Text>
                      </LinearGradinet>
                    </View>
                  </View>
                  <View style={styles.itemRight}>
                    <Feather
                      name="chevron-right"
                      size={30}
                      style={styles.rightIcon}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
    )
}
export default CommunityModule;

const styles = StyleSheet.create({
    scrollStyle: {
        width: windowWidth,
        height: windowHeight - 80,
        ...Platform.select({
          ios: {
            paddingHorizontal: 17,
          },
          android: {
            paddingHorizontal: 16,
          },
        }),
      },
    listStyle: {},
  itemStyle: {
    height: 102,
    marginBottom: 20,
    padding: 1,
    backgroundColor: '#F9FAFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    ...Platform.select({
      ios: {
        width: windowWidth - 34,
        shadowColor: '#999', //设置阴影色
        shadowOffset: {width: 0, height: 0}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        shadowOpacity: 1,
        shadowRadius: 0.2, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
      },
      android: {
        width: windowWidth - 32,
        elevation: 0.2,
      },
    }),
  },
  itemLeft: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  itemMiddle: {
    paddingTop: 7,
    paddingBottom: 10,
    paddingLeft: 18,
  },
  itemRight: {
    width: 50,
    height: 100,
  },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius:8
  },
  middleStyle: {
    width: 225,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  middleImage: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  middleStart: {
    width: 90,
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  middleEnd: {
    fontSize: 12,
    color: '#FCD4C4',
    paddingTop: 4,
  },
  middleBottom: {
    width: 120,
    height: 30,
    alignItems: 'center',
    lineHeight: 26,
    paddingLeft: 18,
  },
  bottomText: {
    width: 120,
    height: 30,
    color: '#333',
    textAlign: 'center',
    lineHeight: 26,
  },
  bottomBg: {
    borderRadius: 10,
  },
  rightIcon: {
    lineHeight: 100,
    color: '#000',
  }
})