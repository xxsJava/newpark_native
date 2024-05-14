import { Button, ButtonText } from '@gluestack-ui/themed';
import * as React from 'react';
import { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text } from 'react-native';
import { View } from 'react-native-animatable';
import { applyList } from '../../../api/imApi';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ReqApp = (item:any) => {
    
    const [listApplys,setListApplys] = useState([]);

    const applyListss = async () => {

        const params = {
            "userID": "1742430171993788416",
            "pagination": {
              "pageNumber": 1,
              "showNumber": 10
            }
          };
        const applys = await applyList(params);
        console.log('获取--------->',applys);
        setListApplys(applys.data.FriendRequests);  
    }

    React.useEffect(()=>{
        applyListss();
    },[])

    const listPeople = [
        {
            avatar: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/55093421-871c-43c7-803f-1fe23fced837.jpg',
            name: '联系人1',
            agree: true,
            index: 0,
            validation: 'hello'
        },
        {
            avatar: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/55093421-871c-43c7-803f-1fe23fced837.jpg',
            name: '联系人2',
            agree: false,
            index: 1,
            validation: ''
        },
        {
            avatar: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/55093421-871c-43c7-803f-1fe23fced837.jpg',
            name: '联系人3',
            agree: false,
            index: 2,
            validation: '加个好友吧加个好友吧加个好友吧加个好友吧加个好友吧'
        }
    ];
    
    return (
        <View style={{ width: windowWidth, height: windowHeight,marginTop:10 }}>
            <View style={{ backgroundColor: '#fff' }}>
                <FlatList
                    data={listApplys}
                    renderItem={items}
                    // keyExtractor={item => item.index}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        </View>
    );
};

const Separator = () => {
    return <View style={styles.separator} />;
  };

const items = ({item}:any) =>{
    return (
            <View style={styles.heng}>
                <View style={styles.headImg}>
                    <Image
                        style={styles.tinyLogo}
                        source={{uri:item.toFaceURL}}
                        accessibilityLabel='图片'
                        alt="网络不佳"
                    />
                </View>
                <View style={[styles.heng,styles.bodyText]}>
                    <View>
                        <Text style={styles.name}>{item.toNickname}</Text>
                        <Text style={styles.descFont} numberOfLines={1}> {item.reqMsg}</Text>
                    </View>
                </View>
                <View style={styles.rgStart}>
                    
                    <View style={{marginRight:5}}><Button
                        size="sm"
                        variant="solid"
                        action="negative"
                        isDisabled={false}
                        isFocusVisible={false}
                        >
                        <ButtonText>拒绝</ButtonText>
                    </Button></View>
                    
                    <View><Button
                        size="sm"
                        variant="solid"
                        action="primary"
                        isDisabled={false}
                        isFocusVisible={false}
                        >
                        <ButtonText>同意</ButtonText>
                    </Button></View>
                    
                </View>
            </View>
    )
}
const styles = StyleSheet.create({
    search: {
        marginTop: 10,
        height: 43,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    name: {
        color: 'black',
        lineHeight: 20,
        fontSize: 16,
        marginBottom:3,
        fontWeight:'bold'
    },
    descFont:{
        fontSize:12,
        color:'#999',
        width:100
    },
    headImg:{
        width:60,
        height:60,
        marginBottom:3
    },
    tinyLogo: {
        width:'100%',
        height:'100%'
    },
    heng: {
        display: 'flex',
        flexDirection: 'row',
        padding:5,
        position: 'relative'
    },
    separator: {
        height: 0.1,
        backgroundColor: "#999",
        marginVertical: 4,
    },
    bodyText:{
        marginTop:5
    },
    rgStart:{
        position:'absolute',
        right:20,
        top:15,
        flexDirection: 'row'
    },
    textAgg:{
        fontSize:17
    }
})
export default ReqApp;
