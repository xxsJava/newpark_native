/*
 * @Author: xxs
 * @Date: 2023-10-13 10:09:01
 * @LastEditTime: 2023-10-25 17:14:49
 * @FilePath: \newpark_native\src\components\Home\index.tsx
 * @Description: Home 页菜单
 */

import React from 'react';
import MenusComponents from './Menu';
import {View, StyleSheet, SafeAreaView, TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import SortTabNav from './SortType';
import {LsitRecommend} from './Lists';
import StylesALL from '../../styles';
import ColumnType from './ColumnType'
import Storage from '../../utils/AsyncStorageUtils';
import { postList } from '../../api/sys/home';
import { postListType } from '../../api/sys/home/types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//菜单组件数据
const menusData = [
  {
    title: 'home.help',
    desc: 'home.help1',
    type: true,
  },
  {
    title: 'home.order',
    desc: 'home.order1',
    type: false,
  },
];

const postType: postListType = {
  pageNo:1,
  pageSize:5
};


// export default class HomeComponents extends React.PureComponent {

//     render() {
      
//     }
// }
const HomeComponents = () => {
  const [postListData,setPostListData] = React.useState([])

  const PostsData = async () => {
    const tokenStr = await Storage.get('usr-token');
    if(tokenStr != null) {
      const postListAPI = await postList(tokenStr,postType);
      setPostListData(postListAPI.data)
      // console.log('postVal',postListAPI)
    } else {
      return console.log('数据加载失败')
    }
  }

  React.useEffect(() => {
    PostsData()
  }, []); // 只在组件挂载时调用一次

  // PostsData()

  return (
    <>
      {/* <ColumnType></ColumnType> */}
      <View style={styles.postsList}>
        <LsitRecommend message={postListData} />
      </View>
    </>
  )
}

export default HomeComponents;

const styles = StyleSheet.create({
  styleAll: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
  },
  scrollStyle:{
    width:windowWidth,
    height:windowHeight - 60
  },
  wd: {
    width: '40%',
    height: 80,
    borderRadius: 5,
    marginLeft: '4%',
    marginRight: '4%',
    shadowOpacity: 0,
    elevation: 0,
  },
  back: {
    backgroundColor: '#24C78C',
  },
  back1: {
    backgroundColor: '#008ACC',
  },
  menuTabNav: {
    width: '98%',
    height: 40,
    backgroundColor: '#FFF',
    elevation: 5,
    marginLeft: '1%',
    borderRadius: 3,
    position: 'relative',
    flexDirection: 'row',
  },
  postsList: {
    flex: 1,
    width: '98%',
    marginLeft: '1%',
    marginTop: '1%',
    borderRadius: 5,
  },
});

