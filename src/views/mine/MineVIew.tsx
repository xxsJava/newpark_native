/*
 * @Author: xxs
 * @Date: 2023-10-13 10:09:01
 * @LastEditTime: 2024-05-17 16:36:57
 * @FilePath: \newpark_native\src\views\mine\MineVIew.tsx
 * @Description: Home 页菜单
 */
import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { personInfoStat } from '../../api/sys/usr';
import { navigate } from '../../config/routs/NavigationContainer';

// 1
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Colors from '../../styles/Color';
import HomePageView from './components/homepage';
// import { personInfoStat } from '../../api/sys/usr';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import {red} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class MineVIew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followCount: null,
      fansCount: null,
      communityCount: null,
      postCount: null
    };
  }

  componentDidMount(): void {
    this.personList();
  }
  personList = async () => {
    const data = await personInfoStat();
    console.log(data, '这些是个人资料部分1------');
    this.setState({
      followCount: data.data.followCount,
      fansCount: data.data.fansCount,
      communityCount: data.data.communityCount,
      postCount: data.data.postCount
    })
  }
  render() {
    return (
      <SafeAreaView style={styles.safeStyle}>
        <View style={styles.parentLevel}>
          <ScrollView style={[styles.scrollStyle,Colors.bGrey]} alwaysBounceVertical={true}>
            <View>
              <View style={styles.bgBox}>
                <TouchableOpacity style={{zIndex:20}}  onPress={() => navigate('SetUpRoute')}>
                  <Icon
                    name="cog"
                    size={30}
                    color="white"
                    style={styles.boxIcon}
                  />
                </TouchableOpacity>
                <View style={styles.boxnNav}>
                  <View style={styles.boxItem}>
                    <Text allowFontScaling={false} style={styles.dataColor}>{this.state.followCount}</Text>
                    <Text allowFontScaling={false} style={styles.navTabColor}>
                      <Trans>mineNav.navTab1</Trans>
                    </Text>
                  </View>
                  <View style={styles.boxItem}>
                    <Text allowFontScaling={false} style={styles.dataColor}>{this.state.fansCount}</Text>
                    <Text allowFontScaling={false} style={styles.navTabColor}>
                      <Trans>mineNav.navTab2</Trans>
                    </Text>
                  </View>
                  <View style={styles.boxItem} >
                    <Text allowFontScaling={false} style={styles.navTab3} >
                      <Trans>mineNav.navTab3</Trans>
                    </Text>
                  </View>
                  <View style={styles.boxItem}>
                    <Text allowFontScaling={false} style={styles.dataColor}>{this.state.communityCount}</Text>
                    <Text allowFontScaling={false} style={styles.navTabColor}>
                      <Trans>mineNav.navTab4</Trans>
                    </Text>
                  </View>
                  <View style={styles.boxItem} >
                    <Text allowFontScaling={false} style={styles.dataColor}>{this.state.postCount}</Text>
                    <Text allowFontScaling={false} style={styles.navTabColor}>
                      <Trans>mineNav.navTab5</Trans>
                    </Text>
                  </View>
                </View>
                <View style={styles.boxAvatarParent}>
                  {/* 这个是我的里的头像 */}
                  <TouchableOpacity style={styles.boxAvatar} onPress={() => navigate('MineThree')}>
                    <Image source={require('../../assets/images/tup/ppy.png')} style={styles.imgTx} accessibilityLabel='图片' alt="头像"></Image>
                  </TouchableOpacity>
                  <View style={styles.avatarView}>
                    <Text allowFontScaling={false} style={styles.avatarnText}>
                      <Trans>mineNav.navTab3</Trans>
                      {/* <Icon name="gem" /> */}
                    </Text>
                    <Image
                      style={styles.avatarnImage}
                      source={require('../../assets/images/alimom/V1.png')}
                      accessibilityLabel='图片'
                      alt="头像"
                    />
                  </View>
                  
                </View>

                <Image blurRadius={2} style={{position:'absolute'}} source={require('../../assets/images/csBj.jpg')}/>
              </View>

            </View>
            {/* <PersonalDataView></PersonalDataView> */}
            <HomePageView />

          </ScrollView>
        </View>

      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  safeStyle: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#F8B032',
  },
  parentLevel: {
    width: windowWidth,
    ...Platform.select({
      ios: {
        height: windowHeight - 120,
      },
      android: {
        height: windowHeight - 45,
      }
    })
  },
  scrollStyle: {
    flex: 1,
  },
  bgBox: {
    width: windowWidth,
    height: 140,
    alignItems: 'flex-end',
    paddingTop: 15,
    backgroundColor: '#F8B032',
    zIndex: -100,
    position: 'relative',
  },
  boxIcon: {
    marginRight: 15,
  },
  boxnNav: {
    width: windowWidth,
    height: 100,
    borderRadius: 50,
    marginTop: 40,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#999', //设置阴影色
        shadowOffset: { width: 0, height: 0 }, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        shadowOpacity: 1,
        shadowRadius: 2.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
      },
      android: {
        elevation: 3,
      },
    }),
  },
  boxItem: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    paddingTop: 20,
  },
  navTab3: {
    display: 'none',
  },
  navTabColor: {
    // color: '#dbdbdb',
    fontSize: 15,
    color: 'black'
  },
  boxAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      ios: {
        shadowColor: '#999', //设置阴影色
        shadowOffset: { width: 0, height: 0 }, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        shadowOpacity: 1,
        shadowRadius: 3.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
      },
      android: {
        elevation: 3,
      },
    }),
  },
  boxAvatarParent: {
    width: 100,
    height: 100,
    zIndex: 20,
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    right: windowWidth / 2.6,
  },
  avatarnText: {
    color: '#000',
    fontSize: 15,
  },
  avatarView: {
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatarnImage: {
    width: 15,
    height: 15
  },
  uidFrame: {
    width: 130,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    position: 'absolute',
    top: -57,
    right: windowWidth / 4.5,
    zIndex: 99,
  },
  bell: {
    position: 'absolute',
    bottom: 56,
    right: 1
  },
  imgTx: {
    width: 100,
    height: 100,
    // textAlign:'center'
  },
  dataColor: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6
  }
});
