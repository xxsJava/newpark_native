/**
 * 代码描述: 商品详情页 快快来买模块详情页
 * 作者:cxr
 * 创建时间:2023/11/14 14:58:11
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Appbar, Icon, IconButton, Avatar, Button} from 'react-native-paper';
import {navigate} from '../../../config/routs/NavigationContainer';
import Entypo from 'react-native-vector-icons/Entypo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailsView = () => {
  const [tabVal, setTab] = useState('tab1');
  const setTabPress = (tab: string) => {
    setTab(tab);
    console.log('点击切换', tab);
  };

  return (
    <View style={styles.parentView}>
      <Appbar.Header style={styles.headerStyle}>
        <Appbar.Action
          icon={require('../../../assets/images/chevron-left.png')}
          onPress={() => navigate('ProductRoute')}
        />
        <Text style={styles.headerText}>商品详情</Text>
      </Appbar.Header>
      <View style={styles.scrollView}>
        <ScrollView style={styles.scrollStyle} alwaysBounceVertical={true}>
          <View style={styles.swiperView}>
            <Swiper
              style={styles.swiperStyle}
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
              />
              <Image
                source={require('../../../assets/images/banner2.jpg')}
                style={styles.bannerImage}
              />
              <Image
                source={require('../../../assets/images/banner3.jpg')}
                style={styles.bannerImage}
              />
              <Image
                source={require('../../../assets/images/banner4.jpg')}
                style={styles.bannerImage}
              />
            </Swiper>
          </View>
          <View style={styles.informationView}>
            <Text style={styles.moneyText}>¥ 888</Text>
            <Text style={styles.commodityName}>商品名称</Text>
            <View style={styles.personalView}>
              <View style={styles.personalLeft}>
                <Avatar.Image
                  size={56}
                  source={require('../../../assets/images/defaultheader.png')}
                />
                <Text style={styles.personalName}>o泡果奶</Text>
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
            <Text style={styles.introduceTitle}>商品介绍</Text>
            <Text style={styles.introduceText}>描述</Text>
          </View>
          <View style={styles.commentView}>
            <View style={styles.commentTitel}>
              <Text style={styles.commentText}>评论留言</Text>
              <TouchableOpacity style={styles.commentIconStyle}>
                <Text style={styles.commentIconText}>热度排序</Text>
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
                    tabVal == 'tab1' ? {display: 'none'} : null,
                  ]}
                  source={require('../../../assets/images/3.0x/collect.png')}
                />
                <Image
                  style={[
                    styles.controlLeftIcon,
                    tabVal == 'tab1' ? null : {display: 'none'},
                  ]}
                  source={require('../../../assets/images/3.0x/goods_collect.png')}
                />
              </TouchableOpacity>
              <Text style={styles.controlLeftText}>收藏</Text>
            </View>
            <View style={styles.controlLeftItem}>
              <TouchableOpacity onPress={() => setTabPress('tab2')}>
                <Image
                  style={[
                    styles.controlLeftIcon,
                    tabVal == 'tab2' ? {display: 'none'} : null,
                  ]}
                  source={require('../../../assets/images/3.0x/comment_new1.png')}
                />
                <Image
                  style={[
                    styles.controlLeftIcon,
                    tabVal == 'tab2' ? null : {display: 'none'},
                  ]}
                  source={require('../../../assets/images/3.0x/goods_say.png')}
                />
              </TouchableOpacity>
              <Text style={styles.controlLeftText}>留言</Text>
            </View>
          </View>
          <View style={styles.controlRight}>
            <Button
              style={[styles.controlRightButton, styles.controButtonFrame]}
              labelStyle={[styles.controlButtonText, styles.controlButtonText1]}
              buttonColor="#FFF"
              textColor="#faba3c"
              onPress={() => console.log('点击聊一聊')}>
              聊一聊
            </Button>

            <Button
              style={styles.controlRightButton}
              labelStyle={styles.controlButtonText}
              buttonColor="#faba3c"
              textColor="#FFF"
              onPress={() => navigate('PurchasePageRoute')}>
              立即购买
            </Button>
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
  scrollStyle: {
    flex: 1,
  },
  swiperView: {
    width: windowWidth,
    height: 300,
  },
  swiperStyle: {},
  paginationStyle: {
    bottom: 0,
  },
  bannerImage: {
    width: windowWidth,
    height: 300,
  },
  dotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 10,
    marginVertical: 9,
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  activeDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 10,
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
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 3.5,
      },
      android: {
        elevation: 11,
        marginTop: 10,
      },
    }),
  },
  controlLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    ...Platform.select({
        ios:{
            paddingLeft:10
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
    marginTop:7,
    marginBottom:5
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
});
