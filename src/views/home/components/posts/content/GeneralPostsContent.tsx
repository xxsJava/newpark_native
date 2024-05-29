import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import WebViews from "../../../../../components/WebView/WebViewCompent";
import webview from "../../../../../config/webview";
import StylesALL from "../../../../../styles";
import Colors from "../../../../../styles/Color";
/*
 * @Author: xxs
 * @Date: 2024-05-28 10:26:06
 * @LastEditTime: 2024-05-28 18:18:24
 * @FilePath: \newpark_native\src\views\home\components\posts\content\GeneralPostsContent.tsx
 * @Description: desc
 */
const windowWidth = Dimensions.get('window').width;

//帖子展示
const GeneralPostsContent = (item:any) => {

  console.log('类型---------->',item.props.ttype)

  switch(item.props.ttype){
    case '0':
      return(
        <View style={{ width: windowWidth}}>
          {/* { item.ttype == 0?<WebView style={{height:200}} source={{ html: item.tcontext }}></WebView>:''}
          { item.ttype == 1?<WebViews uri={webview.ROOT_URL+webview.API.MUSIC} h={150}/>:''}
          { item.ttype == 2?<WebViews uri={webview.ROOT_URL+webview.API.VIDEO} h={300} />:''} */}
          
          <GraphicPosts props={item.props} />
        </View>
      );
    case '1':
      return(
          <View style={{ width: windowWidth}}>
            <Copywriting props={item.props} />
          </View>
      );
    case '2':
        return(
          <View style={{ width: windowWidth}}>
            <CopywritingVideo props={item.props} />
          </View>
        );
    case '3':
          return(
            <View style={{ width: windowWidth}}>
              <CopywritingMusic props={item.props} />
            </View>
        );
  }
    
}

//图文 0
const GraphicPosts = (item:any) => {
  console.log(item.props.imgs.length)

  return(
    <View>
            <View style={{width:'80%'}}>
              <Text numberOfLines={1} style={Colors.fBlack}>{item.props.tcontext}</Text>
            </View>
            <View style={styles.postImg}>
              {item.props.imgs.map((prop:any) => {
                return(
                  <View style={styles.postImgs}>
                    <Image style={StylesALL.imgSize} source={{uri:prop}}/>
                  </View>
                )
              })}
            </View>
    </View>
  )
}
//文案 1
const Copywriting = (item:any) => {
  return(
    
      <View>
          <View style={{width:'80%'}}>
            <Text numberOfLines={1} style={Colors.fBlack}>{item.props.tcontext}</Text>
          </View>
      </View>
  )
}
//视频 + 文案 2
const CopywritingVideo = (item:any) => {

  return(
    <View>
        <View style={{width:'80%'}}>
          <Text numberOfLines={1} style={Colors.fBlack}>{item.props.tcontext}</Text>
        </View>
        {/* <Video
              source={{ uri: item.props.videoPath }}
              style={{ width: '90%', height: 300 }}
              controls={true}
              resizeMode="contain"
              paused={true}
            /> */}
      <WebViews uri={webview.ROOT_URL+webview.API.VIDEO} w={'90%'} h={200} />
    </View>
  )
}
//音乐 + 文案 3
const CopywritingMusic = (item:any) => {
  return(
    <View>
        <View style={{width:'80%'}}>
          <Text numberOfLines={1} style={Colors.fBlack}>{item.props.tcontext}</Text>
        </View>
          <WebViews uri={webview.ROOT_URL+webview.API.MUSIC} w={'90%'} h={80}/>
    </View>
  )
}

const styles = StyleSheet.create({
  postImg:{
    // borderWidth:1,
    flexDirection:'row',
    flexWrap: 'wrap',
  },
  postImgs:{
    // borderWidth:1,
    width:'30%',
    height:120,
    padding:1
  },
})

export default GeneralPostsContent;