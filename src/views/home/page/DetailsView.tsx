/**
 * 代码描述: 商品详情 快快来买模块详情
 * 作者:cxr
 * 创建时间:2023/11/14 14:58:11
 */


import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import {
  Dimensions,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import { Appbar, Avatar, Button, Icon, IconButton } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import { navigate } from '../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailsView = (item) => {
  console.log(item.route.params.item);
    const datass = item.route.params.item;
  // console.log(data, '我是跳转过来的item');
  const [tabVal, setTab] = useState('tab1');
  const setTabPress = (tab: string) => {
    setTab(tab);
    console.log('点击切换', tab);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVal, onSelectedPress] = React.useState('selected1');
  const [paymethWx, setPaymethWx] = React.useState(true);
  const [showmt, setShowmt] = React.useState(false);
  return (
    <View style={styles.parentView}>
      <TouchableOpacity style={showmt ? { width: windowWidth, height: windowHeight, position: 'absolute', top: 0, left: 0, backgroundColor: '#000', zIndex: 99, opacity: 0.1 } : { display: 'none' }} onPress={() => { setShowmt(false) }}></TouchableOpacity>
      <View style={showmt ? { position: 'absolute', top: '45%', left: '20%', width: '60%', height: '23%', backgroundColor: '#ccc', zIndex: 99, paddingHorizontal: 20, borderRadius: 20 } : { display: 'none' }}>
        <Text style={{ textAlign: 'center', color: '#000', marginVertical: 12 }}>支付方式</Text>
        <TouchableOpacity style={{ backgroundColor: '#fff', padding: 8, flexDirection: 'row', justifyContent: 'space-between', borderRadius: 4, alignItems: 'center' }} onPress={() => { setPaymethWx(true); setShowmt(false) }}>
          <Image source={require('../../../assets/images/tup/weixin.png')} style={{ width: 30, height: 26 }}></Image>
          <Text style={{ color: '#000', fontSize: 16 }}>微信支付</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#fff', padding: 8, flexDirection: 'row', justifyContent: 'space-between', borderRadius: 4, marginTop: '6%', alignItems: 'center' }} onPress={() => { setPaymethWx(false); setShowmt(false) }}>
          <Image source={require('../../../assets/images/tup/zhifubaozhifu.png')} style={{ width: 30, height: 26 }}></Image>
          <Text style={{ color: '#000', fontSize: 16 }}>支付宝支付</Text>
        </TouchableOpacity>
      </View>
      {/* <Appbar.Header style={[styles.headerStyle, { zIndex: -2 }]}>
        <Appbar.Action
          icon={require('../../../assets/images/chevron-left.png')}
          onPress={() => navigate('ProductRoute')}
        />
        <Text allowFontScaling={false} style={styles.headerText}>
          <Trans>navigationBar.title14</Trans>
        </Text>
      </Appbar.Header> */}
      <View style={styles.scrollView}>
        <ScrollView alwaysBounceVertical={true}>
          <View style={styles.swiperView}>
            <Swiper
              height={300}
              loop={true}
              horizontal={true}
              autoplay={true}
              autoplayTimeout={5}
              paginationStyle={styles.paginationStyle}
              dot={<View style={styles.dotStyle} />}
              activeDot={<View style={styles.activeDotStyle} />}>
              <Image
                source={require('../../../assets/images/banner1.jpg')}
                style={styles.bannerImage}
                accessibilityLabel='图片'
                alt="轮播图"
              />
              <Image
                source={require('../../../assets/images/banner2.jpg')}
                style={styles.bannerImage}
                accessibilityLabel='图片'
                alt="轮播图"
              />
              <Image
                source={require('../../../assets/images/banner3.jpg')}
                style={styles.bannerImage}
                accessibilityLabel='图片'
                alt="轮播图"
              />
              <Image
                source={require('../../../assets/images/banner4.jpg')}
                style={styles.bannerImage}
                accessibilityLabel='图片'
                alt="轮播图"
              />
            </Swiper>
          </View>
          <View style={styles.informationView}>
            <Text allowFontScaling={false} style={styles.moneyText}>¥ 888</Text>
            <Text allowFontScaling={false} style={styles.commodityName}>商品名称</Text>
            <View style={styles.personalView}>
              <View style={styles.personalLeft}>
                <Avatar.Image
                  size={56}
                  source={require('../../../assets/images/defaultheader.png')}
                  accessibilityLabel='图片'
                />
                <Text allowFontScaling={false} style={styles.personalName}>o泡果奶</Text>
              </View>
              <View style={styles.personalRight}>
                <Button
                  style={styles.personalButton}
                  labelStyle={styles.personalButtonText}
                  buttonColor="#ffb700"
                  textColor="#FFF"
                  onPress={() => console.log('点击关注')}>
                  关注
                </Button>
              </View>
            </View>
          </View>
          <View style={styles.introduceView}>
            <Text allowFontScaling={false} style={styles.introduceTitle}>商品介绍</Text>
            <Text allowFontScaling={false} style={styles.introduceText}>描述</Text>
          </View>
          <View style={styles.commentView}>
            <View style={styles.commentTitel}>
              <Text allowFontScaling={false} style={styles.commentText}>评论留言</Text>
              <TouchableOpacity style={styles.commentIconStyle}>
                <Text allowFontScaling={false} style={styles.commentIconText}>热度排序</Text>
                <Entypo
                  style={styles.commentIcon}
                  color="#fb4886"
                  size={17}
                  name="chevron-thin-right"
                />
              </TouchableOpacity>
            </View>
            <View />
          </View>
        </ScrollView>
        <View style={styles.controlStripView}>
          <View style={styles.controlLeft}>
            <View style={styles.controlLeftItem}>
              <TouchableOpacity onPress={() => setTabPress('tab1')}>
                <Image
                  style={[
                    styles.controlLeftIcon,
                    tabVal == 'tab1' ? { display: 'none' } : null,
                  ]}
                  source={require('../../../assets/images/3.0x/collect.png')}
                  accessibilityLabel='图片'
                  alt="头像"
                />
                <Image
                  style={[
                    styles.controlLeftIcon,
                    tabVal == 'tab1' ? null : { display: 'none' },
                  ]}
                  source={require('../../../assets/images/3.0x/goods_collect.png')}
                  accessibilityLabel='图片'
                  alt="头像"
                />
              </TouchableOpacity>
              <Text allowFontScaling={false} style={styles.controlLeftText}>收藏</Text>
            </View>
            <View style={styles.controlLeftItem}>
              <TouchableOpacity onPress={() => setTabPress('tab2')}>
                <Image
                  style={[
                    styles.controlLeftIcon,
                    tabVal == 'tab2' ? { display: 'none' } : null,
                  ]}
                  source={require('../../../assets/images/3.0x/comment_new1.png')}
                  accessibilityLabel='图片'
                />
                <Image
                  style={[
                    styles.controlLeftIcon,
                    tabVal == 'tab2' ? null : { display: 'none' },
                  ]}
                  source={require('../../../assets/images/3.0x/goods_say.png')}
                  accessibilityLabel='图片'
                  alt="头像"
                />
              </TouchableOpacity>
              <Text allowFontScaling={false} style={styles.controlLeftText}>留言</Text>
            </View>
          </View>
          <View style={styles.controlRight}>
            <Button
              style={[styles.controlRightButton, styles.controButtonFrame]}
              labelStyle={[styles.controlButtonText, styles.controlButtonText1]}
              buttonColor="#FFF"
              textColor="#faba3c"
              onPress={() => console.log('点击聊一聊')}>
              <Text allowFontScaling={false}>聊一聊</Text>
            </Button>
            <Button
              style={styles.controlRightButton}
              labelStyle={styles.controlButtonText}
              buttonColor="#faba3c"
              textColor="#FFF"
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text allowFontScaling={false}>立即购买</Text>
            </Button>
          </View>
        </View>
      </View>
      {/*  这个是模态框*/}
      <TouchableOpacity onPress={() => setModalVisible(false)} style={modalVisible ? { position: 'absolute', top: 0, left: 0, width: windowWidth, height: windowHeight, backgroundColor: '#000', opacity: 0.3 } : { display: 'none' }}></TouchableOpacity>
      <View style={modalVisible ? { width: windowWidth, height: windowHeight * 0.6, backgroundColor: '#E5E5E5', position: 'absolute', bottom: 0, borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 12 } : { display: 'none' }}>
        <View style={{ width: '100%' }}>
          <Text style={{ fontSize: 16, color: '#000', textAlign: 'center', fontWeight: 'bold' }}>确认订单</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 12, borderRadius: 12, marginBottom: 12 }}>
          <Image source={require('../../../assets/images/tup/dizhi.png')} style={{ width: 30, height: 30 }}></Image>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#F8B032', padding: 2, paddingHorizontal: 5 }}>
                <Text style={{ color: '#fff', fontSize: 10 }}>默认</Text>
              </View>
              <Text style={{ fontSize: 11, marginLeft: 8 }}>北京市北京市海淀区紫竹院街道</Text>
            </View>
            <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>龙锦苑四区西门23号楼4单元102左</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#000', fontSize: 15 }}>张大大</Text>
              <Text style={{ color: '#000', fontSize: 14, marginLeft: 5 }}>1319385890</Text>
            </View>
          </View>
          <Image source={require('../../../assets/images/chevron-right.png')} style={{ width: 23, height: 23 }}></Image>
        </View>
        <ScrollView style={{paddingBottom:90,marginBottom:60}}>
          <View style={{ backgroundColor: "#fff", padding: 16 }}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              <Text style={{ color: '#333', fontSize: 12 }}>春天怎么还不来</Text>
              <View style={{ backgroundColor: '#cfffe2', padding: 2, paddingHorizontal: 9 }}>
                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 12 }}>待支付</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', padding: '2%', width: '70%', justifyContent: 'space-between' }}>
              <View style={{ padding: 9, borderWidth: 1, borderColor: '#ccc', marginRight: 8 }}>
                <Image source={require('../../../assets/images/tup/57c35c612fb4bf9ae2922aa0d88688b.jpg')} style={{ width: 80, height: 80 }} />
              </View>
              <View>
                <Text numberOfLines={3}>
                  医用口罩。四层加厚版，预防新型冠状病毒，家人必备，给家里人一份心安!医用口罩。四层加厚版，预防新型冠状病毒，家人必备，给家里人一份心安!
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: 'red', fontSize: 14 }}>¥</Text>
                  <View style={{ marginLeft: 6 }}>
                    <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>88.00</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.xian}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>价格</Text>
              <Text style={{ color: '#000', fontSize: 14 }}>¥ <Text>500</Text></Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 12 }}>
              <Text>运费</Text>
              <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 14 }}>¥ <Text>20</Text></Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>共计</Text>
              <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>¥ <Text>520</Text></Text>
            </View>
            <View style={{ marginTop: 20, backgroundColor: '#fff' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>支付方式</Text>
                <TouchableOpacity onPress={() => setShowmt(true)}>
                  <View style={paymethWx ? { flexDirection: 'row', alignItems: 'center' } : { display: 'none' }}>
                    <Image source={require('../../../assets/images/tup/weixin.png')} style={{ width: 23, height: 20 }}></Image>
                    <Text>微信</Text>
                    <Image source={require('../../../assets/images/chevron-right.png')} style={{ width: 16, height: 16 }}></Image>
                  </View>
                  <View style={paymethWx ? { display: 'none' } : { flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../../assets/images/tup/zhifubaozhifu.png')} style={{ width: 23, height: 20 }}></Image>
                    <Text>支付宝</Text>
                    <Image source={require('../../../assets/images/chevron-right.png')} style={{ width: 16, height: 16 }}></Image>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{backgroundColor:'#ccc',position:'absolute',bottom:0,width:windowWidth,height:60}}>
         <View style={{flexDirection:'row',backgroundColor:'#fff',padding:8,justifyContent:'space-between'}}>
           <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{color:'#000',fontSize:14}}>共计:</Text>
            <Text style={{color:'#000'}}> ¥ <Text style={{color:'red',fontSize:20,fontWeight:'bold'}}>520.00</Text></Text>
           </View>
           <TouchableOpacity style={{backgroundColor:'#E20416',padding:10,paddingHorizontal:35,borderRadius:90}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>立即支付</Text>
           </TouchableOpacity>
          </View>
         </View>
      </View>

    </View>
  );
};

export default DetailsView;

const styles = StyleSheet.create({
  parentView: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#FFF',
  },
  headerStyle: {
    height: 45,
    backgroundColor: '#faba3c',
  },
  headerText: {
    width: '80%',
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  scrollView: {
    width: windowWidth,
    ...Platform.select({
      ios: {
        height: windowHeight - 98,
      },
      android: {
        height: windowHeight - 40,
      },
    }),
  },
  swiperView: {
    width: windowWidth,
    height: 300,
  },
  paginationStyle: {
    bottom: 0,
    left: -280
  },
  bannerImage: {
    width: windowWidth,
    height: 300,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 3,
    marginVertical: 9,
    backgroundColor: 'rgba(0,0,0,.2)'
  },
  activeDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 9,
    backgroundColor: '#ffb700',
  },
  informationView: {
    height: 160,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  moneyText: {
    height: 40,
    fontSize: 19,
    color: 'red',
    lineHeight: 40,
    paddingLeft: 20,
  },
  commodityName: {
    height: 30,
    fontSize: 15,
    color: '#000',
    lineHeight: 30,
    paddingLeft: 15,
  },
  personalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  personalLeft: {
    paddingTop: 15,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  personalName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    lineHeight: 56,
    marginLeft: 10,
  },
  personalRight: {
    paddingRight: 20,
    paddingTop: 30,
  },
  personalButton: {
    width: 75,
    height: 30,
    borderRadius: 5,
  },
  personalButtonText: {
    fontSize: 13,
    lineHeight: 15,
  },
  introduceView: {
    height: 150,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  introduceTitle: {
    height: 35,
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    lineHeight: 30,
  },
  introduceText: {
    width: '100%',
    height: 95,
    padding: 5,
  },
  commentView: {
    height: 180,
    marginBottom: 10,
  },
  commentTitel: {
    height: 40,
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentText: {
    height: 35,
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    lineHeight: 30,
  },
  commentIconStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  commentIconText: {
    fontSize: 14,
    color: '#fb4886',
    lineHeight: 30,
  },
  commentIcon: {
    lineHeight: 32,
  },
  controlStripView: {
    height: 64,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 3.5,
      },
      android: {
        elevation: 2,
        marginTop: 10,
      },
    }),
  },
  controlLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    ...Platform.select({
      ios: {
        paddingLeft: 10
      }
    })
  },
  controlLeftItem: {
    width: 50,
    alignItems: 'center',
  },
  controlLeftIcon: {
    width: 24,
    height: 24,
    marginTop: 7,
    marginBottom: 5
  },
  controlLeftText: {
    marginTop: -3,
    fontSize: 13,
    color: '#000',
  },
  controlRight: {
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  controlRightButton: {
    width: 110,
    height: 34,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  controlButtonText: {
    fontSize: 15,
    lineHeight: 17,
  },
  controButtonFrame: {
    borderWidth: 3,
    borderColor: '#faba3c',
  },
  controlButtonText1: {
    height: 18,
    marginTop: 5,
    lineHeight: 17,
    fontSize: 14,
  },
  xian: {
    height: 0.4,
    backgroundColor: '#333',
    width: '100%',
    marginVertical: 6
  }
});
