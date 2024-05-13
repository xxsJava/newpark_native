/**
 * 代码描述: 商品详情 快快来买模块详情
 * 作者:cxr
 * 创建时间:2023/11/14 14:58:11
 */


import React, { useEffect, useState } from 'react';
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
import { Avatar, Button } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import { productInfoApi } from '../../../api/sys/product';
import { navigate } from '../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailsView = (item: any) => {
  console.log('获取到商品-------->',item.route.params.id);
  // console.log(data, '我是跳转过来的item');
  const [tabVal, setTab] = useState('tab1');
  const setTabPress = (tab: string) => {
    setTab(tab);
    console.log('点击切换', tab);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVal, onSelectedPress] = useState('selected1');
  const [paymethWx, setPaymethWx] = useState(true);
  const [showmt, setShowmt] = useState(false);
  const [productInfoData,setProductInfo]:any = useState({});
  const [imgs,setImgs] = useState([]);
  
  const pid = item.route.params.id;
  const productInfo = async () => {
    const productInfoApis = await productInfoApi(pid);
    // console.log(productInfoApis);

    const imgArr = productInfoApis.data.pimgs.split(",");
    setImgs(imgArr);
    console.log('图片---------->',imgArr);
    setProductInfo(productInfoApis.data);
  }

  useEffect(()=>{
    productInfo();
  },[])

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
      <View style={styles.scrollView}>
        <ScrollView alwaysBounceVertical={true}>
          <View style={styles.swiperView}>
            <Swiper
              loop={true}
              horizontal={true}
              autoplay={true}
              autoplayTimeout={5}
              paginationStyle={styles.paginationStyle}
              dot={<View style={styles.dotStyle} />}
              activeDot={<View style={styles.activeDotStyle} />}>
              
              {
                
                imgs.map((item: any) => {
                  return(
                    <View style={styles.imgsView}>
                          <Image
                      source={{uri:item}}
                      style={styles.bannerImage}
                      accessibilityLabel='图片'
                      alt="轮播图"
                    /></View>
                  )
                })
              }
            </Swiper>
          </View>
          <View style={styles.informationView}>
            <Text allowFontScaling={false} style={styles.moneyText}>¥ {productInfoData.pprice}</Text>
            <Text allowFontScaling={false} style={styles.commodityName}>{productInfoData.pname}</Text>
            <View style={styles.personalView}>
              <View style={styles.personalLeft}>
                <Avatar.Image
                  size={56}
                  source={{uri:productInfoData.upath}}
                  accessibilityLabel='图片'
                />
                <Text allowFontScaling={false} style={styles.personalName}>{productInfoData.unikname}</Text>
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
            <Text allowFontScaling={false} style={styles.introduceText}>{productInfoData.pdesc}</Text>
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
      <View style={modalVisible ? { width: windowWidth, height: windowHeight * 0.74, backgroundColor: '#F7F7F7', position: 'absolute', bottom: 0, borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 12 } : { display: 'none' }}>
        <View style={{ width: '100%' }}>
          <Text style={styles.orderTitle}>确认购买</Text>
        </View>
        <TouchableOpacity  style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 12, borderRadius: 12, marginBottom: 12 ,marginTop:10}} onPress={()=>navigate('AddressManagementRoute')}>
          <View style={styles.iconAddr}>
            <Image source={require('../../../assets/images/tup/dizhi.png')} style={{ width: '100%', height: '100%' }}></Image>
          </View>
          
          <View>
            <Text style={styles.contenText}>
              山东省滨州市博兴县致泰广场1807
            </Text>
            <Text style={styles.contenTextA}>
              小学牛 12345678901
            </Text>
          </View>
          <Image source={require('../../../assets/images/chevron-right.png')} style={{ width: 15, height: 15 ,tintColor:'#999'}}></Image>
        </TouchableOpacity>


        <View style={styles.productCon}>
              <View>
                <Text style={styles.productContent}>商品信息</Text>
              </View>

              <View style={styles.productBody}>
                <View style={styles.productImg}>
                  <Image style={styles.productImgwh} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/ipad1.jpg'}} />
                </View>  

                <View style={styles.productTitle}>
                  <Text style={styles.productTitleFont}>
                    99新低价出售
                  </Text>
                </View>

                <View style={styles.productTitle}>
                  <Text style={styles.productPriceFont}>
                    $<Text style={{fontSize:18}}>199</Text>.<Text style={{fontSize:13}}>00</Text>
                  </Text>
                </View>

                <View style={styles.productCount}>
                  <Text style={styles.productCountFont}>
                    1
                  </Text>
                </View>
              </View>

              <View style={styles.productFoot}>
              <View style={{flexDirection:'row',position:'absolute',width:'100%',top:10}}>
                <Text style={styles.footFont}>运费</Text>
                <Text style={styles.footFontA}>$<Text style={{fontSize:18}}>0</Text>.00</Text>
              </View>

              <View style={{flexDirection:'row',position:'absolute',width:'100%',top:50}}>
                <Text style={[styles.footFont,{fontWeight:'900'}]}>小计</Text>
                <Text style={styles.footFontB}>$<Text style={{fontSize:18}}>199</Text>.00</Text>
              </View>
        </View>
        </View>

        <View style={styles.footBut}>
          <View>
            <Text style={styles.footText}>合计:<Text style={styles.countYe}><Text style={{fontSize:14}}>$</Text><Text style={{fontSize:20}}>199</Text>.<Text style={{fontSize:14}}>00</Text></Text></Text>
          </View>

          <View style={styles.buttFot}>
              <Button onPress={()=>{}} buttonColor='#FE6600'>
              <Text style={styles.ordBut} allowFontScaling={false}>立即购买</Text>
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
  swiperView: {
    width: windowWidth,
    height: 300,
  },
  paginationStyle: {
    bottom: 0,
    left: -280
  },imgsView:{
    width: '100%',
    height: 380
  },
  bannerImage: {
    width:'100%',
    height:'100%'
  },orderTitle:{ fontSize: 18, color: '#000', textAlign: 'center', fontWeight: 'bold' },
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
    fontWeight:'bold'
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
    color:'#000'
  },
  commentView: {
    height: 180,
    marginBottom: 10
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
  },
  iconAddr:{
    width:30,
    height:30
  },
  contenText:{
    color:'#000',
    fontSize:17,
    fontWeight:'bold'
  },
  contenTextA:{
    color:'#999',
    fontSize:14,
  },
  productCon:{
   width:'100%',
   height: '40%',
   backgroundColor:'#fff',
   borderRadius:10,
  },
  productContent:{
    color:'#000',
    fontSize:18,
    fontWeight:'600',
    lineHeight:40,
    paddingLeft:10
  },
  productBody:{
    flexDirection:'row'
  },
  productImg:{
    width:100,
    height:100,
    // backgroundColor:'red',
    marginLeft:10
  },
  productImgwh:{
    width:'100%',
    height:'100%'
  },productTitle:{
    marginLeft:10
  },
  productTitleFont:{
    color:'#999',
    fontSize:17,
  },
  productPriceFont:{
    color:'#000',
    fontSize:12,
    fontWeight:'bold',
    marginLeft:30
  },
  productCount:{
    width:50,height:25,position:'relative',top:'20%',right:'35%',backgroundColor:'#FAFAFA',borderRadius:20
  },
  productCountFont:{
    color:'#000',
    textAlign:'center',
    lineHeight:25,
    fontWeight:'900'
  },
  productFoot:{
    marginTop:10
  },
  footFont:{
    color:'#000',
    fontSize:18,
    paddingLeft:10,
  },
  footFontA:{
    fontSize:14,
    color:'#000',
    position:'relative',
    right:-250,
    fontWeight:'900'
  },
  footFontB:{
    color:'#FF6027',fontSize:14,
    position:'relative',
    right:-230,
    fontWeight:'900'
  },
  footBut:{
    width:'100%',
    height:110,
    // borderWidth:1,
    position:'absolute',
    bottom:0,
    left:'3%',
    flexDirection:'row',
    backgroundColor:'#fff',
    borderRadius:10
  },
  footText:{
    color:'#000',
    lineHeight:70,
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:10
  },
  countYe:{
    color:'#FF4D0D',
    fontWeight:'bold'
  },
  buttFot:{
    position:'absolute',
    right:30,
    top:15
  },
  ordBut:{
    color:'#fff',
    fontWeight:'900'
  }
});
