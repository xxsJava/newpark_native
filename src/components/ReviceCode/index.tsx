import React from 'react';
import { Text, StyleSheet, Dimensions,Image,TouchableOpacity,Linking } from 'react-native';
import { View } from 'react-native-animatable';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
function freeGet() {
    console.log('跳转到下载app的页面');
    
}
const ReviceCode = () => {
        const handleOpenApp = () => {
          Linking.openURL('yourapp://somepath');
        };
    return (
       <View style={styles.parentBox}>
            <View style={styles.heng}>
                <Text style={styles.h5}>您的好友赠送您:</Text>
                <Image source={require('../../assets/images/tup/tyd.png')} style={styles.tyh} accessibilityLabel='图片'></Image>
            </View>
            <View style={{justifyContent:'center',
        alignItems:'center'}}>
                <Text style={styles.hh4}>
                    <Text style={{fontSize:40}}>20</Text>
                    枚新园豆红包
                </Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() =>freeGet()}>
                <Text style={styles.h6}>免费领取</Text>
                <Image source={require('../../assets/images/tup/能量豆.png')} style={styles.beanIcon} accessibilityLabel='图片'></Image>
            </TouchableOpacity>
            <View style={styles.bigBox}>
                <Text style={styles.h3}>新园豆是什么？</Text>
                <View style={styles.minBox}>
                    <Text style={styles.h8}>新园豆为<Text style={styles.h7}>新园APP虚拟币</Text>,可用于组建团队、兑换优惠券、获取成就徽章等 。</Text>
                </View>
            </View>
            <View style={styles.bigBox}>
                <Text style={styles.h3}>激活新园豆的方法</Text>
                <View style={styles.minBox}>
                    <Text style={styles.h8}>领取新园豆后 , 请打开并登录新园APP , 即可使用您的新园豆并激活邀请者的新园豆红包 ! </Text>
                </View>
            </View>
            <TouchableOpacity style={{position:'absolute',
        bottom:40}} onPress={handleOpenApp}>
                <Text style={{color:'red',textDecorationLine:'underline'}}>打开新园APP</Text>
            </TouchableOpacity>
       </View>
    );
};
export default ReviceCode;

const styles = StyleSheet.create({
    parentBox: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#FAF5E7',
        paddingVertical:40,
        paddingHorizontal:20,
        alignItems:'center'
    },
    tyh:{
        width:180,
        height:180
    },
    h5:{
        fontSize:20,
        color:'#000',
        marginTop:100,
        marginLeft:20
    },
    h6:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    },
    h3:{
        fontSize:18,
        color:'#000'
    },
    h7:{
        color:'#000',
        fontSize:14
    },
    h8:{
        lineHeight:28,
        color:'#726F6F'
    },
    heng:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    hh4:{
        color:'red',
        fontSize:20,
        fontWeight:'bold'
    },
    btn:{
        backgroundColor:'#F5A30B',
        borderRadius:30,
       marginTop:30,
        width:'60%',
        padding:20,
        marginBottom:10
    },
    beanIcon:{
        position:'absolute',
        right:-16,
        top:-15,
        width:45,
        height:40
    },
    bigBox:{
        backgroundColor:'#fff',
        borderRadius:20,
        padding:18,
        marginTop:20
    },
    minBox:{
        backgroundColor:'#FCF7EB',
        borderRadius:18,
        padding:18,
        marginTop:10
    }
});

