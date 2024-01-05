
import React, { useState, useEffect, Component } from 'react';
import { Appbar, Avatar, IconButton, Switch } from 'react-native-paper';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Platform,
    TextInput,
    Button,
    Image,
    Dimensions,
    ImageSourcePropType,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';
import { AvatarImageSource } from 'react-native-paper/lib/typescript/components/Avatar/AvatarImage';
import { navigate } from '../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// 开关的
//const [isSwitchOn, setIsSwitchOn] = React.useState(false);
// const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

export default class ObjCard extends Component {
   constructor(props:any) {
    super(props);
    this.state = {
        isSwitchOn:false
    }
   
   }
   setIsSwitchOn = () => {
    this.setState({
        isSwitchOn : !this.state.isSwitchOn
    })
}
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
                        <View style={styles.boxStylemin}>
                            <Text style={styles.h6}>置顶聊天</Text>
                           <View>
                           <Switch value={this.state.isSwitchOn} onValueChange={() => this.setIsSwitchOn} />
                           </View>
                        </View>
                        <View style={styles.boxStylemin}>
                            <Text style={styles.h6}>消息免打扰</Text>
                            <Image source={require('../../../assets/images/chevron-right.png')} style={styles.rightIcon} />
                        </View>
                        <View style={styles.boxStylemin}>
                            <Text style={styles.h6}>加入黑名单</Text>
                            <Image source={require('../../../assets/images/chevron-right.png')} style={styles.rightIcon} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.boxStyle}>
                        <Text style={styles.h6}>清空聊天记录</Text>
                        <Image source={require('../../../assets/images/chevron-right.png')} style={styles.rightIcon} />
                    </TouchableOpacity>
                    <View style={styles.boxmin}>
                        <TouchableOpacity style={styles.boxStylemin}>
                            <Image source={require('../../../assets/images/chevron-right.png')} style={styles.rightIcon} />
                            <Text style={styles.h6}>发消息</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxStylemin}>
                            <Image source={require('../../../assets/images/chevron-right.png')} style={styles.rightIcon} />
                            <Text style={styles.h6}>音视频通话</Text>
                        </TouchableOpacity>
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
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000'
    },
    avatarStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 20,
        borderTopWidth: 1,
        alignItems: 'center',
        // 阴影的配置
        elevation: 20, // 适配android的
        shadowOffset: { width: 0, height: 0 }, // 以下4项适配ios
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5
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
        elevation: 20, // 适配android的
        shadowOffset: { width: 0, height: 0 }, // 以下4项适配ios
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 20,
        alignItems: 'center',
    },
    boxStylemin:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    boxmin:{
        elevation: 20, // 适配android的
        shadowOffset: { width: 0, height: 0 }, // 以下4项适配ios
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5,
        backgroundColor: '#fff',
        marginTop: 20,

    }
})
