import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet, TextInput, Image,FlatList } from 'react-native';
import { getFriendList } from '../../../api/imApi/index';
import Storage from '../../../utils/AsyncStorageUtils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Item = ({title}:any) => (
    <View >
        {/* <Image source={{uri:}}></Image> */}
      <Text>{title.friendUser.nickname}</Text>
    </View>
  );
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const xr = async() => {
    const uId = await Storage.get('usr-uId');
    const params = {
      "userID": uId,
      "pagination": {
        "pageNumber": 1,
        "showNumber": 50
      }
    };
    // 获取好友的列表
    const friLList = await getFriendList(params)
    console.log('---->获取的朋友数据',friLList.data.friendsInfo);
   return friLList.data.friendsInfo;
  }

 
const ChatRoom = () => {
    const [friendData,setFriendData] = useState([]);
    const xr = async() => {
        const uId = await Storage.get('usr-uId');
        const params = {
          "userID": uId,
          "pagination": {
            "pageNumber": 1,
            "showNumber": 50
          }
        };
        // 获取好友的列表
        const friLList = await getFriendList(params)
        console.log('---->获取的朋友数据',friLList.data.friendsInfo);
       setFriendData(friLList.data.friendsInfo);
      }
     
   
    React.useEffect(()=>{xr();},[])
    const [valuesele, onChangeTextsele] = React.useState('');
    console.log(valuesele,'---->获取到的输入框的值');
    
    return (
        <View style={styles.contain}>
            <View style={{backgroundColor:'#E9EAED',flexDirection:'row',alignItems:'center',justifyContent:'center',paddingHorizontal:12,borderRadius:3,margin:8}}>
                <Image source={require('../../../assets/images/search.png')}></Image>
                <TextInput onChangeText={text => onChangeTextsele(text)} value={valuesele} style={styles.select} placeholder="搜索" />
            </View>
            <View style={{backgroundColor:'#F8F8F8',height:12,width:windowWidth}}></View>
            <View style={styles.div}>
                <Text style={styles.h3}>我的好友</Text>
                <Image source={require('../../../assets/images/chevron-right.png')} style={{width:20,height:20}}></Image>
            </View>
            <View style={{backgroundColor:'#F9FAFC',padding:5}}>
                <Text style={{fontSize:12}}>最近会话</Text>
            </View>
            <FlatList
                 data={friendData}
                 renderItem={({item}) => <Item title={item} />}
                 keyExtractor={item => item.operatorUserID.toString()}
            >

            </FlatList>
        </View>
    )
};

export default ChatRoom;

const styles = StyleSheet.create({
    contain: {
        width: windowWidth,
        height: windowHeight,
        padding:12,
        backgroundColor:'#fff'
    },
    select: {
        backgroundColor: '#E9EAED',
        color: '#000',
        fontSize: 14,
        paddingHorizontal:11,
        paddingVertical:3
    },
    h3:{
        fontSize:17,
        color:'#000'
    },
    div:{
        height:46,
        backgroundColor:'#fff',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:8
    }
})