/*
 * @Author: xxs
 * @Date: 2023-10-25 11:09:44
 * @LastEditTime: 2024-05-28 11:28:05
 * @FilePath: \newpark_native\src\views\home\components\index.tsx
 * @Description: desc
 */
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { navigate } from '../../../config/routs/NavigationContainer';
import Colors from '../../../styles/Color';
import CommentsContent from './posts/content/CommentsContent';
import GeneralPostsContent from './posts/content/GeneralPostsContent';
import LabsContent from './posts/content/LabsContent';
import PostsNav from './posts/nav/PostsNav';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//帖子组件
const postsOrdinary = (item: any, index: any, separators: any) => {

  return (
    <Card style={[styles.cardSty,Colors.bWhite]}>
      <Card.Content style={styles.cardTitle}>
        <PostsNav props={item} />
      </Card.Content>
        <Card.Content style={styles.backColor}>
          <TouchableOpacity onPress={() => navigate('PostDetailsRoute', { item })} activeOpacity={0.9} key={item.tid}  style={styles.cardd}>
            <GeneralPostsContent props={item} />
          </TouchableOpacity>
        </Card.Content>
      <Card.Content style={styles.backColor}>
        <LabsContent props={item} />
      </Card.Content>
        <CommentsContent props={item} />
    </Card>
  );
};



const styles = StyleSheet.create({
  backColor: {
    shadowOpacity: 0,
    marginTop:10
  },
  cardSty: {
    marginBottom: -3, 
    paddingTop:8,
    borderRadius:0
  },
  cardTitle:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  contentImg:{
    paddingLeft: '3%',
    paddingRight: '3%',
    borderRadius:0,
    marginTop:5,
    marginBottom:10
  },
  cover:{
    width: windowWidth,
    opacity:0.9,
    display:'flex',
    alignItems:'center',
    padding:20,
    paddingBottom:0,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  cardd:{
    display:'flex',
    flexDirection:'row',
    alignItems:'stretch',
    justifyContent:'flex-start'
  }
});
export default postsOrdinary;