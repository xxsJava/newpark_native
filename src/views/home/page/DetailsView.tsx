/**
 * 代码描述: 商品详情页 快快来买模块详情页
 * 作者:cxr
 * 创建时间:2023/11/14 14:58:11
 */

import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import {
  Alert,
  Dimensions,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Appbar, Avatar, Button, Icon, IconButton } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import { navigate } from '../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailsView = () => {
  const [tabVal, setTab] = useState('tab1');
  const setTabPress = (tab: string) => {
    setTab(tab);
    console.log('点击切换', tab);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVal,onSelectedPress] = React.useState('selected1')
  return (
    <View style={styles.parentView}>
      <Appbar.Header style={styles.headerStyle}>
        <Appbar.Action
          icon={require('../../../assets/images/chevron-left.png')}
          onPress={() => navigate('ProductRoute')}
        />
        <Text allowFontScaling={false} style={styles.headerText}>
          <Trans>navigationBar.title14</Trans>
        </Text>
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
            <Text allowFontScaling={false} style={styles.moneyText}>¥ 888</Text>
            <Text allowFontScaling={false} style={styles.commodityName}>商品名称</Text>
            <View style={styles.personalView}>
              <View style={styles.personalLeft}>
                <Avatar.Image
                  size={56}
                  source={require('../../../assets/images/defaultheader.png')}
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
                />
                <Image
                  style={[
                    styles.controlLeftIcon,
                    tabVal == 'tab1' ? null : { display: 'none' },
                  ]}
                  source={require('../../../assets/images/3.0x/goods_collect.png')}
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
                />
                <Image
                  style={[
                    styles.controlLeftIcon,
                    tabVal == 'tab2' ? null : { display: 'none' },
                  ]}
                  source={require('../../../assets/images/3.0x/goods_say.png')}
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
      <View style={{ position: 'absolute', bottom: 0, width: windowWidth }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("模态框关闭了.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{position:'absolute',zIndex:999}}>
            <TouchableOpacity style={styles.waiM} onPress={() =>{setModalVisible(false);}}>
          <View style={styles.imageStyle} ></View>
            <View style={styles.detailsStyle}>
              <Text allowFontScaling={false} style={styles.titleStyle}>填写订单</Text>
              <View style={styles.scrollView}>
                <ScrollView style={styles.scrollStyle}>
                  <View style={styles.personalData}>
                    <Text allowFontScaling={false} style={styles.addressLabel}>收货地址</Text>
                    <View style={styles.addressView}>
                      <View style={styles.addressContent}>
                        <Text allowFontScaling={false} style={styles.addressTitle}>省市县街道</Text>
                        <Text allowFontScaling={false} style={styles.addressText}>详细地址。。。</Text>
                        <View style={styles.addressStyle}>
                          <Text allowFontScaling={false} style={styles.addressName}>张三</Text>
                          <Text allowFontScaling={false} style={styles.addressPhone}>123****6789</Text>
                          <Text allowFontScaling={false} style={[styles.addressTab, styles.tabColor1]}>默认</Text>
                          <Text allowFontScaling={false} style={[styles.addressTab, styles.tabColor2]}>家</Text>
                        </View>
                      </View>
                      <View style={styles.addressIcon}>
                        <IconButton style={styles.addressImage} size={23} icon={require('../../../assets/images/edit_icon.png')} onPress={() => console.log('点击编辑')}></IconButton>
                      </View>
                    </View>
                  </View>
                  <View style={styles.commodityInformation}>
                    <Text allowFontScaling={false} style={styles.commodityTitle}>商品信息</Text>
                    <View style={styles.commodityContent}>
                      <Image style={styles.commodityImage} source={require('../../../assets/images/alimom/R-C.jpg')}></Image>
                      <View style={styles.commodityTextView}>
                        <Text allowFontScaling={false} style={styles.commodityName}>商品名称</Text>
                        <Text allowFontScaling={false} style={styles.commodityDescribe}>商品描述。。。。</Text>
                        <Text allowFontScaling={false} style={styles.describeStyle}>描述..</Text>
                      </View>
                      <Text allowFontScaling={false} style={styles.commodityNum}>数量:1</Text>
                    </View>
                  </View>
                  <View style={styles.paymentView}>
                    <Text allowFontScaling={false} style={styles.parenTitle}>支付方式</Text>
                    <View style={styles.paymentContent}>
                      <TouchableOpacity style={[styles.paymentItem, { borderColor: '#999', borderBottomWidth: 1 }]} onPress={() => onSelectedPress('selected1')} activeOpacity={1}>
                        <Image style={styles.paymentImage} source={require('../../../assets/images/3.0x/wxzf_icon.png')}></Image>
                        <Text allowFontScaling={false} style={styles.paymentText}>微信支付</Text>
                        <Image style={[styles.paymentIcon, selectedVal == 'selected1' ? null : { display: 'none' }]} source={require('../../../assets/images/alimom/correct_icon.png')}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.paymentItem} onPress={() => onSelectedPress('selected2')} activeOpacity={1}>
                        <Image style={styles.paymentImage} source={require('../../../assets/images/3.0x/zfb_icon.png')}></Image>
                        <Text allowFontScaling={false} style={styles.paymentText}>支付宝支付</Text>
                        <Image style={[styles.paymentIcon, selectedVal == 'selected2' ? null : { display: 'none' }]} source={require('../../../assets/images/alimom/correct_icon.png')}></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
            <View style={styles.bottomView}>
              <View style={styles.bottomIcon}>
                <Icon size={36} color="#FABA3C" source={require('../../../assets/images/coins-icon.png')}></Icon>
              </View>
              <Text allowFontScaling={false} style={styles.bottomNum}>880.<Text allowFontScaling={false} style={{ fontSize: 14 }}>00</Text></Text>
              <Button style={styles.bottomButton} labelStyle={styles.bottomButtonText} onPress={() => console.log('提交订单')}>提交订单</Button>
            </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default DetailsView;

const styles = StyleSheet.create({
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: 'absolute'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
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
    left:-280
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
        elevation: 11,
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
  detailsStyle:{
    width:windowWidth,
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    paddingHorizontal:12,
    backgroundColor:'#FFF',
    // backgroundColor:'red',
    ...Platform.select({
        ios:{
            height:windowHeight-340,
        },
        android:{
            height:windowHeight-280,
        }
    })
},
titleStyle:{
    fontSize:17,
    color:'#000',
    fontWeight:'600',
    textAlign:'center',
    lineHeight:40
},
// scrollView:{
//     width:'100%',
//     height:windowHeight-320,
//     ...Platform.select({
//         ios:{
//             height:windowHeight-410,
//         },
//         android:{
//             height:windowHeight-320,
//         }
//     })
// },
// scrollStyle:{
//     flex:1,
// },
personalData:{
    borderBottomWidth:1,
    borderColor:'#aaa'
},
addressLabel:{
    fontSize:17,
    color:'#000',
    lineHeight:35
},
addressView:{
    height:90,
    flexDirection:'row',
    justifyContent:'space-between'
},
addressContent:{
    width:'85%',
},
addressIcon:{
    width:'15%',
    paddingLeft:10
},
addressImage:{
    marginTop:10,
},
addressTitle:{
    fontSize:14,
    color:'#aaa',
    lineHeight:20,
},
addressText:{
    fontSize:17,
    color:'#000',
    lineHeight:30
},
addressStyle:{
    height:30,
    flexDirection:'row',
    justifyContent:'flex-start'
},
addressName:{
    width:75,
    fontSize:16,
    color:'#000',
    lineHeight:30,
},
addressPhone:{
    width:130,
    fontSize:16,
    color:'#000',
    lineHeight:30
},
addressTab:{
    width:50,
    height:20,
    fontSize:15,
    color:'#FFF',
    lineHeight:20,
    marginTop:5,
    marginHorizontal:5,
    textAlign:'center',
},
tabColor1:{
    backgroundColor:'red'
},
tabColor2:{
    backgroundColor:'#00CB87'
},
commodityInformation:{
    width:'90%',
    height:135,
    marginBottom:8
},
commodityTitle:{
    fontSize:17,
    color:'#000',
    lineHeight:40
},
commodityContent:{
    flexDirection:'row',
    justifyContent:'flex-start'
},
commodityImage:{
    width:105,
    height:105,
    borderRadius:12
},
commodityTextView:{
    width:'52%',
    height:105,
    paddingLeft:10,
},
// commodityName:{
//     fontSize:18,
//     color:'#000',
//     lineHeight:25
// },
commodityDescribe:{
    fontSize:15,
    color:'#000',
    lineHeight:40
},
describeStyle:{
    color:'#000'
},
commodityNum:{
    width:'21%',
    height:105,
    fontSize:14,
    color:'#000',
    paddingTop:80,
    textAlign:'right',
},
paymentView:{
    height:250,
    // backgroundColor:'orange'
},
parenTitle:{
    fontSize:17,
    color:'#000',
    lineHeight:35,
    marginTop:10,
},
paymentContent:{
    width:'98%',
    height:150,
    marginHorizontal:'1%',
    paddingVertical:5,
    paddingHorizontal:20,
    backgroundColor:'#FFF',
    borderTopLeftRadius:12,
    borderTopRightRadius:12,
    ...Platform.select({
        ios: {
          shadowColor: '#ccc',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 1,
          shadowRadius: 3.5,
          marginTop: 6,
        },
        android: {
          elevation: 7,
          marginTop: 6,
          
        },
    }),

},
paymentItem:{
    height:70,
    position:'relative',
    flexDirection:"row",
    justifyContent:'flex-start',
},
paymentImage:{
    width:40,
    height:40,
    marginVertical:15
},
paymentText:{
    fontSize:16,
    color:'#000',
    lineHeight:60,
    paddingHorizontal:20
},
paymentIcon:{
    width:25,
    height:25,
    position:'absolute',
    top:22,
    right:10
},
bottomView:{
    width:'100%',
    borderWidth:1,
    borderColor:'#bbb',
    backgroundColor:'#FFF',
    flexDirection:'row',
    justifyContent:'flex-start',
    ...Platform.select({
        ios:{
            height:75,
        },
        android:{
            height:60,
        }
    })
},
bottomIcon:{
    width:'12%',
    paddingLeft:15,
    paddingTop:8,
    // backgroundColor:'green'
},
bottomNum:{
    width:'40%',
    fontSize:22,
    color:'#EC3656',
    lineHeight:50,
    // backgroundColor:'red'
},
bottomButton:{
    width:'45%',
    height:40,
    borderRadius:20,
    marginLeft:5,
    marginVertical:7,
    backgroundColor:'#FABA3C'
},
bottomButtonText:{
    fontSize:17,
    color:'#FFF',
    lineHeight:22,
},
imageStyle:{
  width:windowWidth,
  height:200,
},
waiM:{
  position:'absolute',
  top:0,
  bottom:0,
  left:0,
  right:0,
  width:windowWidth,
  height:windowHeight
}
});
