import { CircleIcon, HStack, Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Trans } from 'react-i18next';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-animatable';
import LinearGradinet from 'react-native-linear-gradient';
import { Appbar } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// const [value, setValue] = React.useState('1');
let value = '1';
const itemData = [
  {
    index: 1,
    title: '帖子标题',
    time: '2023-12-01',
    from: 'o泡果奶',
    type: '消息',
  },
  {
    index: 2,
    title: '帖子标题',
    time: '2023-12-01',
    from: 'o泡果奶',
    type: '消息',
  },
  {
    index: 3,
    title: '帖子标题',
    time: '2023-12-01',
    from: 'o泡果奶',
    type: '消息',
  },
];
const CollectionView = () => {
  const [radioValue, setRadioValue] = React.useState('All');
  const navigatetions = useNavigation();

  return (
    <View style={styles.parentLevel}>
      <Appbar.Header style={styles.headerStyle}>
        <Appbar.Action
          icon={require('../../../../assets/images/chevron-left.png')}
          onPress={() => {navigatetions.goBack()}}
        />
        <Text allowFontScaling={false} style={styles.headerText}>
          <Trans>navigationBar.title10</Trans>
        </Text>
      </Appbar.Header>
      <View style={styles.readioGroups}>
        <RadioGroup value={radioValue} onChange={setRadioValue}>
        <HStack space="2xl">
          <Radio value="All" size="sm" isInvalid={false} isDisabled={false}>
            <RadioIndicator mr="$2"><RadioIcon as={CircleIcon} /></RadioIndicator>
              <RadioLabel>全部</RadioLabel>
          </Radio>
          <Radio value="Msg" size="sm" isInvalid={false} isDisabled={false}>
            <RadioIndicator mr="$2"><RadioIcon as={CircleIcon} /></RadioIndicator>
              <RadioLabel>消息</RadioLabel>
          </Radio>
          <Radio value="Commodity" size="sm" isInvalid={false} isDisabled={false}>
            <RadioIndicator mr="$2"><RadioIcon as={CircleIcon} /></RadioIndicator>
              <RadioLabel>商品</RadioLabel>
          </Radio>
          <Radio value="Posts" size="sm" isInvalid={false} isDisabled={false}>
            <RadioIndicator mr="$2"><RadioIcon as={CircleIcon} /></RadioIndicator>
              <RadioLabel>帖子</RadioLabel>
          </Radio>
          </HStack>
        </RadioGroup>
      </View>
      <View style={styles.listView}>
        <View style={styles.optionStyle}>
          {itemData.map(item => {
            return (
              <View style={styles.optionItem} key={item.index}>
                <LinearGradinet
                  colors={[
                    'rgba(254,241,217,0.90)',
                    'rgba(254,241,217,0.20)',
                    'rgba(254,241,217,0)',
                  ]}
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}
                  style={styles.itemBg}>
                  <View style={styles.itemLeft} />
                  <View style={styles.itemRight}>
                    <View style={styles.itemTitle}>
                      <Text allowFontScaling={false} style={styles.itemTitleText}>{item.title}</Text>
                    </View>
                    <View style={styles.itemTextView}>
                      <Text allowFontScaling={false} style={styles.itemText}>收藏时间：</Text>
                      <Text allowFontScaling={false} style={styles.timeText}>{item.time}</Text>
                    </View>
                    <View style={styles.itemTextView}>
                      <Text allowFontScaling={false} style={styles.itemText}>来自：</Text>
                      <Text allowFontScaling={false} style={styles.itemText}>{item.from}</Text>
                    </View>
                    <View style={styles.itemTextView}>
                      <Text allowFontScaling={false} style={styles.itemText}>类型：</Text>
                      <Text allowFontScaling={false} style={styles.itemText}>{item.type}</Text>
                    </View>
                  </View>
                </LinearGradinet>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default CollectionView;

const styles = StyleSheet.create({
  parentLevel: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#FFF',
  },
  headerStyle: {
    width: windowWidth,
    height: 45,
    backgroundColor: '#ffb700',
  },
  headerText: {
    width: '80%',
    fontSize: 17,
    color: '#FFF',
    lineHeight: 45,
    textAlign: 'center',
  },
  radioStyle: {
    color: '#FABA3C',
  },
  listView: {
    width: windowWidth,
    height: windowHeight - 50,
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  optionStyle: {},
  optionItem: {
    width: windowWidth - 20,
    height: 120,
    borderRadius: 12,
    backgroundColor: '#FFF',
    // borderWidth:0.5,
    // borderColor:"#999",
    ...Platform.select({
      ios: {
        marginBottom: 12,
        shadowColor: '#DDD', //设置阴影色
        shadowOffset: {width: 0, height: 3}, //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        shadowOpacity: 1,
        shadowRadius: 4, //设置阴影模糊半径,该值设置整个阴影的半径，默认的效果就是View的四周都有阴影
      },
      android: {
        elevation: 7,
        marginBottom: 10,
      },
    }),
  },
  itemLeft: {
    width: 120,
    height: 119,
    borderRadius: 12,
    borderRightWidth: 0.5,
    borderRightColor: '#ddd',
    backgroundColor: '#fd6e82',
  },
  itemRight: {
    width: windowWidth - 140,
    height: 119,
    paddingTop: 10,
    paddingLeft: 20,
  },
  itemBg: {
    width: windowWidth - 20,
    height: 120,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  itemTitle: {
    width: '100%',
    height: 30,
    marginBottom: 8,
  },
  itemTitleText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000',
    lineHeight: 30,
  },
  itemTextView: {
    marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  itemText: {
    fontSize: 13,
    color: '#000',
    ...Platform.select({
      ios: {
        fontSize: 14,
      },
    }),
  },
  timeText: {
    color: '#808080',
  },
  readioGroups:{
    marginLeft: windowWidth/6 + 15,
    marginTop: 10
  }
});
