import * as React from 'react';
import LinearGradinet from 'react-native-linear-gradient';
import { navigate } from '../../../config/routs/NavigationContainer';
import { Appbar, Avatar, IconButton } from 'react-native-paper';
import {
  Button,
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
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import {red} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const list1 = [
  {
    index: 1,
    img: require('../../../assets/images/tup/z3.png'),
    title: '邀请达人',
    text: '已邀请了10人'
  },
  {
    index: 2,
    img: require('../../../assets/images/tup/z4.png'),
    title: '有梗达人',
    text: '已有50人关注您'
  },
  {
    index: 3,
    img: require('../../../assets/images/tup/z1.png'),
    title: '组队达人',
    text: '您已组织了五个团队'
  },
  {
    index: 4,
    img: require('../../../assets/images/tup/z2.png'),
    title: '社交达人',
    text: '您已有200个好友'
  },
  {
    index: 5,
    img: require('../../../assets/images/tup/z5.png'),
    title: '签到达人',
    text: '您已连续签到20天'
  },
  {
    index: 6,
    img: require('../../../assets/images/tup/z6.png'),
    title: '消息达人',
    text: '您已发布了80个帖子'
  },
  {
    index: 7,
    img: require('../../../assets/images/tup/z7.png'),
    title: '交易达人',
    text: '您已完成5场交易'
  },
]
const list2 = [
  {
    index: 1,
    type: '商品',
    img: require('../../../assets/images/tup/cd.png'),
    title: '未开封的毛绒白猫',
    price: '500'
  },
  {
    index: 2,
    type: '商品',
    img: require('../../../assets/images/tup/erji.jpg'),
    title: '全新耳机',
    price: '600'
  },
  {
    index: 3,
    type: '商品',
    img: require('../../../assets/images/tup/xy4.png'),
    title: '吃饭搭子',
    price: '0.01'
  },
  {
    index: 4,
    type: '悬赏',
    text: '去学校东门买六根烤肠，不要辣，多抹点酱！！！',
    title: '去校门口买个烤肠',
    price: '2.5'
  },
];
const list3 = [
  {
    index: 1,
    img: require('../../../assets/images/tup/xy1.png'),
    title: '我是一个标题',
    main: '部分内容',
    autor: '咖啡牛',
    time: '2023年12月11日'
  },
  {
    index: 1,
    img: require('../../../assets/images/tup/xy2.png'),
    title: '我是一个标题',
    main: '部分内容',
    autor: '咖啡牛',
    time: '2023年12月11日'
  },
  {
    index: 1,
    img: require('../../../assets/images/tup/xy3.png'),
    title: '我是一个标题',
    main: '部分内容',
    autor: '咖啡牛',
    time: '2023年12月11日'
  },
  {
    index: 1,
    img: require('../../../assets/images/tup/xy4.png'),
    title: '我是一个标题',
    main: '部分内容',
    autor: '咖啡牛',
    time: '2023年12月11日'
  },

]
const leftList = [
  {
    index: 1,
    num: 0,
    text: '关注的人'
  },
  {
    index: 2,
    num: 0,
    text: '粉丝'
  }
];
const rightList = [
  {
    index: 1,
    num: 0,
    text: '关注的圈'
  },
  {
    index: 2,
    num: 0,
    text: '发帖'
  },
]
const userName = 'O泡果奶'
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const MineVIew = () => {
  const [tabVal, onTabPress] = React.useState(1)

  return (
    <>
      {/* <Appbar.Header style={styles.appbarStyle}> */}
      <Appbar.BackAction onPress={() => navigate('MineStacker')} />
      {/* </Appbar.Header> */}
      <SafeAreaView style={styles.safeStyle}>
        <View>
          <ScrollView style={styles.bgTop}>
            <View >
              {/* <ImageBackground
              style={styles.bgImage}
              blurRadius={7}
              source={require('../../../assets/images/tup/xrk.png')}
            > */}
              <View style={[styles.heng, styles.boxnNav]}>
                <View style={styles.heng}>
                  {
                    leftList.map(item => {
                      return <View >
                        <View style={styles.litt1}>
                          <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>{item.num}</Text>
                          <Text style={{ fontSize: 16, color: 'black' }}> {item.text}</Text>
                        </View>
                      </View>
                    })
                  }
                </View>
                <View>
                  <View>
                    <View style={styles.uid}>
                      <LinearGradinet
                        colors={[
                          'rgba(247, 27, 147,0.90)',
                          'rgba(247, 27, 147,0.20)',
                        ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.uidBgJb}>
                        <Text selectable={true} key={Math.random()} style={{ textAlign: 'center', lineHeight: 30, color: '#fff' }}>UID:123456789</Text>
                      </LinearGradinet>
                      <View style={styles.wire}></View>
                    </View >
                    <View style={styles.headT}>
                      <View >
                        <Image source={require('../../../assets/images/tup/ppy.png')} style={styles.boxAvatar} accessibilityLabel='图片' alt="头像"></Image>
                      </View>
                      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '-10%' }}>
                        <Image source={require('../../../assets/images/tup/jia.png')} style={styles.jia} accessibilityLabel='图片' alt="头像"></Image>
                      </View>
                      <View style={styles.heng}>
                        <Text style={{ color: 'black' }}>{userName}</Text>
                        <Image source={require('../../../assets/images/alimom/V1.png')} style={[styles.avatarnImage, { marginTop: 2 }]} accessibilityLabel='图片' alt="头像"></Image>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.heng1}>
                  {
                    rightList.map(item => {
                      return <View key={item.index} >
                        <View style={styles.litt}>
                          <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>{item.num}</Text>
                          <Text style={{ fontSize: 16, color: 'black' }}>{item.text}</Text>
                        </View>
                      </View>
                    })
                  }
                </View>
              </View>
              {/* </ImageBackground> */}
            </View>
            <View style={styles.bottBox}>
              <TouchableOpacity onPress={() => onTabPress(1)}>
                <Text allowFontScaling={false} style={[styles.tabText, tabVal == 1 ? styles.tabColor : null]}>帖子</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onTabPress(2)}>
                <Text allowFontScaling={false} style={[styles.tabText, tabVal == 2 ? styles.tabColor : null]}>悬赏/商品</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onTabPress(3)}>
                <Text allowFontScaling={false} style={[styles.tabText, tabVal == 3 ? styles.tabColor : null]}>成就</Text>
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#fff' }}>
              <View style={styles.nullf}>
                <View style={[styles.heng, tabVal == 3 ? styles.xian : styles.hidd]}>
                  {list1.map(item => {
                    return <View key={item.index}>
                      <View >
                        <View style={styles.box}>
                          <Image source={item.img} style={styles.listimg} accessibilityLabel='图片' alt="头像"></Image>
                          <View>
                            <Text style={styles.listTit}>{item.title}</Text>
                          </View>
                          <View style={styles.textBox}>
                            <Text style={styles.listText}>{item.text}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  })}
                </View>
                <View style={[styles.heng, tabVal == 2 ? styles.xian : styles.hidd]}>
                  {list2.map(item => {
                    return <View key={item.index}>
                      <View style={[item.type == '商品' ? styles.xian : styles.hidd, styles.litBox]} >
                        {/* <View> */}
                        <Text style={styles.title}>{item.title}</Text>
                        <Image source={item.img} style={styles.spImg} accessibilityLabel='图片' alt="头像"></Image>
                        <View style={styles.hengpic}>
                          <Text style={styles.price}> {item.price}</Text>
                          <Text style={styles.unit}>元/个</Text>
                        </View>

                        {/* </View> */}
                      </View>
                      <View style={[item.type == '悬赏' ? styles.xian : styles.hidd, styles.litBoxBZ]}>
                        {/* <View style={styles.litBoxBZ}> */}
                        <Text style={styles.title} selectable={true}>{item.title}</Text>
                        <View style={styles.hengbz}>
                          <Text>备注:</Text>
                          <Text style={styles.unit}>{item.text}</Text>
                        </View>
                        <View style={styles.hengpic}>
                          <Text style={styles.price}>{item.price}</Text>
                          <Text style={styles.unit}>元/次</Text>
                        </View>
                      </View>
                      <View style={(item.index % 2) == 0 ? styles.greenX : styles.greenY}>
                        <Text style={styles.fontY}>{item.type}</Text>
                      </View>
                    </View>
                    // </View>
                  }
                  )
                  }
                </View>
                <View style={[styles.hengtz, tabVal == 1 ? styles.xian : styles.hidd]}>
                  {list3.map(item => {
                    return <TouchableOpacity style={styles.list3Box}>
                      <View>
                        <Image source={item.img} style={styles.tzimg} accessibilityLabel='图片' alt="头像"></Image>
                      </View>
                      <View style={styles.right}>
                        <Text style={styles.fonBlac} selectable={true}>{item.title}</Text>
                        <Text style={styles.ge}>{item.main}</Text>
                        <View style={styles.heng}>
                          <Text>{item.autor}</Text>
                          <Text style={styles.tzTime}>{item.time}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  })
                  }
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  )
}
export default MineVIew;
const styles = StyleSheet.create({
  litt: {
    width: 70,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  litt1: {
    width: 70,
    justifyContent: 'space-between',
    margin: 2,
    alignItems: 'center'
  },
  nullf: {
    zIndex: 9999,
    // position:'absolute',
    // bottom:0,
    // right:0,
    backgroundColor: '#FBF2F7',
    height: 600,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tabColor: {
    fontSize: 17,
    color: '#FABA3C',
    fontWeight: 'bold'
  },
  tabText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 50
  },
  bottBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    paddingTop: 100,
    marginTop: -60
  },
  nullk: {
    height: 50
  },
  safeStyle: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#F8B032',
    ...Platform.select({
      ios: {
        height: 180
      },
    }),
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
    backgroundColor: '#fff',
  },
  bgBox: {
    width: windowWidth,
    height: 140,
    alignItems: 'flex-end',
    paddingTop: 15,
    backgroundColor: '#F8B032',
    zIndex: -10,
    position: 'relative',
  },
  boxIcon: {
    marginRight: 15,
  },
  boxnNav: {
    width: windowWidth,
    height: 100,
    borderRadius: 50,
    marginTop: 140,
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
    color: '#dbdbdb',
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
    // position: 'absolute',
    // top: -57,
    // right: windowWidth / 4.5,
    // zIndex: 99,
  },
  uidBg: {
    width: 120,
    marginTop: 50
    // position: 'absolute',
    // top: 50,
    // paddingLeft: 2
  },
  uidBgJb: {
    height: 30,
    borderRadius: 8,
    width: 120
  },
  uidText: {
    color: '#FFFFFF',
    fontSize: 17,
    lineHeight: 30,
    paddingLeft: 6,
  },
  bell: {
    position: 'absolute',
    bottom: 56,
    right: 1
  },
  listimg: {
    width: 60,
    height: 60
  },
  listTit: {
    color: 'black',
    fontSize: 16
  },
  textBox: {
    width: 60,
    marginVertical: 4,
    justifyContent: 'center'
  },
  listText: {
    textAlign: 'center'
  },
  box: {
    marginVertical: 8,
    marginHorizontal: 30

  },
  hidd: {
    display: 'none'
  },
  xian: {
    display: 'flex',

  },
  spImg: {
    width: 100,
    height: 70
  },
  heng: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  heng1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  hengtz: {
    flexDirection: 'column'
  },
  hengbz: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 130,
  },
  hengpic: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    marginLeft: 8
  },
  litBox: {
    backgroundColor: '#fff',
    margin: 13,
    paddingVertical: 20,
    paddingHorizontal: 28,
    borderRadius: 20
  },
  litBoxBZ: {
    backgroundColor: '#fff',
    margin: 13,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 20
  },
  title: {
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12
  },
  price: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold'
  },
  unit: {
    fontSize: 15,
    color: 'black',
    marginLeft: 6
  },
  greenY: {
    backgroundColor: '#F5A30B',
    width: 40,
    height: 40,
    borderRadius: 30,
    position: 'absolute',
    left: 0,
    top: 0
  },
  greenX: {
    backgroundColor: '#F5A30B',
    width: 40,
    height: 40,
    borderRadius: 30,
    position: 'absolute',
    right: 0,
    top: 0
  },
  fontY: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 40
  },
  list3Box: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    width: '86%',
    margin: 8,
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
  tzimg: {
    width: 60,
    height: 60,
    marginTop: 8
  },
  right: {
    marginLeft: 20
  },
  fonBlac: {
    color: 'black',
    fontSize: 16
  },
  ge: {
    marginVertical: 8
  },
  tzTime: {
    fontSize: 12,
    marginLeft: 6
  },
  imgTx: {
    width: 100,
    height: 100
  },
  bgTop: {
    backgroundColor: '#F8B032',

  },
  headBox: {
    width: windowWidth,
    backgroundColor: '#fff'
  },
  jia: {
    width: 20,
    height: 20
  },
  id: {
    marginTop: '-40%'
  },
  headT: {
    marginTop: -35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  uid: {
    marginTop: -40,
    marginLeft: -120
  },
  wire: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: 130
  },
  bgImage: {
    zIndex: -3,
    width: windowWidth
  },
  appbarStyle: {
    borderWidth: 0,
    backgroundColor: '#FFF'
  },
  avatarStyle: {
    position: 'relative'
  },
  stateStyle: {
    width: 12,
    height: 12,
    top: 22,
    right: -3,
    borderRadius: 6,
    backgroundColor: '#26c78c',
    position: 'absolute'
  },
  avatarText: {
    color: '#000',
    lineHeight: 34,
    marginLeft: 10
  },


})

