import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import FontSize from "../../../../../styles/FontSize";


const CommentsContent = (item:any) => {
    return(
        <><View style={styles.interactionStyle}>
            <View style={styles.interactionLeft}>
                <TouchableOpacity
                    onPress={() => {
                        console.log('转发');
                    } }>
                    <Button
                        icon={require('../../../../../assets/images/share-icon.png')}
                        style={styles.buttonDz}>
                        {item.props.tforwardCount}
                    </Button>
                </TouchableOpacity>
            </View>
            <View style={styles.interactionRight}>

                <TouchableOpacity
                    onPress={() => {
                        console.log('评论');
                    } }>
                    <Button
                        icon={require('../../../../../assets/images/3.0x/tabs_3_on.png')}
                    >
                        {item.props.tcomCount}
                    </Button>
                </TouchableOpacity>
            </View>
        </View><View style={styles.commentAreaView}>
                <Text allowFontScaling={false} style={[styles.commentAreaTitle, FontSize.f16, Colors.fd9]}>精选评论</Text>
                {item.props.postsComments.map((porp: any) => {
                    return (
                        <View style={styles.commentArea}>
                            <View style={styles.commentAreaItem}>
                                <Avatar.Image size={32} source={{ uri: porp.upath }} />
                                <View style={styles.commentAreaName}>
                                    <Text allowFontScaling={false} style={[styles.commentAreaNameLeft, FontSize.f16, Colors.fBlack]}>{porp.unikname}:</Text>
                                    <Text allowFontScaling={false} style={[styles.commentAreaNameRight, FontSize.f14, Colors.fBlack]}>{porp.comContent}</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.commentAreaIcon}
                                    onPress={() => {
                                        console.log('评论');
                                    } }>
                                    <Button
                                        icon={require('../../../../../assets/images/3.0x/like.png')}
                                    >
                                        {porp.comSupport}
                                    </Button>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })}
            </View></>
    )
}

const styles = StyleSheet.create({
  interactionStyle:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  interactionLeft:{
    flex:1,
    alignItems:'flex-start'
  },
  interactionRight:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  commentAreaView:{
    width:'100%',
    marginTop:5,
    marginBottom:10,
    paddingHorizontal:10
  },
  buttonDz: {borderWidth: 0},
  context: {
    fontSize: 15,
    color:'#000',
    marginTop:10,
    paddingHorizontal:10
  },
  commentAreaTitle:{
    marginBottom:10
  },
  commentArea:{
    paddingHorizontal:10
  },
  commentAreaItem:{
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  commentAreaName:{
    width:'70%',
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingLeft:10
  },
  commentAreaIcon:{
    width:'30%'
  },
  commentAreaNameLeft:{
    fontWeight:'600',
    lineHeight:32
  },
  commentAreaNameRight:{
    lineHeight:32
  },
})

export default CommentsContent;