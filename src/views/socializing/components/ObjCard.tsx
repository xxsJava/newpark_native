
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Avatar, Switch } from 'react-native-paper';
import { navigate } from '../../../config/routs/NavigationContainer';

const windowwidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// 开关的
interface switchListType {
    TiTle: string,
    key: string
};
interface timeGroupType {
    val:string
};
export default class ObjCard<T> extends Component {
    switchList: { TiTle: string; key: string; }[] | any;
    timeGroup:{index:number;val:string; }[] | any;
    constructor(props: any) {
        super(props);
        this.state = {
            // 这个是显示模态框的
            isShow: false,
            watchTime: '30s',
            timeSelect:'30s',
            switchControlList: {},
        }
        this.switchList = [
            {
                TiTle: '置顶会话',
                key: 'topTalk'
            },
            {
                TiTle: '消息免打扰',
                key: 'muteNotifications'
            },
            {
                TiTle: '加入黑名单',
                key: 'joinBlack'
            }

        ];
        this.timeGroup = [
            {
                index:1,
                val:'30s'
            },
            {
                index:2,
                val:'5分钟'
            },
            {
                index:3,
                val:'1小时'
            }
        ]
    };
    // 这个是点击选择的时间
    setTimeSele = (index:number,val:string) => {
        this.setState({timeSelect:val});
        console.log(this.state.timeSelect,val);
        this.setWatchTime(val)
        // 关闭模态框
        
    }
    // 选择阅后即焚的模态框取反
    setModel = () => {
        this.setState({ isShow: !this.state.isShow });
        console.log(this.state.isShow, '模态框的显示');

    }
    //显示阅后即焚的时间
    setWatchTime = (data: string) => {
        this.setState({ watchTime: data });
        console.log(data);
        console.log(this.state.watchTime);
    }

    setIsSwitchOn = (key: string, value: boolean) => {
        console.log(key + ':' + value);
        if (key == 'yhjf') {
            if (value) {
                console.log('阅后即焚打开了');

            } else {
                console.log('阅后即焚关闭了');
            }
        }
        if (key == 'topTalk') {
            if (value) {
                console.log('置顶聊天打开了');

            } else {
                console.log('置顶聊天关闭了');

            }
        }
        if (key == 'muteNotifications') {
            if (value) {
                console.log('消息免打扰打开了');

            } else {
                console.log('消息免打扰关闭了');

            }
        }
        if (key == 'joinBlack') {
            if (value) {
                console.log('加入黑名单打开了');

            } else {
                console.log('加入黑名单关闭了');

            }
        }
        this.setState({
            switchControlList: Object.assign(this.state.switchControlList, {
                [key]: !this.state.switchControlList[key]
            })
        });
    }
    render() {
        return (
            <SafeAreaView style={styles.containes}>
                <View>
                    <TouchableOpacity style={styles.avatarStyle}>
                        <View style={styles.info}>
                            <Avatar.Image size={46} source={require('../../../assets/images/avatar-nv.png')} accessibilityLabel='头像'></Avatar.Image>
                            <Text style={styles.h2}> SDK18_6699</Text>
                        </View>
                        <Image source={require('../../../assets/images/chevron-right.png')} style={styles.rightIcon} accessibilityLabel='图片' alt="头像" />
                    </TouchableOpacity>
                    <View style={styles.xian}></View>
                    <View style={styles.boxmin}>
                        {this.switchList.map((item: switchListType) => {
                            return <View key={item.key} style={styles.boxStylemin}>
                                <Text style={this.state.switchControlList[item.key] ? styles.h6 : styles.h6null}>{item.TiTle}</Text>
                                <View>
                                    <Switch value={this.state.switchControlList[item.key]} onValueChange={(value) => { this.setIsSwitchOn(item.key, value); }} color='#ECB32C' />
                                </View>
                            </View>
                        })}
                    </View>
                    <View style={styles.xian}></View>
                    <View>
                        <View style={styles.boxStylemin}>
                            <Text style={this.state.switchControlList['yhjf'] ? styles.h6 : styles.h6null}>阅后即焚</Text>
                            <View>
                                <Switch value={this.state.switchControlList['yhjf']} onValueChange={(value) => { this.setIsSwitchOn('yhjf', value); }} color='#ECB32C' />
                            </View>
                        </View>
                        <View style={styles.boxStylemin}>
                            <Text style={styles.h6}>阅后即焚时间</Text>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setModel()}>
                                <Text>{this.state.watchTime}</Text>
                                <Image source={require('../../../assets/images/chevron-right.png')} style={{ width: 18, height: 18, marginLeft: 5 }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.xian}></View>
                  
                    <TouchableOpacity style={styles.boxStyle}>
                        <Text style={styles.h6r}>清空聊天记录</Text>
                        <Image source={require('../../../assets/images/chevron-right.png')} style={styles.rightIcon} accessibilityLabel='图片' alt="头像" />
                    </TouchableOpacity>
                    {/* <View style={styles.boxmin}>
                        <TouchableOpacity style={styles.boxStylemin1} onPress={() => navigate('CheckRoute', { id: '123', type: 1 })}>
                            <Image source={require('../../../assets/images/tup/qunfaxinxi.png')} style={styles.rightIcon} accessibilityLabel='图片' alt="头像" />
                            <Text style={styles.h7}>发消息</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
                <View style={{width:windowwidth,position:'absolute',bottom:60,alignItems:'center',justifyContent:'center',left:0,height:120}}>
                    <TouchableOpacity style={{backgroundColor:'#FE4D4F',paddingHorizontal:12,paddingVertical:8,borderRadius:8}}>
                        <Text style={{color:'#fff',fontSize:16}}>删除好友</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ position: 'absolute', width: windowwidth, height: windowHeight, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={this.state.isShow ? { width: windowwidth, height: windowHeight, backgroundColor: '#000', position: 'absolute', top: 0, left: 0, opacity: 0.3 } : { display: 'none' }} onPress={() => this.setModel()}></TouchableOpacity>
                    <View style={this.state.isShow ? styles.mainMtk:{display:'none'}}>
                        <View style={styles.header}>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/images/chevron-left.png')} style={{ width: 20, height: 20 }}></Image>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, color: '#000' }}>设置禁言</Text>
                            <TouchableOpacity onPress={()=>{this.setModel()}}>
                                <Text style={{ color: '#1685F3', fontSize: 16 }}>保存</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            {
                                this.timeGroup.map((item:timeGroupType) => {
                                    return(
                                        <TouchableOpacity style={[{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:8},this.state.timeSelect == item.val ? {backgroundColor:'#F3F8FF'}:{backgroundColor:'#fff'}]} onPress={() =>{this.setTimeSele(item.index,item.val)}} key={item.index}>
                                            <Text style={{fontSize:16,color:'#000'}}>{item.val}</Text>
                                           <Image source={require('../../../assets/images/tup/duihao.png')} style={{width:30,height:30}}></Image>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    containes: {
        width: windowwidth,
        height: windowHeight,
        backgroundColor: '#fff'
    },
    xian: {
        backgroundColor: '#F2F2F2',
        height: 10,
        width: windowwidth
    },
    appbarStyle: {
        borderWidth: 0,
        backgroundColor: '#FFF',
        zIndex: 999
    },
    h4: {
        fontSize: 19,
        color: '#000'
    },
    h2: {
        color: '#000',
        fontSize: 21,
        marginLeft: 8
    },
    h6: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000'
    },
    h6null: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ccc'
    },
    h6r: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'red'
    },
    h7: {
        fontSize: 16,
        color: '#F49F0B',
        fontWeight: 'bold',
        marginLeft: 8
    },
    avatarStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 12,
        alignItems: 'center',
        // 阴影的配置
        elevation: 2, // 适配android的
        shadowOffset: { width: 0, height: 0 }, // 以下4项适配ios
        shadowColor: 'black',
        shadowOpacity: .3,
        shadowRadius: 2
    },
    rightIcon: {
        width: 20,
        height: 20
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxStyle: {
        elevation: 2, // 适配android的
        shadowOffset: { width: 0, height: 0 }, // 以下4项适配ios
        shadowColor: 'black',
        shadowOpacity: .3,
        shadowRadius: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
    },
    boxStylemin: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    boxmin: {
        elevation: 2, // 适配android的
        shadowOffset: { width: 0, height: 0 }, // 以下4项适配ios
        shadowColor: 'black',
        shadowOpacity: .3,
        shadowRadius: 2,
        backgroundColor: '#fff',
       
    },
    boxStylemin1: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 18,
        borderBottomWidth: 1,
        borderColor: '#BBBBBB'
    },
    boxStylemin2: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 12
    },
    mainMtk: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 12,
        padding: 12
    },
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent:'space-between'
    }
})
