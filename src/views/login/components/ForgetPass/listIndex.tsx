// import {useToast} from 'native-base';
// import { useToast, Toast, ToastTitle } from '@gluestack-ui/themed';
import React, { useRef, useState } from 'react';
import {
  PanResponderInstance,
  SectionList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

type DataItem = string;
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
    <View
      style={{position: 'absolute', right: 0, top: 0, bottom: 0, zIndex: 1}}>
      <View>
        {sections.map((section, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onSectionSelect(index)}
            style={{padding: 5}}>
            <Text allowFontScaling={false}>{section.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {panResponder && <View {...panResponder.panHandlers} />}
    </View>
  );
};

const ListIndex: React.FC = () => {
  // const toast = useToast();
  //选中的索引值
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

  const sectionListRef = useRef<SectionList<DataItem, DataSection> | null>(
    null,
  );

  const renderItem = ({item}: {item: DataItem}) => (
    <View style={{padding: 10}}>
      <Text allowFontScaling={false}>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({section}: {section: DataSection}) => (
    <View style={{backgroundColor: '#f4f4f4', padding: 10}}>
      <Text allowFontScaling={false} style={{fontWeight: 'bold'}}>{section.title}</Text>
    </View>
  );

  //数据可以可改造
  const data: DataSection[] = [
    {title: 'A', data: ['Apple', 'Apricot', 'Avocado']},
    {title: 'B', data: ['Banana', 'Blackberry', 'Blueberry']},
    {title: 'C', data: ['Cherry', 'Coconut', 'Cranberry']},
    {title: 'D', data: ['Dpple', 'Dpricot', 'Dvocado']},
    {title: 'E', data: ['Eanana', 'Elackberry', 'Elueberry']},
    {title: 'F', data: ['Fherry', 'Foconut', 'Franberry']},
    {title: 'G', data: ['Banana', 'Blackberry', 'Blueberry']},
    {title: 'H', data: ['Cherry', 'Coconut', 'Cranberry']},
    {title: 'L', data: ['Dpple', 'Dpricot', 'Dvocado']},
    {title: 'M', data: ['Eanana', 'Elackberry', 'Elueberry']},
    {title: 'J', data: ['Fherry', 'Foconut', 'Franberry']},
  ];

  //item高度
  const ITEM_HEIGHT = 20;

  const handleSectionSelect = (index: number) => {
    setSelectedSectionIndex(index);

    //一个分组的高度
    const itemHeight =
      //30为分组标题高度
      (ITEM_HEIGHT + 30) * data[index].data.length * index + 5 * index;

    //总高度
    const itemSum = (ITEM_HEIGHT * data[index].data.length + 20) * 11;

    console.log('滚动到的位置----->', itemSum - itemHeight);

    // toast.show({
    //   placement: 'bottom',
    //   render: () => {
    //     return (
    //       <Text>{data[index].title}</Text>
    //     )
    //   },
    // });

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
    //总高度 这里写固定了 实际需要计算每个分组有多少数据
    const dataHight =
      (ITEM_HEIGHT * data[selectedSectionIndex].data.length + 20) * 11;

    console.log(dataHight);
    return {
      index,
      length: ITEM_HEIGHT,
      offset: dataHight,
    };
  };
  return (
    <View style={{flex: 1}}>
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
