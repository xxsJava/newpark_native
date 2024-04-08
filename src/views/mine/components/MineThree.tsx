import * as React from 'react';
import LinearGradinet from 'react-native-linear-gradient';
import { navigate } from '../../../config/routs/NavigationContainer';
import { Appbar, Avatar, IconButton } from 'react-native-paper';
import DateTimeUtils from '../../../utils/DateTimeUtils'
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import { WebView } from 'react-native-webview';
import HTMLView from 'react-native-htmlview';
import { personInfoStat } from '../../../api/sys/usr/index'
// 发布悬赏的接口
import { rewardOneApi } from '../../../api/sys/reward/index';
import { rewardOneApiType } from '../../../api/sys/reward/types';
// 帖子的接口
import { postsOneApi } from '../../../api/sys/post/index';
import { postsOneApiType } from '../../../api/sys/post/types';
import Storage from '../../../utils/AsyncStorageUtils';
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
];

const userName = 'O泡果奶'
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

// 悬赏的模板
const Reward = ({ item }:any) => (
  <TouchableOpacity style={styles.xsPart}>
    <Text style={{ textAlign: 'center', fontSize: 18, color: '#000' }}>{item.rtitle}</Text>
    <View style={{ alignItems: 'center' }}>
      <Text style={{ textAlign: 'center', margin: 8 }}>{item.rdesc}</Text>
      <Image
        style={item.rimgs ? { width: 100, height: 100, alignItems: 'center' } : { display: 'none' }}
        source={{
          uri: item.rimgs,
        }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'flex-end' }}>
        <Image source={{ uri: item.upath }} style={{ width: 40, height: 40, borderRadius: 90 }}></Image>
        <Text style={{ color: 'red' }}><Text style={{ color: '#000', fontWeight: 'bold', fontSize: 20 }}>{item.rmoney}</Text> 元</Text>
        <Text style={{ color: '#000' }}>{DateTimeUtils.formattedDateTime(item.endTime).split(' ')[0]}</Text>

      </View>
    </View>
  </TouchableOpacity>
)
// 帖子的模板
const Post = ({ item }:any) => (
  <TouchableOpacity style={styles.list3Box}>
    <View style={{ width: '100%', alignItems: 'center' }}>
      <Text style={styles.fonBlac} selectable={true}>{item.ttitle}</Text>
    </View>
    <HTMLView value={item.tcontext} style={styles.postMain}></HTMLView>
    <View style={styles.heng}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginLeft: 3 }}>
        {/* 用户的名字 */}
        <Text>{item.tauthorId}张三</Text>
        <Text style={styles.tzTime}>{DateTimeUtils.formattedDateTime(item.tlastTime).split(' ')[0]}</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        {/* 帖子被点赞数量 */}
        <View style={{ alignItems: 'center', margin: 3 }}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../../assets/images/Favorite.png')}
            alt='喜欢'
          />
          <Text>{item.tlikeCount}</Text>
        </View>
        {/* 帖子转发数量 */}
        <View style={{ alignItems: 'center', margin: 3 }}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../../assets/images/tup/zhuanfa.png')}
            alt='转发'
          />
          <Text>{item.tforwardCount}</Text>
        </View>
        {/* 帖子被评论数量 */}
        <View style={{ alignItems: 'center', margin: 3 }}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../../assets/images/tup/pinglun.png')}
            alt='评论'
          />
          <Text>{item.tcomCount}</Text>
        </View>
        {/* 帖子浏览数量 */}
        <View style={{ alignItems: 'center', margin: 3 }}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../../assets/images/tup/liulan.png')}
            alt='浏览'
          />
          <Text>{item.tbrowseCount}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
const MineVIew = () => {
  const [followCount, setFollowCount] = React.useState();
  const [fansCount, setFansCount] = React.useState();
  const [communityCount, setCommunitycount] = React.useState();
  const [postCount, setPostCount] = React.useState();
  const personList = async () => {
    const data = await personInfoStat();
    console.log(data, '这些是个人信息的资料-------');
    setFollowCount(data.data.followCount);
    setFansCount(data.data.fansCount);
    setCommunitycount(data.data.communityCount);
    setPostCount(data.data.postCount);
  }
  React.useEffect(() => {
    personList()
  }, [])
  const htmls = '我可以换行<br/>  <img src="../../../assets/images/add_reward.png" alt="示例图片">'
  const [tabVal, onTabPress] = React.useState(1);
  const [uId, setuId] = React.useState(0);
  // 帖子的数据
  const [postlist, setPostlist] = React.useState([]);
  // 悬赏的数据
  const [reward, setReward] = React.useState([]);
  // 获取存储的uId
  const getStoData = async () => {
    var uid = await Storage.get('usr-uId');
    console.log(typeof uid, '--------');
    uid = Number(uid);
    setuId(uid);
    // 帖子的
    const data1: postsOneApiType = {
      usrId: uId
    };
    const postData = await postsOneApi(data1);
    setPostlist(postData.data);
    console.log(postlist, '帖子获得的数据', uId);

    // 悬赏的
    const data2: rewardOneApiType = {
      uid: uId
    };
    const rewardData = await rewardOneApi(data2);
    setReward(rewardData.data);
    console.log(reward, '这个是悬赏的数据。。。。。。。。');
  }

  React.useEffect(() => {
    getStoData()
  }, []); // 只在组件挂载时调用一次


  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <Appbar.BackAction onPress={() => navigate('MineStacker')} />
        <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>个人页面</Text>
        </View>
      </View>
      <SafeAreaView style={styles.safeStyle} >
        <View>
          <View>
            <View style={[styles.heng, styles.boxnNav]}>
              <View style={styles.heng}>
                <View style={styles.litt1}>
                  <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>{followCount}</Text>
                  <Text style={{ fontSize: 16, color: 'black' }}>关注的人</Text>
                </View>
                <View style={styles.litt1}>
                  <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>{fansCount}</Text>
                  <Text style={{ fontSize: 16, color: 'black' }}> 粉丝 </Text>
                </View>
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
                <View style={styles.litt}>
                  <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>{communityCount}</Text>
                  <Text style={{ fontSize: 16, color: 'black' }}>关注的圈</Text>
                </View>
                <View style={styles.litt}>
                  <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>{postCount}</Text>
                  <Text style={{ fontSize: 16, color: 'black' }}>发帖</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottBox}>
            <TouchableOpacity onPress={() => onTabPress(1)}>
              <Text allowFontScaling={false} style={[styles.tabText, tabVal == 1 ? styles.tabColor : null]}>帖子</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onTabPress(2)}>
              <Text allowFontScaling={false} style={[styles.tabText, tabVal == 2 ? styles.tabColor : null]}>悬赏</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onTabPress(3)}>
              <Text allowFontScaling={false} style={[styles.tabText, tabVal == 3 ? styles.tabColor : null]}>成就</Text>
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: '#fff', marginTop: -90 }}>
            <ScrollView style={styles.nullf} horizontal={true} alwaysBounceVertical={true} showsVerticalScrollIndicator={true}>
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
              <FlatList
                style={[styles.hengxs, tabVal == 2 ? styles.xian : styles.hidd]}
                data={reward}
                renderItem={({ item }) => <Reward item={item} />}
                keyExtractor={item => item.rid}
              />

              <FlatList
                style={tabVal == 1 ? styles.xian : styles.hidd}
                data={postlist}
                renderItem={({ item }) => <Post item={item} />}
                keyExtractor={item => item.tid}
              />
            </ScrollView>
          </View>
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
    height: 430,
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
    height: 140,
    width: windowWidth
  },
  safeStyle: {
    width: windowWidth,
    backgroundColor: '#F8B032',
    ...Platform.select({
      ios: {
        height: 180
      },
    }),
  },
  boxnNav: {
    width: windowWidth,
    height: 100,
    borderRadius: 50,
    marginTop: 60,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent:'space-between',
    flexWrap:'nowrap',
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
  avatarnImage: {
    width: 15,
    height: 15
  },
  uidBg: {
    width: 120,
    marginTop: 50
  },
  uidBgJb: {
    height: 30,
    borderRadius: 8,
    width: 120
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
  heng: {
    // width:'40%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  heng1: {
    // width:'20%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
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
  list3Box: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    width: '93%',
    margin: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#999', //设置阴影色
        shadowOffset: { width: 0, height: 0 }, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        shadowOpacity: 1,
        shadowRadius: 1.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
      },
      android: {
        elevation: 0,
      },
    }),
  },
  xsPart: {
    borderColor: '#000',
    borderWidth: 1,
    margin: 9,
    padding: 12,
    width: '87%',
    borderRadius: 12
  },
  right: {
    marginLeft: 20
  },
  fonBlac: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  ge: {
    marginVertical: 8
  },
  tzTime: {
    fontSize: 12,
    marginLeft: 6
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
  postMain: {
    // paddingTop: 20,
    alignItems: 'center'
  },
  hengxs: {
    width: windowWidth,

  }
})

