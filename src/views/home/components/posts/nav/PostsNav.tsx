import { Menu, MenuItem, MenuItemLabel } from "@gluestack-ui/themed"
import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Avatar, IconButton } from "react-native-paper"
import { navigate } from "../../../../../config/routs/NavigationContainer"
import StylesALL from "../../../../../styles"
import Colors from "../../../../../styles/Color"
import FontSize from "../../../../../styles/FontSize"
import DateTimeUtils from "../../../../../utils/DateTimeUtils"


const PostsNav = (item:any) =>{

    console.log(item.props)

    return(
        <><View style={styles.titleLeft}>
            <View>
                <TouchableOpacity onPress={() => { console.log('点击--头像') } }>
                    <Avatar.Image
                        style={styles.avaSty}
                        size={44}
                        source={{ uri: item.props.upath }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchaOp} onPress={() => { console.log('点击--关注用户') } }>
                    <Image style={styles.avatarIcon} source={require('../../../../../assets/images/plus-sign.png')} accessibilityLabel='图片' alt="头像"></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.titleView}>
                <Text allowFontScaling={false} style={[styles.titleStyle, Colors.fBlack, StylesALL.fWeBold, FontSize.f16]}>{item.props.unikname}</Text>
                <Text allowFontScaling={false} style={[FontSize.f12, Colors.fbbb]}>{DateTimeUtils.formattedDateTime(item.props.tlastTime,'HH:mm')}</Text>
            </View>
        </View><Report /></>
    )
}

const Report = () => {
    return(
        <View style={styles.rightSty}>
          <Menu
            style={{position:'relative',top:-30,bottom:0}}
            placement='bottom right'
            trigger={({ ...triggerProps }) => {
              return (
                  <IconButton
                  { ...triggerProps }
                  // style={styles.rightButton}
                  icon="dots-horizontal"
                  />
              )
            }}
          >
            <MenuItem key="Report" textValue="Report" onPress={() => {navigate('Complain')}}>
              <MenuItemLabel size="sm">举报</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Blacklist" textValue="Community" onPress={() => {console.log('拉入黑名单');}}>
              <MenuItemLabel size="sm">拉入黑名单</MenuItemLabel>
            </MenuItem>
          </Menu>
        </View>
    )
}

const styles = StyleSheet.create({
    titleLeft:{
        flexDirection:'row',
        justifyContent:'flex-start'
      },
      avaSty: {
        bottom: 5,
      },
      titleView:{
        paddingLeft:10
      },
      titleStyle:{
        paddingBottom:2
      },
      touchaOp:{
        opacity:0.9,
        position:'absolute',
        top:22,
        left:27,
        zIndex:10
      },
  
      avatarIcon:{
        width:20,
        height:20,
      },
      rightSty: {
        marginTop:-15,
        marginRight:-15,
      }
})


export default PostsNav;