import {useToast} from 'native-base';
import React, {useState, useRef, Component} from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  PanResponder,
  PanResponderInstance,
  PixelRatio,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradinet from 'react-native-linear-gradient';
import {color} from 'native-base/lib/typescript/theme/styled-system';

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
            <Text style={{color: '#008fe4'}}>{section.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {panResponder && <View {...panResponder.panHandlers} />}
    </View>
  );
};

const ListIndex: React.FC = () => {
  const toast = useToast();
  //选中的索引值
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

  const sectionListRef = useRef<SectionList<DataItem, DataSection> | null>(
    null,
  );

  const renderItem = ({item}: {item: DataItem}) => (
    <View
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
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.itemLabelStyle}>
          {/* <LinearGradinet
            colors={
              item.lableType === 1
                ? ['rgba(233,231,255,0.9)', 'rgba(233,231,255,0)']
                : ['rgba(251,199,99,0.9)', 'rgba(251,199,99,0)']
            }
            start={{x: 0, y: 0}}
            end={item.lableType === 1 ? {x: 0, y: 1} : {x: 1, y: 0}}
            style={styles.itemLabelBg}>
            {item.icon && (
              <Feather size={14} name="user" style={styles.labelIcon} />
            )}
            <Text style={styles.labelText}>{item.labelText}</Text>
          </LinearGradinet> */}
        </View>
      </View>
    </View>
  );

  const renderSectionHeader = ({section}: {section: DataSection}) => (
    <View style={{backgroundColor: '#f4f4f4', padding: 4, height: 30}}>
      <Text style={{fontWeight: 'bold'}}>{section.title}</Text>
    </View>
  );

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

  const ITEM_HEIGHT = 100;

  const handleSectionSelect = (index: number) => {
    setSelectedSectionIndex(index);

    //一个分组的高度
    const itemHeight =
      (ITEM_HEIGHT + 30) * data[index].data.length * index + 4 * index;
    //总高度
    const itemSum = (ITEM_HEIGHT * data[index].data.length + 30) * 26;

    console.log('滚动到的位置----->', itemSum - itemHeight);
    toast.show({
      description: data[index].title,
      placement: 'bottom',
    });

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex: index,
        itemIndex: 0,
        //偏移高度 偏移160
        viewOffset: itemSum - itemHeight,
      });
    }
  };

  const _ItemLayout = (data: any, index: number) => {
    //总高度 (item * item^n  + 标题 + 间隙) = 分组的高度
    const dataHight =
      (ITEM_HEIGHT * data[selectedSectionIndex].data.length + 30) * 26;

    console.log(dataHight);
    return {
      index,
      length: ITEM_HEIGHT,
      offset: dataHight,
    };
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
        top: -30,
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
  listItem: {
    width: windowWidth,
    height: 90,
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
