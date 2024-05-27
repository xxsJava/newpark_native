/**
 * 代码描述: home页 顶部推荐栏目布局
 * 作者:cxr
 * 创建时间:2023/11/10 15:42:11
 */
import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { navigate } from '../../../config/routs/NavigationContainer';
import StylesALL from '../../../styles';
import Colors from '../../../styles/Color';
import MenusComponents from '../Menu';
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
//菜单组件数据
const menusData = [
    {
      index:0,
      title: 'home.help',
      desc: 'home.help1',
      type: true,
    },
    {
      index:1,
      title: 'home.order',
      desc: 'home.order1',
      type: false,
    },
];

const typeMenu = [
  {
    title:'快速交友',
    path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/ksjy.png',
    rout:'FastDating'
  },
  {
    title:'活动',
    path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/hd.png',
    rout:'HotChatRoom'
  },
  {
    title:'快速接单',
    path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/ksjd.png',
    rout:'FastTakeOrders'
  },
  {
    title:'排行榜',
    path:'https://xxs18-test.oss-cn-shanghai.aliyuncs.com/image/phb.png',
    rout:'LeaderBoards'
  }
]

const ColumnType = () => {
  const [selectedVal, onSelected] = React.useState(1);
  return (
    <View style={Colors.bGrey}>
      <View style={styles.modalAll}>
        <TouchableOpacity
        key={menusData[0].index}
          style={[styles.wd, Colors.b24c]}
          onPress={() => navigate('HelpCircleRoute')}>
          <View>
            <MenusComponents props={menusData[0]} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          key={menusData[1].index}
          style={[styles.wd, Colors.b008]}
          onPress={() => navigate('JiaoyiData')}>
          <View>
            <MenusComponents props={menusData[1]} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.typesView}>

{
  typeMenu.map(item=>{
    return(
<TouchableOpacity style={styles.typeItem} onPress={()=>{navigate(item.rout)}}>
        <View >
          <View style={styles.imgView}>
            <Image style={StylesALL.imgSize} source={{uri:item.path}} />
          </View>
          <View>
            <Text style={[styles.typeTitle,Colors.fBlack]}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  })
}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalAll:{
    marginTop:5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wd: {
    width: '45%',
    height: 110,
    borderRadius: 18,
    marginLeft: '2%',
    marginRight: '2%',
    shadowOpacity: 0,
    marginBottom:10,
    ...Platform.select({
        ios: {
          shadowColor: '#999', //设置阴影色
          shadowOffset: {width: 0, height: 0}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
          shadowOpacity: 1,
          shadowRadius: 6.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
        },
        android: {
          elevation: 2,
        },
    }),
  },
  typesView:{
    // borderWidth:1,
    flexDirection:'row',
    marginBottom:15,
    backgroundColor:'#fff',
    borderRadius:10
  },
  typeItem:{
    height: 100,
    width: '25%',
    // borderWidth:1,
    justifyContent:'center',
    alignItems:'center'
  },imgView:{
    width:60,
    height:60
  },
  typeTitle:{
    fontWeight:'600',
    textAlign:'center'
  }
});

export default ColumnType;
