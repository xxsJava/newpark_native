import * as React from 'react';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import { View, Image, StyleSheet, Dimensions, ImageBackground, ScrollView, TouchableOpacity } from "react-native";


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Invite = (props:any) => {
    const [visible, setVisible] = React.useState(true);
    console.log('我是item哦哦哦哦',props.item);
    
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    if(props.item){
        // setVisible(true);
        // console.log('111111111');
        
    }
    const containerStyle = { backgroundColor: 'white', padding: 25, marginTop:480, paddingHorizontal:30, paddingVertical:90};
    const list2 = [
        {
            index: 0,
            img: require('../../assets/images/tup/wx.jpg'),
            text: '微信好友'
        },
        {
            index: 2,
            img: require('../../assets/images/tup/pyq.jpg'),
            text: '朋友圈'
        },
        {
            index: 3,
            img: require('../../assets/images/tup/xlwb.jpg'),
            text: '新浪微博'
        },
        {
            index: 4,
            img: require('../../assets/images/tup/zflj.jpg'),
            text: '复制链接'
        },
    ]
    return (
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={styles.modelType} >
        <ScrollView horizontal={true} style={styles.mt2list}>
            {
                list2.map(item => {
                    return (
                        <TouchableOpacity key={item.index} style={styles.mtlist} onPress={() =>{console.log(item.text);
                        }}>
                            <Image source={item.img} style={[styles.mtImg, item.text == '新浪微博' ? { width: 78 } : null]} accessibilityLabel='图片' alt="头像"></Image>
                            <View style={styles.zi}>
                                <Text style={styles.h4}>{item.text}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    </Modal> 
    )
}
export default Invite;
const styles = StyleSheet.create({
    modelType: {
        position: 'absolute',
        bottom: 0,
        height: windowHeight
    },
    mt2list: {
        flexDirection: 'row',
        width: windowWidth,
        flexWrap: 'wrap'
    },
    mtlist: {
        width: 120
    },
    mtImg: {
        width: 60,
        height: 60
    },
    zi:{
        marginTop:12,
        justifyContent:'center'
    },
    h4: {
        fontSize: 16,
        fontWeight: 'bold'
    },

})


