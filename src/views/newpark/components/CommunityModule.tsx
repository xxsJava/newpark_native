import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { Image, View } from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { recommLook } from '../../../api/sys/Recommended/index';
import { recommLookType } from '../../../api/sys/Recommended/types';
import { navigate } from '../../../config/routs/NavigationContainer';

// import Text from '../../socializing/text';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CommunityModule = () => {
  const [selectedId, setSelectedId] = useState();
  const [recommList, setRecommList] = React.useState([]);
  const data: recommLookType = {
    pageNo: 1,
    pageSize: 5
  };
  const renders = async () => {
    const dataList = await recommLook(data);
    setRecommList(dataList.data);
    console.log(recommList, '这个是社区查看Api的------');
  }
  React.useEffect(() => {
    renders()
  }, []);
  const Item = ({ item, onpress, backgroundColor, textColor }:any) => (
    <TouchableOpacity onPress={onpress} style={[styles.item, { backgroundColor }]} >
      <Image source={{ uri: item.comPath }} style={item.comPath ? { width: 90, height: 90 } : { display: 'none' }}></Image>
      <View>
       <View style={{flexDirection:'row',alignItems:'center'}}>
       <Text style={{color:'#000',fontSize:16,textAlign:'center',fontWeight:'bold'}}>{item.comName}</Text>
       <Image source={require('../../../assets/images/tup/remen.png')} style={{width:30,height:30,marginLeft:6}}></Image>
       <Text style={{fontSize:12,color:'#F8B032',marginLeft:6}}>热度150</Text>
       </View>
        {/* <Text style={{textAlign:'left',color:'#F8B032',margin:3,fontSize:12,backgroundColor:'#fff'}}>{item.comLabel}</Text> */}
        <View style={[styles.zhong,{marginTop:8}]}>
        {
          item.comLabel.split('#').map((val: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined):any => {
            return <View style={[{backgroundColor:'#b0e8b7'},val? {padding:2,borderRadius:12,paddingHorizontal:6} : {display:'none'}]} key={val}>
                  <Text style={{color:'#e8b0e2',fontSize:12}}>#{val}</Text>
            </View>
          })
        }
        </View>
        <View style={[styles.zhong,{marginTop:8}]}>
          <Image source={require('../../../assets/images/tup/cd6.png')} style={{width:20,height:20}}></Image>
          <Image source={require('../../../assets/images/tup/cd6.png')} style={{width:20,height:20}}></Image>
          <Image source={require('../../../assets/images/tup/cd6.png')} style={{width:20,height:20}}></Image>
          <Text style={{fontSize:11,marginLeft:12}}>1位牛友正在讨论</Text>
        </View>
        {/* <Text style={{textAlign:'center',margin:3,color:'#000',fontSize:16}}>{item.comDesc}</Text> */}
        {/* <Text>{DateTimeUtils.formattedDateTime(item.comCreTime).split(' ')[0]}</Text> */}
      </View>
      <View style={styles.itemRight}>
        <Feather
          name="chevron-right"
          size={30}
          style={styles.rightIcon}
        />
      </View>
    </TouchableOpacity>
  )
  const commItem = ({ item }: any) => {
    const backgroundColor = item.comId === selectedId ? '#e8ecff' : '#F9FAFF';
    const color = item.comId === selectedId ? 'green' : 'blue';
    return (
      <Item
        item={item}
        onpress={() => { setSelectedId(item.comId); navigate('CommunityChannelRoute', item) }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    )
  }
  return (
    <ScrollView style={styles.scrollStyle}>
      <FlatList
        data={recommList}
        renderItem={commItem}
        keyExtractor={item => item.comId}
      />
    </ScrollView>
  )
}
export default CommunityModule;

const styles = StyleSheet.create({
  scrollStyle: {
    width: windowWidth,
    height: windowHeight,
    ...Platform.select({
      ios: {
        paddingHorizontal: 17,
      },
      android: {
        paddingHorizontal: 16,
      },
    }),
  },
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
        shadowOffset: { width: 0, height: 0 }, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
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
    borderRadius: 8
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
    color: '#000'
  },
  item: {
    backgroundColor: 'red',
    padding: 12,
    flexDirection: 'row',
    marginTop: 12,
    justifyContent:'space-between',
    alignItems:'center'
  },
  zhong:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  }
})