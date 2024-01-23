
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Appbar, Avatar, Switch } from 'react-native-paper';
import { navigate } from '../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// 开关的
interface switchListType {
    TiTle:string,
    key:string
}
export default class ObjCard<T> extends Component{
    switchList: { TiTle: string; key: string; }[] | any;
    constructor(props: any) {
        super(props);
        this.state = {
            //     isSwitchOn: false,
            //     isSwitchOn1: true,
            //     isSwitchOn2: false,
            switchControlList: {}
        }
        this.switchList = [
            {
                TiTle: '置顶聊天',
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

        ]
    }
    setIsSwitchOn = (key: string,value:boolean) => {
        console.log(key+':'+value);
        if(key=='topTalk'){
            if(value) {
                console.log('置顶聊天打开了');
                
            }else{
                console.log('置顶聊天关闭了');
                
            }
        }
        if(key=='muteNotifications'){
            if(value) {
                console.log('消息免打扰打开了');
                
            }else{
                console.log('消息免打扰关闭了');
                
            }
        }
        if(key=='joinBlack'){
            if(value) {
                console.log('加入黑名单打开了');
                
            }else{
                console.log('加入黑名单关闭了');
                
            }
        }
        this.setState({
            switchControlList: Object.assign(this.state.switchControlList, {
                [key]: !this.state.switchControlList[key]
            })
        });
    }
    //    setIsSwitchOn = () => {
    //     this.setState({
    //         isSwitchOn : !this.state.isSwitchOn
    //     })
    // }
    // setIsSwitchOn1 = () => {
    //     this.setState({
    //         isSwitchOn1: !this.state.isSwitchOn1
    //     })
    // }
    // setIsSwitchOn2 = () => {
    //     this.setState({
    //         isSwitchOn2: !this.state.isSwitchOn2
    //     })
    // }
    render() {
        return (
            <View>
                <Appbar.Header style={styles.appbarStyle}>
                    <Appbar.BackAction onPress={() => navigate('SocializingStacker')} />
                    <View>
                        <Text style={styles.h4}>资料设置</Text>
                    </View>
                </Appbar.Header>
                <View>
                    <TouchableOpacity style={styles.avatarStyle}>
                        <View style={styles.info}>
                            <Avatar.Image size={46} source={require('../../../assets/images/avatar-nv.png')}></Avatar.Image>
                            <Text style={styles.h2}> SDK18_6699</Text>
                        </View>
                        <Image source={require('../../../assets/images/chevron-right.png')} style={styles.rightIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxStyle}>
                        <Text style={styles.h6}>搜索聊天记录</Text>
                        <Image source={require('../../../assets/images/chevron-right.png')} style={styles.rightIcon} />
                    </TouchableOpacity>
                    <View style={styles.boxmin}>
                        {this.switchList.map((item: switchListType) => {
                            return <View key={item.key} style={styles.boxStylemin}>
                                <Text style={ this.state.switchControlList[item.key]?styles.h6 :styles.h6null}>{item.TiTle}</Text>
                                <View>
                                    <Switch value={this.state.switchControlList[item.key]} onValueChange={(value) => { this.setIsSwitchOn(item.key,value); }} />
                                </View>
                            </View>
                        })}

                        {/* <View style={styles.boxStylemin}>
                            <Text style={styles.h6}>置顶聊天</Text>
                           <View>
                            <Switch value={this.state.isSwitchOn} onValueChange={() => this.setIsSwitchOn()} />
                           </View>
                        </View>
                        <View style={styles.boxStylemin}>
                            <Text style={styles.h6}>消息免打扰</Text>
                            <Switch value={this.state.isSwitchOn1} onValueChange={() => this.setIsSwitchOn1()} />
                        </View>
                        <View style={styles.boxStylemin}>
                            <Text style={styles.h6}>加入黑名单</Text>
                            <Switch value={this.state.isSwitchOn2} onValueChange={() => this.setIsSwitchOn2()} />
                        </View> */}
                    </View>
                    <TouchableOpacity style={styles.boxStyle}>
                        <Text style={styles.h6r}>清空聊天记录</Text>
                        <Image source={require('../../../assets/images/chevron-right.png')} style={styles.rightIcon} />
                    </TouchableOpacity>
                    <View style={styles.boxmin}>
                        <TouchableOpacity style={styles.boxStylemin1} onPress={() => navigate('CheckRoute',{id:'123',type:1})}>
                            <Image source={require('../../../assets/images/tup/qunfaxinxi.png')} style={styles.rightIcon} />
                            <Text style={styles.h7}>发消息</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.boxStylemin2}>
                            <Image source={require('../../../assets/images/tup/shipintonghua.png')} style={styles.rightIcon} />
                            <Text style={styles.h7}>音视频通话</Text>
                        </TouchableOpacity> */}
                    </View>
                        
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    h6null:{
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
        padding: 20,
        borderTopWidth: 1,
        alignItems: 'center',
        // 阴影的配置
        elevation: 6, // 适配android的
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
        elevation: 6, // 适配android的
        shadowOffset: { width: 0, height: 0 }, // 以下4项适配ios
        shadowColor: 'black',
        shadowOpacity: .3,
        shadowRadius: 2,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 20,
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
        elevation: 6, // 适配android的
        shadowOffset: { width: 0, height: 0 }, // 以下4项适配ios
        shadowColor: 'black',
        shadowOpacity: .3,
        shadowRadius: 2,
        backgroundColor: '#fff',
        marginTop: 20,

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
    }
})
