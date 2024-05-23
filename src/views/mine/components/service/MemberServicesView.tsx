/*
 * @Author: xxs
 * @Date: 2024-05-15 18:02:59
 * @LastEditTime: 2024-05-22 18:35:42
 * @FilePath: \newpark_native\src\views\mine\components\service\MemberServicesView.tsx
 * @Description: desc
 */
import React from 'react';
import { Dimensions, Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import StylesALL from '../../../../styles';
import Colors from '../../../../styles/Color';
import FontSize from '../../../../styles/FontSize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const renderItem = ({item, index}: any) => {
   return (
         <View style={styles.item}>
            <Image
               source={item.image}
               style={[styles.image,styles.imageContainer]}
            />
            <View style={styles.titleView}>
                  <Text numberOfLines={2} style={[FontSize.f18,Colors.fWhite]}>
                     V{item.title}享
                     <Text style={{color:item.color}}>{item.title+3}
                     项
                     </Text>
                        特权,升级V{item.title<7?item.title+1:item.title}
                        <Text style={{color:item.color}}>
                        {item.title==7?"解锁所有权益":"可加1项"}
                        </Text>
                  </Text>
            </View>
         </View>
   );
}

const MemberServicesView = () => {
    const [select, setSelect] = React.useState(1)
  
    const cardData = [
        {
          image: require('../../../../assets/images/vip/v1.png'),
          title: 1,
          content: '这是第一张卡片的内容',
          color:'#93A5BB'
        },
        {
          image: require('../../../../assets/images/vip/v2.png'),
          title: 2,
          content: '这是第二张卡片的内容',
          color:'#A9A4BA'
        },
        {
          image: require('../../../../assets/images/vip/v3.png'),
          title: 3,
          content: '这是第三张卡片的内容',
          color:'#8CD3CF'
        },
        {
          image: require('../../../../assets/images/vip/v4.png'),
          title: 4,
          content: '这是第三张卡片的内容',
          color:'#F2A6A4'
        },
        {
          image: require('../../../../assets/images/vip/v5.png'),
          title: 5,
          content: '这是第三张卡片的内容',
          color:'#EAB08A'
        },
        {
          image: require('../../../../assets/images/vip/v6.png'),
          title: 6,
          content: '这是第三张卡片的内容',
          color:'#F3C370'
        },
        {
          image: require('../../../../assets/images/vip/v7.png'),
          title: 7,
          content: '这是第三张卡片的内容',
          color:'#E8C165'
        }
      ];
     
     
    return (
            <SafeAreaView style={styles.carousel_container}>
               <View style={styles.headNav}>
                  <View style={styles.iconHead}>
                  <Feather name="chevron-left" size={28} color="#FFF" />
                  </View>
                  <View style={styles.textHead}>
                     <Text style={[styles.textHeada,FontSize.f18,Colors.f949]}>NewPark 会员</Text>
                  </View>
               </View>
                <Carousel
                    sliderWidth={windowWidth}
                    sliderHeight={windowHeight}
                    itemWidth={windowWidth -70}
                    data={cardData}
                    renderItem={renderItem}
                    hasParallaxImages={true}
                />
                <View style={[Colors.b282,styles.memBody]}>
                  <View>
                     <View style={styles.headImgBg}>
                        <Image style={StylesALL.imgSize} source={require('../../../../assets/images/head/head1.png')}/>
                     </View>
                     <View style={styles.headImg}>
                           <Image borderRadius={30} style={StylesALL.imgSize} source={{uri:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/2023/11/29/OIP%20%281%29.jpg'}} />
                     </View>
                     <View style={styles.headTitle}>
                        <Text style={[FontSize.f18,Colors.fWhite,StylesALL.fWeBold]}>
                           守这云间所爱
                        </Text>
                     </View>
                  </View>
                  
                  <View style={styles.bodyText}>
                     <View style={styles.bodyTextView}>
                        <Text style={[FontSize.f18,Colors.fWhite,StylesALL.fWeBold]}>
                        注册日期:
                        </Text>
                        <Text style={[FontSize.f14,Colors.f99,styles.flhe]}> 2024.5.22</Text>
                     </View>
                     <View style={styles.bodyTextView}>
                        <Text style={[FontSize.f18,Colors.fWhite,StylesALL.fWeBold]}>
                        学校:
                        </Text>
                        <Text style={[FontSize.f14,Colors.f99,styles.flhe]}> 
                           湖南长沙理工大学
                        </Text>
                     </View>
                  </View>
                </View>
                
            </SafeAreaView>
    )
}

export default MemberServicesView;
const styles = StyleSheet.create({
    safeView: {
      
    },
    carousel_container: {
      backgroundColor:'#23232F',
      paddingTop:'20%',
      flex:1
  },
  item: {
      flexDirection: 'row',
      justifyContent: 'center',
      // height: '30%',
  },
  imageContainer: {
      // flex: 1,
      marginBottom: Platform.select({ ios: 0, android: 1 }),
      backgroundColor: 'white',
      borderRadius: 8,
  },
  image: {
      // ...StyleSheet.absoluteFillObject,
      // resizeMode: 'cover'
  },
  headNav:{
   width:'100%',
   height: 40,
   backgroundColor:'',
   position:'absolute',
   flexDirection:'row'
  },
  iconHead:{
   position:'absolute',
   top:5,
   left:10
  },
  textHead:{
    width:'100%'
  },
  textHeada:{
   textAlign:'center',
   lineHeight:40
  },
  titleView: {
      position: 'absolute',
      width: '100%',
      bottom: -50,
      left:30
  },
  memBody:{
   position:'absolute',
   // borderWidth:1,
   height:150,
   width:'90%',
   left:'5%',
   top:'43%',
   borderRadius:10,
   opacity:0.9
  },
  headImg:{
   width:60,
   height:60,
   position:'absolute',
   top:-30,
   left:20
  },
  headImgBg:{
   width:100,
   height:100,
   position:'absolute',
   top:-55,
   left:2,
   zIndex:10
  },
  headTitle:{
   position:'absolute',
   left:'30%',
   top:10
  },
  bodyText:{
   position:'absolute',
   top:'40%',
   left:'15%'
  },
  bodyTextView:{
   flexDirection:'row'
  },
  flhe:{
   lineHeight:25
  }
})