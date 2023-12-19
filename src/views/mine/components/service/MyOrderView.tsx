import React, {Component, useEffect} from 'react';
import { View,Text,StyleSheet,Dimensions,TouchableOpacity,ScrollView,Platform } from 'react-native';
import { Appbar,Avatar,IconButton,Tooltip,Button } from 'react-native-paper';
import {useTranslation, Trans} from 'react-i18next';
import {navigate} from '../../../../config/routs/NavigationContainer'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// const Quiz = ({ navigation, route }:any) => {
//     const { typeParams } = route.params;
// };

const MyOrderView = ({route}:any) => {
    const [typeVal,onTypePress] = React.useState('type1')
    // const {route}:any = this.props
    const { type } = route.params
    useEffect(() => {
        // 触发事件
        onTypePress(type)
    }, []);
    return (
        <View style={styles.parentView}>
            <Appbar.Header style={styles.headerStyle}>
                    <Appbar.Action icon={require('../../../../assets/images/chevron-left.png')} onPress={() => navigate('MineStacker')}/>
                    <Text style={styles.headerText}>
                        <Trans>navigationBar.title6</Trans>
                    </Text>
                </Appbar.Header>
                <View style={styles.typeView}>
                    <TouchableOpacity style={typeVal == 'type1'?styles.typeItem:null} onPress={() => onTypePress('type1')}>
                        <Text style={[styles.typeText,typeVal == 'type1'?styles.typeTextSelected:null]}>待付款</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={typeVal == 'type2'?styles.typeItem:null} onPress={() => onTypePress('type2')}>
                        <Text style={[styles.typeText,typeVal == 'type2'?styles.typeTextSelected:null]}>待收货</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={typeVal == 'type3'?styles.typeItem:null} onPress={() => onTypePress('type3')}>
                        <Text style={[styles.typeText,typeVal == 'type3'?styles.typeTextSelected:null]}>待评价</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
  
}



export default MyOrderView;

const styles = StyleSheet.create({
    parentView:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#FFF'
    },
    headerStyle:{
        width: windowWidth,
        height: 45,
        backgroundColor: '#ffb700',
    },
    headerText:{
        width: '80%',
        fontSize: 17,
        color: '#FFF',
        lineHeight: 45,
        textAlign: 'center',
    },
    typeView:{
        width:'100%',
        height:45,
        paddingTop:3,
        paddingHorizontal:35,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    typeItem:{
        ...Platform.select({
            ios:{
                borderColor:'#faba3c',
                borderBottomWidth:2
            }
        })
    },
    typeText:{
        width:48,
        height:40,
        color:'#000',
        fontSize:15,
        lineHeight:45,
        textAlign:'center',
    },
    typeTextSelected:{
        color:'#6a1b9a',
        borderColor:'#faba3c',
        borderBottomWidth:2
    },
})