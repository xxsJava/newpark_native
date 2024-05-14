/*
 * @Author: zhn
 * @Date: 2024-4-20 17:44:34
 * @FilePath: src/views/socializing/components/ContactsModul.tsx
 * @Description: 选择学校页面
 */
import { Toast, useToast } from '@gluestack-ui/themed';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  PanResponderInstance,
  Platform,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { navigate } from '../../../../config/routs/NavigationContainer';
import {PinyinUtil} from '../../../../config/routs-config/StackerRout/pinyin';
import {selSchoolApi} from '../../../../api/sys/reg/index';
import Storage from '../../../../utils/AsyncStorageUtils';
const windowWidth = Dimensions.get('window').width;
type DataItem = any;
type DataSection = { title: string; data: DataItem[] };
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
            <Text style={{ color: '#008fe4', fontSize: 10 }}>
              {section.title}
            </Text>

          </TouchableOpacity>
        ))}
      </View>
      {panResponder && <View {...panResponder.panHandlers} />}
    </View>
  );
};

const SchoolData: React.FC = () => {
  const toast = useToast();
  //选中的索引值
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

  const sectionListRef = useRef<SectionList<DataItem, DataSection> | null>(
    null,
  );

  const renderItem = ({ item }: { item: DataItem }) => (
    <TouchableOpacity
      onPress={() => {console.log(item.schoolId);
      }}
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
      <View style={styles.itemRight}>
        <Text style={styles.itemName}>
          {item.schoolName}
        </Text>
        <View style={styles.itemLabelStyle} />
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section }: { section: DataSection }) => (
    <View style={{ backgroundColor: '#f4f4f4', padding: 4, height: 32 }}>
      <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
    </View>
  );

  // item 90
  const ITEM_HEIGHT = 90;

  //计算分组高度
  const pre = (num: number) => {
    let pre = 0;
    for (let i = 0; i < num; i++) {
      // console.log(peopData[i].data.length,'这个是'+ [i]);
      
      // pre += peopData[i].data.length;
    }
    return pre;
  };

  //计算总高度
  const _getHigth = () => {
    let nodeNum = 0;
    // console.log('计算高度', data.length);
    for (let i = peopData.length - 1; i >= 0; i--) {
      nodeNum += peopData[i].data.length * ITEM_HEIGHT + (32 + 8 * (peopData[i].data.length - 1));
      // console.log(data[i].title+'------>',data[i].data.length)
    }
    return nodeNum;
  };

  // 这里是滚动到指定位置
  const handleSectionSelect = (index: number) => {

    setSelectedSectionIndex(index);
    console.log(index,'=====');
    //一个分组的高度
    // item * 子元素的数量 + 标题 + 间隙 * 索引条下标 + (索引下标+偏移值)
    let nodeSum = pre(index);
    console.log('子元素数量------>', nodeSum);
    const itemHeight =
      (ITEM_HEIGHT * nodeSum + 32 + 8 * (nodeSum - 1)) + ((index - 1) * 16);
    console.log('分组高度----->', itemHeight);
    //总高度
    // (item * 每个分组子元素的数量 + 标题 + 间隙 ) * 分组数量
    // const itemSum = (ITEM_HEIGHT * data[index].data.length + 40) * data.length;
    const itemSum = _getHigth();
    console.log('总高度---->', itemSum);
    console.log('滚动到的位置----->', itemSum - itemHeight);
    toast.show({
      placement: 'bottom',
      render: () => {
        return (
          <Toast action="attention" variant="solid">
            <Text allowFontScaling={false}>{peopData[index].title}</Text>
          </Toast>
        )
      },
    });
    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex: index,
        itemIndex: 0,
        //偏移高度
        // 具体滚动
        viewOffset: itemSum - (itemHeight) + 12,
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
    for (var i = 0; i < peopData.length; i++) {
      if (str == peopData[i].title) {
        console.log(str + ':' + peopData[i].peopData.length);
      }
    }
    // console.log(sum() , '一共有这些子元素');
    console.log(pre(1),'这个是我的num数据'); //13
  };

  const [peopData,setPeopleData] = React.useState([]);

// 展示列表
const listData = async () => {

    // const contentsJson = contextListJson;
    const param = {
      schoolCode:'',
      schoolName:''
    }
    const ListDataAPI = await selSchoolApi(param);
    const list = ListDataAPI.data;
    // console.log('ListDataAPI 在这里', list);
  
    let groupArray = list.reduce((result: { [x: string]: { data: any[]; }; }, currentValue: { schoolName: string; }) => {
      // console.log(result, '这个是结果');
    //   currentValue.nickname = currentValue.nickname.toUpperCase();
      const firstLetter = PinyinUtil.getFirstLetter(currentValue.schoolName.charAt(0));
  
      // console.log(currentValue.schoolName, firstLetter, 'firstLetter');
  
      if (!result[firstLetter]) {
        result[firstLetter] = {
          title: firstLetter,
          data: []
        };
      }
      
      result[firstLetter].data.push(currentValue);
      // console.log(result[firstLetter].data,'-----------');
      return result;
    }, {});
   
    // 转换结果为数组形式
    let resultArray: DataSection[] = Object.values(groupArray);
  // 根据对象的name属性进行升序排序
    resultArray.sort((a, b) => (a.title > b.title) ? 1 : -1);
    setPeopleData(resultArray);
    setrefsh(false)
    // for (let i = 0; i < resultArray.length; i++) {
    //   resultArray[i].title.sort();
    //   console.log(resultArray[i].title.sort(),'---------');
    // }
  
  }
  React.useEffect(() => {
    listData();
    num('江西师范大学')
  }, []); // 只在组件挂载时调用一次
  const [refsh,setrefsh] = useState(true);
  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      {/* 这个是索引条 */}
      <AlphabetIndex sections={peopData} onSectionSelect={handleSectionSelect} />
      <Text>99999</Text>
      <SectionList
        ref={sectionListRef}
        sections={peopData}
        // 这里
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        getItemLayout={_ItemLayout}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        stickySectionHeadersEnabled={true}
        refreshing={refsh}
        onRefresh={()=>{listData();}}
      />
    </View>
  );
};

export default SchoolData;

const styles = StyleSheet.create({
  indexBarStyle: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    right: 5,
    ...Platform.select({
      ios: {
        top: 0
      },
      android: {
        top: 10
      },
    }),
  },
  itemBar: {
    ...Platform.select({
      ios: {
        paddingBottom: 2
      },
      android: {
        padding: 0
      },
    }),
  },
  listItem: {
    width: windowWidth,
    height: 80,
    marginBottom: 10,
    borderLeftWidth: 8,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  itemRight: {
    width: windowWidth - 90,
    height: 90,
    paddingLeft: 5,
    paddingTop: 35
  },
  itemName: {
    color: '#000'
  },
  itemLabelStyle: {
    height: 40,
    marginTop: -2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});
