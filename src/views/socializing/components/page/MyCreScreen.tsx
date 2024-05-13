import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const itemData =[{
    groupID:'',
    faceURL:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg',
    groupName:'测试群',
    count: 10
},{
    groupID:'',
    faceURL:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg',
    groupName:'调试群',
    count: 20
},{
    groupID:'',
    faceURL:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg',
    groupName:'三剑客',
    count: 3
}]

const items = ({item}:any) => {
    return(
        <View style={styles.viewItem}>
            <View style={styles.imgView}>
                <Image style={styles.groupImg} source={{uri:item.faceURL}}/>
            </View>
            <View style={styles.groupTitle}>
                <View>
                    <Text style={styles.groupFont}>
                        {item.groupName}
                    </Text>
                </View>
                <View>
                    <Text style={styles.groupCountFont}>
                       {item.count}人
                    </Text>
                </View>
            </View>
        </View>
    )
}

const MyCreScreen = () => {

    return(
        <SafeAreaView  style={styles.parentView}>
            {/* <View>
                <Text>1111</Text>
            </View> */}
            <FlatList
                data={itemData}
                renderItem={items}
                keyExtractor={item => item.groupID}
            />
        </SafeAreaView >
    )

}

const styles = StyleSheet.create({
    parentView:{
        flex:1
    },
    viewItem:{
        width:'100%',
        height: 80,
        // borderWidth:1,
        position:'relative',
        flexDirection:"row",
        backgroundColor:'#fff',
        alignItems:'center'
    },
    imgView:{
        width: 46,
        height: 46,
        marginTop: 10,
        marginLeft: 20
    },
    groupImg:{
        width:'100%',
        height:'100%',
        borderRadius:12
    },
    groupTitle:{
        paddingTop:20,
        paddingLeft:10
    },
    groupFont:{
        color:'#000',
        fontSize: 17,
        fontWeight: 'bold',
    },
    groupCountFont:{
        color:'#999',
        fontSize:14
    }
})

export default MyCreScreen;