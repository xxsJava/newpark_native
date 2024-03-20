/**
 * 代码描述: 快快来买页面 商品列表页
 * 作者:cxr
 * 创建时间:2023/11/14 14:58:11
 */
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
import { Appbar, Avatar, Icon } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { navigate } from '../../../../config/routs/NavigationContainer';
import { productApi,productApip } from '../../../../api/sys/Recommended/index';
// import { postList } from '../../../../api/sys/home/index'
import { productType,productpType } from '../../../../api/sys/Recommended/types';
// import text from '../../../socializing/text';
import formatDate from './formatDate';
// import { any } from 'prop-types';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const typeData = [
  {
    index: 1,
    text: '价格',
  },
  {
    index: 2,
    text: '新发布',
  },
];
const commodityData = [
  {
    index: 1,
    image: require('../../../../assets/images/alimom/R-C.jpg'),
    title: '果果 14proma.x128G+16G',
    num: '1000',
    time: '刚刚发布',
    avatar: require('../../../../assets/images/avatar-nv.png'),
    name: 'o泡果奶',
  },
  {
    index: 2,
    image: require('../../../../assets/images/alimom/R-C.jpg'),
    title: '果果 14proma.x128G+16G',
    num: '500',
    time: '13分钟前',
    avatar: require('../../../../assets/images/avatar-nan.png'),
    name: '爱喝旺仔',
  },
  {
    index: 3,
    image: require('../../../../assets/images/alimom/R-C.jpg'),
    title: '果果 14proma.x128G+16G',
    num: '500',
    time: '13分钟前',
    avatar: require('../../../../assets/images/avatar-nan.png'),
    name: '爱喝旺仔',
  },
  {
    index: 4,
    image: require('../../../../assets/images/alimom/R-C.jpg'),
    title: '果果 14proma.x128G+16G',
    num: '500',
    time: '13分钟前',
    avatar: require('../../../../assets/images/avatar-nan.png'),
    name: '爱喝旺仔',
  },
  {
    index: 5,
    image: require('../../../../assets/images/alimom/R-C.jpg'),
    title: '果果 14proma.x128G+16G',
    num: '500',
    time: '13分钟前',
    avatar: require('../../../../assets/images/avatar-nv.png'),
    name: 'o泡果奶',
  },
  {
    index: 6,
    image: require('../../../../assets/images/alimom/R-C.jpg'),
    title: '果果 14proma.x128G+16G',
    num: '500',
    time: '13分钟前',
    avatar: require('../../../../assets/images/avatar-nv.png'),
    name: 'o泡果奶',
  },
  {
    index: 7,
    image: require('../../../../assets/images/alimom/R-C.jpg'),
    title: '果果 14proma.x128G+16G',
    num: '500',
    time: '13分钟前',
    avatar: require('../../../../assets/images/avatar-nv.png'),
    name: 'o泡果奶',
  },
];
const ProductView = () => {
  const [listData, setListData] = React.useState([]);

  const [pageNo,setpageNo] = React.useState(1);
  const [pageSize,setpageSize] = React.useState(12);
  const [priceSort,setpriceSort] = React.useState("DESC");
  const [PStatus,setPStatus] = React.useState("AUDIT");
  const [timeSort,settimeSort] = React.useState("DESC");

  const postLikePress = async () => {
    const product:productType = {
      pageNo:pageNo,
      pageSize:pageSize,
      priceSort:priceSort,
      PStatus:PStatus,
      timeSort:timeSort
    };
    const product2:productpType = {
      pname : '熊大',
      pdesc : '我是介绍',
      pprice : 88,
      pother : '我是其他',
      pimgs : 'http://dummyimage.com/400x400',
      pstatus:'AUDIT',
      ppubTime: 236623991581
    }
  
    const productData2:any = await productApip(product2);

    const productData = await productApi(product);
    
   
    console.log('在这里', productData.data);
    console.log('打印试试', productData2);
    for (var i = 0; i < productData.data.length; i++) {
      // 修改时间
      var ele = '';
      console.log(productData.data[i].pimgs.split(',')[0],'===================');
      
      if(productData.data[i].pimgs.split(',')[1]) {
        productData.data[i].pims = productData.data[i].pimgs.split(',')[0].split('[')[1]
      }else {
        productData.data[i].pims =  productData.data[i].pimgs 
      }
      
      console.log('houhouhou///////',productData.data[i].pims,'分割',productData.data[i].pimgs);
      const date = new Date( productData.data[i].ppubTime * 1000)
      productData.data[i].times =  formatDate(date, 'yyyy/MM/dd')
      // 修改数组里面的图片
    }
    setListData(productData.data)
  }
  React.useEffect(() => {
    for (var i = 0; i < listData.length; i++) {
      // 修改时间
      var ele = '';
      listData[i].pims = listData[i].pimgs.split(',')[0].split('[')[1]
      console.log('houhouhou///////',listData[i].pims,'分割',listData[i].pimgs);
      const date = new Date( listData[i].ppubTime * 1000)
      listData[i].times =  formatDate(date, 'yyyy/MM/dd')
      // 修改数组里面的图片
     

    }
    setListData(listData)
    console.log('测试');
    postLikePress();
    console.log('在这里开始里面', listData);

  }, []); // 只在组件挂载时调用一次
  // console.log(listData[1],'在这里开始外面', listData[1].pims,listData[0].pimgs);
 
  return (
    <View style={styles.safeAreaStyle}>
      <Appbar.Header style={styles.headerStyle}>
        <Appbar.Action
          icon={require('../../../../assets/images/chevron-left.png')}
          onPress={() => navigate('HomeStacker')}
        />
        <Text allowFontScaling={false} style={styles.headerText}>交易圈</Text>
      </Appbar.Header>
      <View style={styles.filterBar}>
        <View style={styles.typeItem}>
          <Text allowFontScaling={false} style={styles.typeText}>综合</Text>
          <Entypo size={14} color="#000" name="chevron-thin-down" />
        </View>
        {typeData.map(item => {
          return (
            <View style={styles.typeItem} key={item.index}>
              <Text allowFontScaling={false} style={[styles.typeText, styles.typeText1]}>
                {item.text}
              </Text>
              <View>
                <Icon
                  size={10}
                  color="#888"
                  source={require('../../../../assets/images/triangle-up.png')}
                />
                <Icon
                  size={10}
                  color="#888"
                  source={require('../../../../assets/images/triangle-down.png')}
                />
              </View>
              {/* <Entypo size={14} color='#000' name='chevron-thin-down' /> */}
            </View>
          );
        })}
      </View>
      <View style={styles.scrollView}>
        <ScrollView style={styles.scrollStyle}>
          <View style={styles.commoditylist}>
            {
              listData.map(item => {
                return (
                  <TouchableOpacity
                    style={styles.commodityItem}
                    key={item.pid}
                    onPress={() => navigate('DetailsRoute')}>
                      {/* source={{ uri: item.pims }}  */}
                    <Image style={styles.commodityImage} source={{ uri: item.pims }} accessibilityLabel='图片'/>
                    {/* <Image source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/3a2467e4-b2a5-47d1-9b77-35c3f4d5f588.jpg'}} style={styles.commodityImage}></Image> */}
                    <Text allowFontScaling={false} style={styles.commodityText}>{item.pname}</Text>
                    <View style={styles.priceView}>
                      <View style={styles.priceStyle}>
                        <Icon
                          size={22}
                          color="#fa3d3c"
                          source={require('../../../../assets/images/coins-icon.png')}
                        />
                        <Text allowFontScaling={false} style={styles.priceNum}>{item.pprice}</Text>
                      </View>
                      <Text allowFontScaling={false} style={styles.priceTime}>{item.times}</Text>
                    </View>
                    <View style={styles.publisherView}>
                      <Avatar.Image
                        style={styles.publisherAvatar}
                        size={32}
                        source={{ uri: item.upath }}
                      />
                      <Text allowFontScaling={false} style={styles.publisherText}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })
              /* :
              <View style={styles.zhong}>
                <Text style={{ fontSize: 18, color: 'black', marginBottom: 20 }}>暂时没有商品.....</Text>
                <Text>去其他地方看看吧！</Text>
              </View> */
            }
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductView;
const styles = StyleSheet.create({
  safeAreaStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#FFF',
  },
  headerStyle: {
    height: 45,
    backgroundColor: '#faba3c',
  },
  scrollView: {
    width: Dimensions.get('window').width,
    ...Platform.select({
      ios: {
        height: Dimensions.get('window').height - 160,
      },
      android: {
        height: Dimensions.get('window').height - 90,
      },
    }),
  },
  scrollStyle: {
    flex: 1,
    marginTop: 15,
  },
  commoditylist: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerText: {
    width: '80%',
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  filterBar: {
    width: '100%',
    height: 40,
    paddingLeft: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  typeItem: {
    width: 90,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  typeText: {
    color: '#000',
    fontSize: 14,
    lineHeight: 40,
    marginRight: 5,
  },
  typeText1: {
    color: '#888',
  },
  commodityItem: {
    width: '50%',
    height: 320,
    marginBottom: 15,
    paddingHorizontal: '2%',
  },
  commodityImage: {
    width: '94%',
    height: 155,
    marginHorizontal: '3%',
    borderRadius: 15,
  },
  commodityText: {
    width: '84%',
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: '8%',
  },
  priceView: {
    width: '92%',
    marginHorizontal: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceStyle: {
    paddingTop: 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  priceNum: {
    fontSize: 19,
    fontWeight: '600',
    color: '#fa3d3c',
    lineHeight: 20,
  },
  priceTime: {
    fontSize: 12,
    color: '#bbb',
    lineHeight: 50,
  },
  publisherView: {
    marginTop: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  publisherAvatar: {
    ...Platform.select({
      ios: {
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 3.5,
      },
      android: {
        elevation: 7,
      },
    }),
  },
  publisherText: {
    fontSize: 14,
    color: '#000',
    lineHeight: 32,
    paddingLeft: 10,
  },
  zhong: {
    width: windowWidth,
    height: windowHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
