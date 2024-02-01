import React from 'react';
import { Trans } from 'react-i18next';
import { Dimensions, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Appbar } from 'react-native-paper';

function QuestList() {
    const list = [{
        index: 1,
        title: '怎么管理群聊'
    },
    {
        index: 2,
        title: '订单收不到怎么办'
    },
    {
        index: 3,
        title: '找不到我的地址'
    }];
    return (
        <ScrollView style={styles.outbord}>
            <View>
                <Text style={styles.queTit}>请问您想问这些问题吗～</Text>
                <ScrollView style={styles.tit}>
                    <Image source={require('../../../../assets/images/tup/yiwen.png')} style={styles.wanttu}/>
                    <Text style={styles.wantreq}>
                        猜您想问
                    </Text>
                </ScrollView>
            </View>
            {
                list.map(item => {
                    return (
                    <TouchableOpacity key={item.index} style={styles.litlist} activeOpacity={0.4}>
                       <Text> {item.title}</Text>
                        <Image style={styles.listimage} source={require('../../../../assets/images/chevron-right.png')} />
                    </TouchableOpacity>
                )})
            }
        </ScrollView>
    );
}
const LittleTips = () => {
    const list1 = [
        {
            index:1,
            main:'服务评价'
        },
        {
            index:2,
            main:'退换货'
        },
        {
            index:3,
            main:'售后查询'
        },
        {
            index:4,
            main:'修改密码'
        },

        {
            index:5,
            main:'官方客服电话'
        }
    ];
    return(
        <View style={styles.litparent}>
            {list1.map(item => {
                return( <View style={styles.litbox}>
                    <Text style={styles.litfont}>{item.main}</Text>
                 </View>
                )
            }
            )}
        </View>
    )
}

// const App = () => {
//     const createTwoButtonAlert = () =>
//       Alert.alert(
//         "Alert Title",
//         "My Alert Msg",
//         [
//           {
//             text: "Cancel",
//             onPress: () => console.log("Cancel Pressed"),
//             style: "cancel"
//           },
//           { text: "OK", onPress: () => console.log("OK Pressed") }
//         ]
//       );
//       const createThreeButtonAlert = () =>
//       Alert.alert(
//         "Alert Title",
//         "My Alert Msg",
//         [
//           {
//             text: "Ask me later",
//             onPress: () => console.log("Ask me later pressed")
//           },
//           {
//             text: "Cancel",
//             onPress: () => console.log("Cancel Pressed"),
//             style: "cancel"
//           },
//           { text: "OK", onPress: () => console.log("OK Pressed") }
//         ]
//       );

//     return (
//       <View style={styles.container}>
//         <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
//         <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
//       </View>
//     );
//   }  
const Onlineservice = ({ navigation }: any) => {

    return (
        <KeyboardAvoidingView behavior='position'>
            <View style={styles.parentView}>
                <Appbar.Header>
                    <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigation.goBack()} />
                    <Text allowFontScaling={false} style={styles.derTexthea}>
                        <Trans>navigationBar.title26</Trans>
                    </Text>
                    <TouchableOpacity>
                        <Image style={styles.headerImage} source={require('../../../../assets/images/tup/shezhi.png')}></Image>
                    </TouchableOpacity>
                </Appbar.Header>

                <SafeAreaView style={styles.mainContent}>
                    {/* <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => setReceiver(text)}
                    placeholder={'聊天人姓名'}
                    value={receiver}
                    onSubmitEditing={sendDo}
                /> */}
                    <ScrollView style={styles.chatBody}>
                        <QuestList />
                        <View style={styles.bigTips}>
                            <Text style={styles.wait}>
                                正在转接中，人工客服马上为您服务～
                            </Text>
                        </View>

                        <View>
                            <LittleTips />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Onlineservice;
// export default App;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    litparent:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:400
    },
    litbox:{
        borderColor:'#BBBBBB',
        backgroundColor:'#F0EBE1',
        borderWidth:1,
        borderRadius:10,
        padding:3,
        width:68
    },
    litfont:{
        fontSize:9,
        color:'#868383',
        textAlign:'center'
    },
    wait:{
        color:'#8A8585'
    },
    bigTips:{
        marginTop:20,
        padding:3,
        alignItems:'center',
        backgroundColor:'#FFF2D9',
        opacity:0.7,
        width:windowWidth * 0.8,
        borderRadius:10
    },
    wantreq:{
        color:'#F49F0B',
        marginLeft:8
    },
    wanttu:{
        width:20,
        height:20
    },
    tit:{
        flexDirection:'row'
    },

    queTit:{
        fontSize:16,
        padding:8,
        color:'black',
        fontWeight:'bold'
    },
    litlist:{
      padding:6,
       margin:5,
       flexDirection:"row",
       justifyContent:'space-between'
    },
    outbord:{
        backgroundColor:'#fff',
        borderRadius:20,
        width:260,
        padding:10
    },
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    parentView: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor:'red'
    },
    headerImage: {
        width: 22,
        height: 22
    },
    listimage: {
        width: 16,
        height: 16,
        color: '#ccc'
    },
    scrollView: {
        width: windowWidth,
        height: windowHeight - 45,
        position: 'relative',
    },
    derTexthea: {
        width: '78%',
        fontSize: 17,
        color: '#000',
        lineHeight: 45,
        textAlign: 'center',
    },
    mainContent: {
        width: windowWidth,
        position: 'relative',
        backgroundColor: '#FFF',
        ...Platform.select({
            ios: {
                height: windowHeight - 80,
            },
            android: {
                height: windowHeight - 60,
            }
        })
    },
    chatBody: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F0EDED'
    },
    chatMessage: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textStyle: {
        position: 'relative',
        backgroundColor: '#efebfa',
        borderRadius: 6,
        alignSelf: 'flex-start',
        marginBottom: 25,
        marginTop: 8,
        ...Platform.select({
            ios: {
                padding: 10,
                shadowColor: '#ccc',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 3.5,
            },
            android: {
                padding: 8,
                elevation: 7,
            }
        })
    },
    chatReceiver: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textReceiver: {
        color: '#FFF',
        marginLeft: 'auto',
        backgroundColor: '#faba3c',
    },
    avatarImage1: {
        marginRight: 10,
        marginTop: -10
    },
    avatarImage2: {
        marginLeft: 10,
        marginTop: -10
    },
    messageText: {
        fontSize: 15,
        color: '#000'
    },
    messageImage: {
        width: 220,
        height: 150,
        borderRadius: 15
    },
    messageReceiver: {
        color: '#FFF'
    },
    chatName: {
        fontSize: 12,
        position: 'absolute',
        top: -15,
        fontWeight: 'bold',
    },
    chatNameReceiver: {
        fontSize: 13,
        position: 'absolute',
        top: -20,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 'auto',
    },
    chatTimeStamp: {
        marginLeft: 10,
        fontSize: 12,
    },
    avatarView: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    avatarStyle: {
        position: 'relative'
    },
    stateStyle: {
        width: 12,
        height: 12,
        top: 22,
        right: -3,
        borderRadius: 6,
        backgroundColor: '#26c78c',
        position: 'absolute'
    },
    appbarStyle: {
        borderWidth: 0,
        backgroundColor: '#FFF'
    },
    avatarText: {
        color: '#000',
        lineHeight: 34,
        marginLeft: 10
    },
    sendColumn: {
        height: 130,
        marginTop: 13,
        paddingTop: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        ...Platform.select({
            ios: {
                shadowColor: '#ccc',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 3.5,
                // marginBottom:-30,
            },
            android: {
                elevation: 10,
            }
        })
    },
    inputBox: {
        position: 'relative',
    },
    sendColumnInput: {
        width: '100%',
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5'
    },
    inputBoxIcon: {
        position: 'absolute',
        top: -6,
        right: 5,
        zIndex: 10
    },
    controlStrip: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    controlIcon: {
        flex: 1
    }
});
