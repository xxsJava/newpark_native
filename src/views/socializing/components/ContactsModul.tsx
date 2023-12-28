// import {useToast} from 'native-base';
import {useToast} from '@gluestack-ui/themed';
import React, {useState, useRef, Component} from 'react';
import {
  Button,
  View,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  PanResponderInstance,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {navigate} from '../../../config/routs/NavigationContainer';
import {any} from 'prop-types';

const windowWidth = Dimensions.get('window').width;
type DataItem = any;
type DataSection = {title: string; data: DataItem[]};
type AlphabetIndexProps = {
  sections: DataSection[];
  onSectionSelect: (index: number) => void;
};

const AlphabetIndex: React.FC<AlphabetIndexProps> = ({
  sections,
  onSectionSelect,
}) => {
  const [panResponder, setPanResponder] = useState<PanResponderInstance | null>(
    null,
  );
  //索引条
  return (
    <View style={styles.indexBarStyle}>
      <View>
        {sections.map((section, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onSectionSelect(index)}
            style={styles.itemBar}>
            <Text style={{color: '#008fe4', fontSize: 10}}>
              {section.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {panResponder && <View {...panResponder.panHandlers} />}
    </View>
  );
};


const data: DataSection[] = [
  {
    title: 'A',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 1,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 1,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 1,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'B',
    data: [
      {
        name: '聊天室名称',
        labelText: '123',
        color: 2,
        lableType: 1,
        icon: true,
      },
    ],
  },
  {
    title: 'C',
    data: [
      {
        name: '社区频道名称',
        labelText: '#打卡',
        color: 3,
        lableType: 2,
        icon: false,
      },
      {
        name: '社区频道名称',
        labelText: '#打卡',
        color: 3,
        lableType: 2,
        icon: false,
      },
    ],
  },
  {
    title: 'D',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 1,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 1,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'E',
    data: [
      {
        name: '聊天室名称',
        labelText: '123',
        color: 2,
        lableType: 1,
        icon: true,
      },
      {
        name: '聊天室名称',
        labelText: '123',
        color: 2,
        lableType: 1,
        icon: true,
      },
    ],
  },
  {
    title: 'F',
    data: [
      {
        name: '社区频道名称',
        labelText: '#打卡',
        color: 3,
        lableType: 2,
        icon: false,
      },
      {
        name: '社区频道名称',
        labelText: '#打卡',
        color: 3,
        lableType: 2,
        icon: false,
      },
    ],
  },
  {
    title: 'G',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 1,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 1,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'H',
    data: [
      {
        name: '聊天室名称',
        labelText: '123',
        color: 2,
        lableType: 1,
        icon: true,
      },
      {
        name: '聊天室名称',
        labelText: '123',
        color: 2,
        lableType: 1,
        icon: true,
      },
    ],
  },
  {
    title: 'I',
    data: [
      {
        name: '社区频道名称',
        labelText: '#打卡',
        color: 3,
        lableType: 2,
        icon: false,
      },
      {
        name: '社区频道名称',
        labelText: '#打卡',
        color: 3,
        lableType: 2,
        icon: false,
      },
    ],
  },
  {
    title: 'J',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 1,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 1,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'K',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'L',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'M',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'N',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'O',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'P',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'Q',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'R',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'S',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'T',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'U',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'V',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'W',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'X',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'Y',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },
  {
    title: 'Z',
    data: [
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
      {
        name: '牛友名称',
        labelText: '牛友',
        color: 2,
        lableType: 1,
        icon: false,
      },
    ],
  },

  // 更多的数据...
];

const ListIndex: React.FC = () => {
  const toast = useToast();
  //选中的索引值
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

  const sectionListRef = useRef<SectionList<DataItem, DataSection> | null>(
    null,
  );

  const renderItem = ({item}: {item: DataItem}) => (
    <TouchableOpacity
      onPress={() => navigate('CheckRoute')}
      style={[
        styles.listItem,
        {
          borderLeftColor:
            item.color === 1
              ? '#FABA3C'
              : item.color === 2
              ? '#6A1B9A'
              : '#26C78C',
        },
      ]}>
      <View style={styles.itemLeft}>
        <View style={styles.avatarStyle} />
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.itemName}>
          {item.name}
        </Text>
        <View style={styles.itemLabelStyle} />
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({section}: {section: DataSection}) => (
    <View style={{backgroundColor: '#f4f4f4', padding: 4, height: 32}}>
      <Text style={{fontWeight: 'bold'}}>{section.title}</Text>
    </View>
  );

  // item 90
  const ITEM_HEIGHT = 90;

  //计算分组高度
  const pre = (num: number) => {
    let pre = 0;
    for (let i = 0; i < num; i++) {
      pre += data[i].data.length;
    }
    return pre;
  };

  //计算总高度
  const _getHigth = () => {
    let nodeNum = 0;
    // console.log('计算高度', data.length);
    for (let i = data.length - 1; i >= 0; i--) {
      nodeNum += data[i].data.length * ITEM_HEIGHT + (32 + 8*(data[i].data.length-1));
      // console.log(data[i].title+'------>',data[i].data.length)
    }
    return nodeNum;
  };

  // 这里是滚动到指定位置
  const handleSectionSelect = (index: number) => {
    
    setSelectedSectionIndex(index);

    //一个分组的高度
    // item * 子元素的数量 + 标题 + 间隙 * 索引条下标 + (索引下标+偏移值)
    let nodeSum = pre(index);
    console.log('子元素数量------>',nodeSum);
    const itemHeight =
      (ITEM_HEIGHT * nodeSum + 32 + 8*(nodeSum-1)) + ((index-1) * 16);
    console.log('分组高度----->',itemHeight);
    //总高度
    // (item * 每个分组子元素的数量 + 标题 + 间隙 ) * 分组数量
    // const itemSum = (ITEM_HEIGHT * data[index].data.length + 40) * data.length;
    const itemSum = _getHigth();
    console.log('总高度---->',itemSum);
    console.log('滚动到的位置----->', itemSum - itemHeight);
    toast.show({
      placement: 'bottom',
      render: () => {
        return <Text allowFontScaling={false}>{data[index].title}</Text>;
      },
    });

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex: index,
        itemIndex: 0,
        //偏移高度
        // 具体滚动
        viewOffset: itemSum - (itemHeight)+12,
      });
    }
  };

  //这里是渲染的总高度
  const _ItemLayout = (data: any, index: number) => {
    //总高度 (item * item^n  + 标题 + 间隙) * 子元素的数量 = 分组的高度
    // const dataHight =
    //   (ITEM_HEIGHT * data[selectedSectionIndex].data.length + 40)* data.length;
    const dataHight = _getHigth();
    // console.log(data.length);
    // console.log('总高度-->', _getHigth());
    return {
      index,
      length: ITEM_HEIGHT,
      offset: dataHight,
    };
  };

  // 这里是获取子元素的数量
  const num = (str: string) => {
    // 遍历排好序的数据，获取每一个字母的位置
    for (var i = 0; i < data.length; i++) {
      if (str == data[i].title) {
        console.log(str + ':' + data[i].data.length);
      }
    }
    // console.log(sum() , '一共有这些子元素');
    console.log(pre(1)); //13
  };
  return (
    <View style={{flex: 1, marginTop: 10}}>
      <AlphabetIndex sections={data} onSectionSelect={handleSectionSelect} />
      <SectionList
        ref={sectionListRef}
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        getItemLayout={_ItemLayout}
        keyExtractor={(item, index) => {
          // console.log(item)
          return index.toString();
        }}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
};

export default ListIndex;

const styles = StyleSheet.create({
  indexBarStyle: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    right: 5,
    ...Platform.select({
      ios: {
        top: 0,
      },
      android: {
        top: 10,
      },
    }),
  },
  itemBar: {
    ...Platform.select({
      ios: {
        paddingBottom: 2,
      },
      android: {
        padding: 0,
      },
    }),
  },
  separator: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  listItem: {
    width: windowWidth,
    height: 80,
    marginBottom: 10,
    borderLeftWidth: 8,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemLeft: {
    width: 90,
    height: 90,
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 5,
  },
  itemRight: {
    width: windowWidth - 90,
    height: 90,
    paddingLeft: 5,
    paddingTop: 35,
  },
  avatarStyle: {
    width: 60,
    height: 60,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 30,
  },
  itemName: {
    color: '#000',
  },
  itemLabelStyle: {
    height: 40,
    marginTop: -2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  itemLabelBg: {
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  labelText: {
    fontSize: 12,
    color: '#000',
    lineHeight: 15,
    marginLeft: 4,
  },
  labelIcon: {},
});
