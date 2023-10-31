/*
 * @Author: xxs
 * @Date: 2023-10-25 11:09:44
 * @LastEditTime: 2023-10-31 13:59:16
 * @FilePath: \newpark_native\src\views\home\components\index.tsx
 * @Description: desc
 */
import {Avatar, Button, Card, IconButton, Text} from 'react-native-paper';
import StylesALL from '../../../styles';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

//普通帖子组件
export const postsOrdinary = (item: any, index: any, separators: any) => {
  return (
    <View>
      <Card style={styles.cardSty}>
        <Card.Title
          title={item.title}
          subtitle={item.desc}
          left={props => (
            <Avatar.Image
              {...props}
              style={styles.avaSty}
              size={36}
              source={require('../../../assets/images/3.0x/defaultheader.png')}
            />
          )}
          right={props => (
            <IconButton
              {...props}
              style={styles.rightSty}
              icon="dots-horizontal"
              onPress={() => {}}
            />
          )}
          titleStyle={styles.titleSty}
          subtitleStyle={styles.subSty}
          subtitleNumberOfLines={0}
          leftStyle={{
            width: 25,
          }}
          style={styles.backColor}
        />
        {/* <TouchableHighlight
          onPress={() => console.log('点击了')}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}> */}
        <Card.Content style={styles.backColor}>
          <Text style={styles.context}>世界有万般兵刃！！！</Text>
          <Text style={styles.context}>唯有情伤人最深！！！</Text>
        </Card.Content>
        <Card.Cover source={require('../../../assets/images/alimom/R-C.jpg')} />
        <Card.Content style={styles.backColor}>
          <Text style={styles.context}>#情感#个人#官方#颜值#语录</Text>
        </Card.Content>
        {/* </TouchableHighlight> */}
        <Card.Actions>
          <TouchableOpacity
            onPress={() => {
              console.log('点赞');
            }}>
            <Button
              icon={require('../../../assets/images/3.0x/like.png')}
              style={styles.buttonDz}>
              200
            </Button>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('评论');
            }}>
            <Button
              icon={require('../../../assets/images/3.0x/tabs_3_on.png')}
              // style={StylesALL.BGCOLOR}
            >
              2000
            </Button>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  backColor: {
    // backgroundColor: '#FFF',
    shadowOpacity: 0,
  },
  cardSty: {marginBottom: 10},
  subSty: {
    fontSize: 10,
    color: '#999',
  },
  avaSty: {
    position: 'absolute',
    bottom: 12,
  },
  rightSty: {position: 'relative', bottom: 15, right: 10},
  titleSty: {
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
  },
  buttonDz: {borderWidth: 0},
  context: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
