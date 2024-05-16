// import * as React,{} from 'react'
import React, { useState, useEffect } from 'react';
import { View } from 'react-native-animatable';
// import { Card , Text} from '@rneui/themed';
import {
    Dimensions,
    StyleSheet,

} from 'react-native'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Message = [
    {
        name: '张老三',
        ava: require('../../assets/images/tup/l2.png'),
        mes: '还好吗？'
    },
    {
        name: '赵阿福',
        ava: require('../../assets/images/tup/l1.png'),
        mes: '岁岁平安，如愿以偿,我和你说一件事啊，哈哈哈哈哈，你说好笑不好笑，然后在这个杯子里面，这滴水变色啦！我和你说一件事啊，哈哈哈哈哈，你说好笑不好笑，然后在这个杯子里面，这滴水变色啦！'
    },
    {
        name: '刘老大',
        ava: require('../../assets/images/tup/z1.png'),
        mes: '无心之举，才是本心所愿'
    },
    {
        name: '熊二哈',
        ava: require('../../assets/images/tup/z2.png'),
        mes: '给您发送了一张照片'
    },

]
const MainMess = () => {
    // const [fileData, setFileData] = useState({});
    return (
        <View>
           

            {/* {Message.map(item => {
                    return(
                        <Card>
                        <Card.Title>{item.name}</Card.Title>
                        <View style={styles.heng}>
                             <Card.Image source={item.ava} style={styles.ava} accessibilityLabel='图片' alt="头像"/>
                            <View style={styles.chat}>
                             <Text style={styles.zi}>{item.mes}</Text>
                            </View>
                        </View>
                     <Card.Divider/>
                     </Card>
                    )
                   
                })} */}

        </View>
    )
}
export default MainMess;
const styles = StyleSheet.create({
    heng: {
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor:'pink',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    ava: {

        width: 60,
        height: 60,
        borderWidth: 1,
        margin: 4
    },
    chat: {
        backgroundColor: '#F2F2F2',
        width: '70%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    zi: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: 14
    }
})