import {
  Card,
  Avatar,
  IconButton,
  Button,
  ActivityIndicator,
} from 'react-native-paper';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import StylesALL from '../../../styles';

//上拉加载布局
const renderLoadMoreView = () => {
  return (
    <View style={styles.loadMore}>
      <ActivityIndicator
        style={styles.indicator}
        size={'large'}
        color={'red'}
        animating={true}
      />
      <Text>正在加载更多</Text>
    </View>
  );
};
//上拉加载更多数据
const loadMoreData = () => {
  console.log('上拉加载数据');
};

export const LsitRecommend = () => {
  return (
    <FlatList
      data={[
        {title: 'O泡果奶', desc: '刚刚', key: 'item1'},
        {title: '小学牛', desc: '13分钟前', key: 'item2'},
        {title: 'O泡果奶1', desc: '刚刚', key: 'item3'},
        {title: '小学牛2', desc: '13分钟前', key: 'item4'},
      ]}
      ListFooterComponent={() => renderLoadMoreView()}
      onEndReached={() => loadMoreData()}
      renderItem={({item, index, separators}) => (
        <TouchableHighlight
          onPress={() => console.log('点击了')}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}>
          <View style={styles.backColor}>
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
              <Card.Content style={styles.backColor}>
                <Text style={styles.context}>世界有万般兵刃！！！</Text>
                <Text style={styles.context}>唯有情伤人最深！！！</Text>
              </Card.Content>
              <Card.Cover
                source={require('../../../assets/images/alimom/R-C.jpg')}
              />
              <Card.Content style={styles.backColor}>
                <Text style={styles.context}>#情感#个人#官方#颜值#语录</Text>
              </Card.Content>
              <Card.Actions>
                <Button
                  icon={require('../../../assets/images/3.0x/like.png')}
                  style={styles.buttonDz}
                  onPress={() => {
                    console.log('点赞');
                  }}>
                  200
                </Button>
                <Button
                  icon={require('../../../assets/images/3.0x/tabs_3_on.png')}
                  style={StylesALL.BGCOLOR}
                  onPress={() => {
                    console.log('评论');
                  }}>
                  2000
                </Button>
              </Card.Actions>
            </Card>
          </View>
        </TouchableHighlight>
      )}
    />
  );
};

const styles = StyleSheet.create({
  backColor: {
    backgroundColor: '#FFF',
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
  loadMore: {
    alignItems: 'center',
  },
  indicator: {
    color: 'red',
    margin: 10
  },
});
