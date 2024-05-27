/**
 * 代码描述: 更多 
 * 作者:zhn
 * 修改时间:2024/4/15 16:10:11
 */

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Dimensions, FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import StylesALL from "../../../../styles";
import Colors from "../../../../styles/Color";
import FontSize from "../../../../styles/FontSize";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Tab = createMaterialTopTabNavigator();
const batingData = [
    {
        nikeName:'咖啡牛',
        money:'599',
        pmA:32,
        uid:'10001',
        path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%2810%29.jpg'
    },
    {
        nikeName:'野猪亨利',
        money:'400',
        pmA:31,
        uid:'10002',
        path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%2811%29.jpg'
    },
    {
        nikeName:'小牛',
        money:'399',
        pmA:29,
        uid:'10003',
        path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%283%29.jpg'
    },
    {
        nikeName:'亨利',
        money:'398',
        pmA:28,
        uid:'10004',
        path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%284%29.jpg'
    },
    {
        nikeName:'杰克',
        money:'300',
        pmA:26,
        uid:'10005',
        path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%285%29.jpg'
    },
    {
        nikeName:'小王',
        money:'299',
        pmA:20,
        uid:'10006',
        path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%287%29.jpg'
    },
    {
        nikeName:'小Fly',
        money:'298',
        pmA:10,
        uid:'10007',
        path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%286%29.jpg'
    },
    {
        nikeName:'呆瓜',
        money:'199',
        pmA:1,
        uid:'10008',
        path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%289%29.jpg'
    }
]

const batingItem = ({item}:any) =>{
    return(
<View style={styles.bodyListView}>
                    <View style={styles.headImg}>
                        <Image style={[StylesALL.imgSize,styles.headImgR]} source={{uri:item.path}} />
                    </View>
                    <View style={styles.headTitle}>
                        <Text style={[Colors.fWhite,FontSize.f16]}>{item.nikeName}</Text>
                        <Text style={[Colors.f99,FontSize.f14]}>${item.money}</Text>
                    </View>

                    <View style={styles.iconView}>
                        <View style={styles.imgIcon}>
                            <Image style={StylesALL.imgSize} source={require('../../../../assets/images/bg/ss.png')}/>
                        </View>
                        <View style={styles.rTopTitle}>
                            <Text style={[styles.rTitleText,Colors.fWhite,FontSize.f14]}>{item.pmA}</Text>
                        </View>
                    </View>
                </View>
    )
}

const LeaderBoard = () => {
    const [order, setOrder] = React.useState(1);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headView}>
                <View style={styles.headStyIcon}>
                    <Feather name="chevron-left" size={28} color="#fff" />
                </View>
                <View><Text style={[FontSize.f18,Colors.fWhite,styles.fLineH]}>排行榜</Text></View>
            </View>
            <Tab.Navigator
            style={{ backgroundColor: '#191B1F' }}
            screenOptions={{
                lazy: true,
                tabBarPressColor: '#000',
                tabBarStyle: styles.tabParent,
                animationEnabled: true,
                tabBarIndicatorStyle: {
                    width: 0,
                },
                tabBarLabelStyle: { fontSize: 12, fontWeight: '600' ,color:'#fff'}
            }}>
                <Tab.Screen name="周" component={batingView} />
                <Tab.Screen name="月" component={batingView} />
                <Tab.Screen name="季" component={batingView} />
            </Tab.Navigator>
        </SafeAreaView>
    )

};

const batingView = () => {
    return(
        <><View style={styles.bodyLeader}>
            <ImageBackground style={StylesALL.imgSize} source={require('../../../../assets/images/bg/phb.png')}>

                <View style={styles.top1}>
                    <View style={[styles.topImgSize]}>
                        <Image style={[StylesALL.imgSize, styles.top1Img, styles.topImgR]} source={{ uri: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg' }} />
                    </View>
                    <View>
                        <Text style={[FontSize.f16, Colors.fWhite, styles.topText]}>Mike</Text>
                    </View>
                    <View>
                        <Text style={[FontSize.f14, Colors.fBF, styles.topText]}>$1200</Text>
                    </View>
                </View>

                <View style={styles.top2}>
                    <View style={[styles.topImgSizeA]}>
                        <Image style={[StylesALL.imgSize, styles.top2Img, styles.topImgR]} source={{ uri: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/55093421-871c-43c7-803f-1fe23fced837.jpg' }} />
                    </View>
                    <View>
                        <Text style={[FontSize.f16, Colors.fWhite, styles.topText]}>小学牛</Text>
                    </View>
                    <View>
                        <Text style={[FontSize.f14, Colors.fC44, styles.topText]}>$1100</Text>
                    </View>
                </View>

                <View style={styles.top3}>
                    <View style={[styles.topImgSizeA]}>
                        <Image style={[StylesALL.imgSize, styles.top3Img, styles.topImgR]} source={{ uri: 'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%282%29.jpg' }} />
                    </View>
                    <View>
                        <Text style={[FontSize.f16, Colors.fWhite, styles.topText]}>咖啡</Text>
                    </View>
                    <View>
                        <Text style={[FontSize.f14, Colors.fEC, styles.topText]}>$900</Text>
                    </View>
                </View>
            </ImageBackground>
        </View><View style={styles.bodyList}>
                <View style={styles.bodyTitle}>
                    <Text style={[FontSize.f18, Colors.fWhite]}>校园新星</Text>
                </View>

                <FlatList
                    data={batingData}
                    renderItem={batingItem}
                    keyExtractor={item => item.uid} />
            </View>
        </>
    )
}

export default LeaderBoard;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#191B1F',
    },
    headView:{
        height: 40,
        // borderWidth:1,
        flexDirection:'row'
    },
    headStyIcon:{
        width:40,
        justifyContent:'center',
        marginLeft:20
    },
    fLineH:{
        lineHeight:35
    },
    bodyHeadView:{
        borderWidth:1,
        // height:80
    },
    bodyLeader:{
        height:200,
        backgroundColor: '#191B1F'
    },
    topImgSize:{
        width:90,
        height:90,
    },
    topImgSizeA:{
        width:70,
        height:70,
    },
    topImgR:{
        borderRadius:50,
        borderWidth:2
    },
    top1:{
        position:'absolute',
        left:'38.5%'
    },
    top1Img:{
        borderColor:'#A57EEF',
        
    },
    top2:{
        position:'absolute',
        top:60,
        left:40
    },
    top2Img:{
        borderColor:'#D56770',
    },
    top3:{
        position:'absolute',
        top:60,
        right:40
    },
    top3Img:{
        borderColor:'#EE803A',
    },
    topText:{
        textAlign:'center',
        marginTop:10
    },
    bodyList:{
        flex:1,
        backgroundColor: '#191B1F',
        paddingTop:20
    },
    bodyListView:{
        width:'90%',
        height: 80,
        marginLeft:'5%',
        backgroundColor:'#2E3034',
        borderRadius:15,
        flexDirection:'row',
        marginBottom: 20
    },
    bodyTitle:{
        marginLeft:20,
        marginBottom:10
    },
    headImg:{
        width: 50,
        height: 50,
        marginLeft:20,
        marginTop:15
    },
    headImgR:{
        borderRadius:50
    },
    headTitle:{
        marginTop:15,
        marginLeft:15
    },
    imgIcon:{
        width:16,
        height:10
    },
    iconView:{
        position:'absolute',
        right:30,
        top:35,
        flexDirection:'row'
    },
    rTopTitle:{
        width:30,
        height:30,
        borderRadius:40,
        borderWidth:1,
        borderColor:'#fff',
        position:'relative',
        top:-10,
        left: 10
    },
    rTitleText:{
        lineHeight:25,
        textAlign:'center'
    },
    tabParent:{
        backgroundColor: '',
        // width:'15%'
    }
})