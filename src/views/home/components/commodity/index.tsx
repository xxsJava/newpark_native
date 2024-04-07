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
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import { Appbar, Avatar, Icon } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { navigate } from '../../../../config/routs/NavigationContainer';
import { productApi, productApip } from '../../../../api/sys/Recommended/index';
// import { postList } from '../../../../api/sys/home/index'
import { productType, productpType } from '../../../../api/sys/Recommended/types';
// import text from '../../../socializing/text';
import formatDate from './formatDate';
import DateTimeUtils from '../../../../utils/DateTimeUtils'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const typeData = [
  {
    index: 1,
    text: '价格',
  },
  {
    index: 2,
    text: '新发布'
  }
];
const List = ({ item }:any) => (
  <View style={styles.commoditylist}>
    <TouchableOpacity
      style={styles.commodityItem}
      onPress={() => {navigate('DetailsRoute', { data:item }); console.log('item在这里----',item);
    }}>
      <Image style={item.pims? styles.commodityImage : {}} source={{ uri: item.pims }} accessibilityLabel='图片' alt="头像" />
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
  </View>
)
const ProductView = () => {
  const [listData, setListData] = React.useState([]);
  var [pageNo, setpageNo] = React.useState(1);
  const [pageSize, setpageSize] = React.useState(12);
  const [priceSort, setpriceSort] = React.useState("DESC");
  const [PStatus, setPStatus] = React.useState("AUDIT");
  const [timeSort, settimeSort] = React.useState("DESC");
  const [refreshing, setRefreshing] = React.useState(false)
  const postLikePress = async () => {
    const product: productType = {
      pageNo: pageNo,
      pageSize: pageSize,
      priceSort: priceSort,
      PStatus: PStatus,
      timeSort: timeSort
    };
    const productData = await productApi(product);
    console.log('在这里', productData.data);
    for (var i = 0; i < productData.data.length; i++) {
      // 修改时间
      console.log(productData.data[i].pimgs.split(',')[0], '===================');
      if (productData.data[i].pimgs.split(',')[1]) {
        productData.data[i].pims = productData.data[i].pimgs.split(',')[0].split('[')[1]
      } else {
        productData.data[i].pims = productData.data[i].pimgs
      }
      console.log(productData.data[i].pims, '分割', productData.data[i].pimgs);
    }
    setListData(productData.data)
  }
  const changeOn = (addData: any) => {
    // 这个是对拿到的数据进行修改
    for (var i = 0; i < addData.data.length; i++) {
      // 修改时间
      console.log(addData.data[i].pimgs.split(',')[0], '===================');
      if (addData.data[i].pimgs.split(',')[1]) {
        addData.data[i].pims = addData.data[i].pimgs.split(',')[0].split('[')[1]
      } else {
        addData.data[i].pims = addData.data[i].pimgs
      }
      console.log(addData.data[i].pims, '分割', addData.data[i].pimgs);
      // 修改数组里面的图片
    }
    return addData;
  }
  React.useEffect(() => {
    if (listData.length > 0) {
      for (var i = 0; i < listData.length; i++) {
        // 修改时间
        listData[i].pims = listData[i].pimgs.split(',')[0].split('[')[1]
        console.log('houhouhou///////', listData[i].pims, '分割', listData[i].pimgs);
      }
    }
    setListData(listData);
    postLikePress();
    console.log('在这里开始里面', listData);

  }, []); // 只在组件挂载时调用一次
  const onload = async () => {
    setpageNo(pageNo += 1)
    console.log(pageNo, 'pageNo');
    const addData = await productApi({
      pageNo: pageNo,
      pageSize: pageSize,
      priceSort: priceSort,
      PStatus: PStatus,
      timeSort: timeSort
    });
    console.log(addData, '我是下拉刷新的值，找我++++');
    var newAdddata = changeOn(addData)
    const newlist = listData.concat(newAdddata.data);
    setListData(newlist)
  }
  const onrefresh = async () => {
    setpageNo(pageNo = 1)
    const addData = await productApi({
      pageNo: pageNo,
      pageSize: pageSize,
      priceSort: priceSort,
      PStatus: PStatus,
      timeSort: timeSort
    });
    var newAdddata = changeOn(addData)
    const newlist = listData.concat(newAdddata.data);
    setListData(newlist)
    setRefreshing(false)
  }
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
            </View>
          );
        })}
      </View>
      <View style={styles.scrollView}>
        <FlatList
          data={listData}
          renderItem={({ item }) => <List item={item} />}
          keyExtractor={item => item.pid}
          ListEmptyComponent={
            <View style={styles.zhong}>
              <Text style={{ fontSize: 18, color: 'black', marginBottom: 20 }}>暂时没有商品.....</Text>
              <Text>去其他地方看看吧！</Text>
            </View>
          }
          onEndReachedThreshold={0.1}
          onEndReached={
            () => { onload() }
          }
          onRefresh={onrefresh}
          refreshing={refreshing}
        />
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
  commoditylist: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    width: '100%',
    // height: 320,
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
