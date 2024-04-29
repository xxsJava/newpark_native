import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const itemData = [{
    index:1,
    bg:require('../../../../assets/images/csBj.jpg'),
    tx:require('../../../../assets/images/mcTx.jpg'),
    title:'跑腿那些事',
    personnel:'1.2w',
    follow:'2.2w'
},{
    index:2,
    bg:require('../../../../assets/images/yhBj.jpg'),
    tx:require('../../../../assets/images/nvshengTx1.jpg'),
    title:'学院表白墙',
    personnel:'0.2w',
    follow:'1.4w'
  },{
    index:3,
    bg:require('../../../../assets/images/csBg2.jpg'),
    tx:require('../../../../assets/images/nanshengTx1.jpg'),
    title:'旅游美拍',
    personnel:'1.6w',
    follow:'2.4w'
  }]

const items = ({item}:any) => {
    return(
        
        <View style={styles.parentItem}>
            <View style={styles.communitItemTop}>
                          <Image
                            style={styles.communitImage}
                            blurRadius={7}
                            source={item.bg}
                            accessibilityLabel='背景图'
                            alt="头像"
                          />
                        </View>
                        <View style={styles.communitItemBottom}>
                          <View style={styles.communitItemTitle}>
                            <Text allowFontScaling={false} style={styles.communitTitleText}>{item.title}</Text>
                          </View>
                          <View style={styles.communitItemTextView}>
                            <Text allowFontScaling={false} style={styles.communitText}>{item.personnel}成员</Text>
                            <Text allowFontScaling={false}>·</Text>
                            <Text allowFontScaling={false} style={styles.communitText}>{item.follow}关注</Text>
                          </View>
                        </View>
                        <View style={styles.communitAvatar}>
                          <Image style={styles.communitAvatarImage} source={item.tx} accessibilityLabel='头像' alt="头像"></Image>
            </View>
        </View>
    )
}

const MyCommunity = () => {
    return(
        <SafeAreaView style={styles.parentView}>
            <FlatList
                data={itemData}
                renderItem={items}
                // keyExtractor={item => item.index}
                numColumns={2}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parentView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap",
    },
    parentItem:{
        width: '45%',
        height: 130,
        // borderWidth:1,
        backgroundColor:'#ffffff',
        borderRadius:10,
        position:'relative',
        margin:'2.5%',
    },
    communitItemTop: {
        width: '100%',
        height: 65,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    communitImage: {
        width: '100%',
        height: 65,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    communitItemBottom: {
        width: 130,
        height: 65,
        paddingHorizontal:12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    communitItemTitle: {
        height:30,
        marginTop:5
    },
    communitTitleText:{
        fontSize:14,
        color:'#000',
        fontWeight:'600',
        lineHeight:45
    },
    communitItemTextView: {
        marginTop:7,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    communitText:{
        fontSize:10,
        color:'#999'
    },
    communitAvatar:{
        width:46,
        height:46,
        borderRadius:23,
        position:'absolute',
        borderColor:'#FFF',
        borderWidth:0.7,
        top:32,
        left:16
    },
    communitAvatarImage:{
        width:45,
        height:45,
        borderRadius:22.5,
    }
})

export default MyCommunity;