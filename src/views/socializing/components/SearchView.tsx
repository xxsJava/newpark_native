import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Text } from 'react-native-animatable';
// import {navigate} from '../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const listData = [
  {
    index: 1,
    title: '一起学java',
    num: '150',
    label: 'n个牛友在xxx',
    img: require('../../../assets/images/alimom/R-C.jpg'),
  },
  {
    index: 2,
    title: '一起学java',
    num: '150',
    label: 'n个牛友在xxx',
    img: require('../../../assets/images/alimom/R-C.jpg'),
  },
  {
    index: 3,
    title: '一起学java',
    num: '150',
    label: 'n个牛友在xxx',
    img: require('../../../assets/images/alimom/R-C.jpg'),
  },
  {
    index: 4,
    title: '一起学java',
    num: '150',
    label: 'n个牛友在xxx',
    img: require('../../../assets/images/alimom/R-C.jpg'),
  },
  {
    index: 5,
    title: '一起学java',
    num: '150',
    label: 'n个牛友在xxx',
    img: require('../../../assets/images/alimom/R-C.jpg'),
  },
  {
    index: 6,
    title: '一起学java',
    num: '150',
    label: 'n个牛友在xxx',
    img: require('../../../assets/images/alimom/R-C.jpg'),
  },
];

const sortData=[{
  index:1,
  text:'按时间'
},{
  index:2,
  text:'按热度'
}]

const typeData=[{
  index:1,
  text:'社区'
},{
  index:2,
  text:'帖子'
},{
  index:3,
  text:'UID'
}]

const ForgetPass = ({ navigation }:any) => {
  let [service, setService] = React.useState('');
  const [inputValue, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.safeStyle}>
      <View style={styles.searchBar}>
        <View style={styles.searchBarLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../../assets/images/go_left_arrow.png')} accessibilityLabel='图片' alt="头像"/>
          </TouchableOpacity>
        </View>
        <View style={styles.searchBarMiddle}>
          <View style={styles.topStyle}>
            <Image
              style={styles.topImg}
              source={require('../../../assets/images/search.png')}
              accessibilityLabel='图片'
              alt="头像"
            />
            <TextInput
              allowFontScaling={false}
              placeholder='输入关键字搜索'
              style={styles.inputStyle}
              onChangeText={text => onChangeText(text)}
              value={inputValue}
            />
          </View>
        </View>
        <View style={styles.searchBarRight}>
          <Text allowFontScaling={false} style={styles.searchBarRightText}>取消</Text>
        </View>
      </View>
      <View style={styles.contentModule}>
        <View style={styles.typeStyle}>
      
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPass;

const styles = StyleSheet.create({
  safeStyle: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#faba3c',
  },
  searchBar: {
    width: windowWidth,
    height: 70,
    backgroundColor: '#faba3c',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBarLeft: {
    width: 70,
    height: 70,
    alignItems: 'center',
    paddingTop: 33,
  },
  searchBarMiddle: {
    width: windowWidth - 140,
    height: 60,
  },
  topStyle: {
    width: windowWidth - 140,
    height: 70,
    position: 'relative',
    paddingTop: 20,
    zIndex: -10,
  },
  topImg: {
    top: 32,
    left: 13,
    position: 'absolute',
    zIndex: 10,
  },
  inputStyle: {
    width: windowWidth - 140,
    height: 40,
    lineHeight: 20,
    borderWidth: 0,
    fontSize:12,
    color: '#888',
    paddingLeft:20,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    textAlign: 'center',
  },
  searchBarRight: {
    width: 70,
    height: 70,
    paddingTop: 30,
    alignItems: 'center',
  },
  searchBarRightText: {
    fontSize: 16,
    color: '#FFF',
  },
  contentModule: {
    width: windowWidth,
    height: windowHeight - 70,
    backgroundColor: '#FFF',
  },
  typeStyle: {
    width: windowWidth,
    height: 50,
    paddingLeft:20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  typeItem: {
    width:100,
    height:50,
    marginRight: 20,
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  typeItemText:{
    fontSize:13,
    color:'#888',
    lineHeight:50
  },
  typeItemIcon:{
    lineHeight:52,
    marginLeft:5
  },
  listStyle: {
    width: windowWidth,
    ...Platform.select({
      ios:{
        height: windowHeight - 200,
      },
      android:{
        height: windowHeight - 120,
      }
    })
  },
  scrollStyle: {
    flex: 1,
  },
  itemView: {
    width: windowWidth - 10,
    height: 160,
    marginHorizontal: 5,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 14,
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#ddd',
    ...Platform.select({
      ios: {
        shadowColor: '#999', //设置阴影色
        shadowOffset: {width: 0, height: 0}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        shadowOpacity: 1,
        shadowRadius: 4.5, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
      },
      android: {
        elevation: 6,
      },
    }),
  },
  itemHeard: {
    width: '100%',
    height: 45,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemHeardLeft: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 45,
    color: '#000',
  },
  itemHeardRight: {
    color: '#888',
    lineHeight: 45,
  },
  itemModel: {
    width: '94%',
    height: 95,
    marginHorizontal: '3%',
    backgroundColor: '#f9faff',
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemModelLeft: {
    width: 95,
    height: 95,
    borderRadius: 14,
  },
  itemModelRight: {
    width: '100%',
    height: 95,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  itemImage: {
    width: 95,
    height: 95,
    borderRadius: 14,
  },
  itemModelRightTop: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  itemModelIcon: {
    width: 22,
    height: 22,
  },
  itemTopText1: {
    width: 100,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#000',
  },
  itemTopText2: {
    width: 70,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 22,
    color: '#FCD4C4',
  },
  itemModelBottom: {
    width: 120,
    height: 30,
    alignItems: 'center',
    lineHeight: 26,
    paddingLeft: 18,
  },
  itemModelbottomText: {
    width: 120,
    height: 30,
    color: '#333',
    textAlign: 'center',
    lineHeight: 26,
  },
  itemModelbottomBg: {
    borderRadius: 10,
  },
  itemModelRightBottom: {
    marginTop: 20,
  },
});
