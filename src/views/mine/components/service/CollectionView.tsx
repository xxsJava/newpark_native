import React, {Component} from 'react';
import { View,StyleSheet,Dimensions,Platform } from 'react-native';
import { Text } from 'react-native-animatable';
import { Radio,Box } from "native-base";
import LinearGradinet from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// const [value, setValue] = React.useState('1');
let value = '1'
const itemData = [{
    index:1,
    title:'帖子标题',
    time:'2023-12-01',
    from:'o泡果奶',
    type:'消息'
},{
    index:2,
    title:'帖子标题',
    time:'2023-12-01',
    from:'o泡果奶',
    type:'消息'
},{
    index:3,
    title:'帖子标题',
    time:'2023-12-01',
    from:'o泡果奶',
    type:'消息'
}]
export default class CollectionView extends Component {

    

    render () {
        return (
            <View style={styles.parentLevel}>
                <View style={styles.radioView}>
                    <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} >
                        <View style={styles.radioRow}>
                            <Radio shadow={2} value="1" colorScheme="yellow" size="sm" my="1">
                                全部
                            </Radio>
                            <Radio shadow={2} value="2" colorScheme="yellow" color={"#faba3c"} size="sm" my="1">
                                消息
                            </Radio>
                            <Radio shadow={2} value="3" colorScheme="yellow" size="sm" my="1">
                                商品
                            </Radio>
                            <Radio shadow={2} value="4" colorScheme="yellow" size="sm" my="1">
                                帖子
                            </Radio>
                        </View>
                    </Radio.Group>
                </View>
                <View style={styles.listView}>
                    <View style={styles.optionStyle}>
                        {itemData.map(item => {
                            return(
                                <View style={styles.optionItem} key={item.index}>
                                    <LinearGradinet colors={['rgba(254,241,217,0.90)','rgba(254,241,217,0.20)','rgba(254,241,217,0)']}start={{x: 1, y: 0}} end={{x: 0, y: 0}} style={styles.itemBg}>
                                        <View style={styles.itemLeft}></View>
                                        <View style={ styles.itemRight}>
                                            <View style={styles.itemTitle}>
                                                <Text style={styles.itemTitleText}>{item.title}</Text>
                                            </View>
                                            <View style={styles.itemTextView}>
                                                <Text style={styles.itemText}>收藏时间：</Text>
                                                <Text style={styles.timeText}>{item.time}</Text>
                                            </View>
                                            <View style={styles.itemTextView}>
                                                <Text style={styles.itemText}>来自：</Text>
                                                <Text style={styles.itemText}>{item.from}</Text>
                                            </View>
                                            <View style={styles.itemTextView}>
                                                <Text style={styles.itemText}>类型：</Text>
                                                <Text style={styles.itemText}>{item.type}</Text>
                                            </View>
                                        </View>
                                    </LinearGradinet>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </View>
        )
    }
  
}

const styles = StyleSheet.create({
    parentLevel:{
        width:windowWidth,
        height:windowHeight,
        backgroundColor:'#FFF'
    },
    radioView:{
        width:windowWidth,
        height:50,
        paddingTop:10
    },
    radioRow:{
        width:windowWidth,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    radioStyle:{
        color:"#FABA3C",
    },
    listView:{
        width:windowWidth,
        height:windowHeight-50,
        paddingTop:15,
        paddingHorizontal:10,
    },
    optionStyle: {
    },
    optionItem: {
        width:windowWidth-20,
        height: 120,
        borderRadius:12,
        backgroundColor:'#FFF',
        // borderWidth:0.5,
        // borderColor:"#999",
        ...Platform.select({
            ios: {
              marginBottom:12,
              shadowColor: '#DDD', //设置阴影色
              shadowOffset: {width: 0, height: 3}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
              shadowOpacity: 1,
              shadowRadius: 4, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
            },
            android: {
              elevation: 7,
              marginBottom:10,
            },
        }),
    },
    itemLeft:{
        width:120,
        height:119,
        borderRadius:12,
        borderRightWidth:0.5,
        borderRightColor:'#ddd',
        backgroundColor:'#fd6e82'
    },
    itemRight:{
        width:windowWidth-140,
        height:119,
        paddingTop:10,
        paddingLeft:20
    },
    itemBg:{
        width:windowWidth-20,
        height: 120,
        borderRadius:12,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    itemTitle:{
        width:'100%',
        height:30,
        marginBottom:8
    },
    itemTitleText:{
        fontSize:19,
        fontWeight:'600',
        color:'#000',
        lineHeight:30
    },
    itemTextView:{
        marginBottom:2,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    itemText:{
        fontSize:13,
        color:'#000',
        ...Platform.select({
            ios:{
                fontSize:14
            }
        })
    },
    timeText:{
        color:'#808080'
    }
})