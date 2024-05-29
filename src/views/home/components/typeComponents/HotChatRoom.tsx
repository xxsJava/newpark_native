import React from "react";
import { Image, StyleSheet, View } from "react-native";
import HeadNav from "../../../../components/Nav/HeadNav";
import StylesALL from "../../../../styles";
import Colors from "../../../../styles/Color";


const HotChatRoom = () => {
    return(
        <View style={[styles.parentCon,Colors.bGrey]}>
            <HeadNav props={{ title: '活动', navPath: '' }} />

            <View style={styles.bodyConent}>
                <View style={[styles.bodyItem,Colors.bWhite]}>
                    <Image style={StylesALL.imgSize} source={require('../../../../assets/images/hd/a1.png')}/>
                </View>

                <View style={[styles.bodyItem,Colors.bWhite]}>
                    <Image style={StylesALL.imgSize} source={require('../../../../assets/images/hd/a2.png')}/>
                </View>

                <View style={[styles.bodyItem,Colors.bWhite]}>
                    <Image style={StylesALL.imgSize} source={require('../../../../assets/images/hd/a3.png')}/>
                </View>

                <View style={[styles.bodyItem,Colors.bWhite]}>
                    <Image style={StylesALL.imgSize} source={require('../../../../assets/images/hd/a4.png')}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentCon:{
        flex:1
    },
    bodyConent:{
        
    },
    bodyItem:{
        width:'90%',
        height: 100,
        marginTop: 30,
        marginLeft:'5%'
    }
})

export default HotChatRoom;