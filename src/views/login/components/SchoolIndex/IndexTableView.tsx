// import {useToast} from 'native-base';
// import { useToast, Toast, ToastTitle } from '@gluestack-ui/themed';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  PanResponderInstance,
  Platform,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
              <Text allowFontScaling={false} style={{color: '#008fe4'}}>{section.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {panResponder && <View {...panResponder.panHandlers} />}
      </View>
    );
  };

  const ListIndex: React.FC = () =>{
    // const toast = useToast();
    //选中的索引值
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  
    const sectionListRef = useRef<SectionList<DataItem, DataSection> | null>(
      null,
    );
    const renderItem = ({item}: {item: DataItem}) => (
        <TouchableOpacity style={styles.listItem}>
          <Text allowFontScaling={false} style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );

      const renderSectionHeader = ({section}: {section: DataSection}) => (
        <View style={{backgroundColor: '#f4f4f4', padding: 4, height: 30}}>
          <Text allowFontScaling={false} style={{fontWeight: 'bold'}}>{section.title}</Text>
        </View>
      );

      const data: DataSection[] = [
        {
            title: 'A',
            data:['安徽大学']
        },
        {
            title: 'B',
            data:['北京邮电大学']
        },{
            title:'C',
            data:['长安大学']
        },{
            title:'D',
            data:['东南大学','东华大学','大连理工大学']
        },{
            title:'E',
            data:['鄂尔多斯职业学院']
        },{
            title:'F',
            data:['复旦大学','福州大学']
        },{
            title:'G',
            data:['广西大学','贵州大学','桂林电子科技大学']
        },{
            title:'H',
            data:['海南大学','河南大学','黑龙江大学','湖南长沙理工大学']
        },{
            title:'J',
            data:['吉林大学','江南大学']
        },{
            title:'K',
            data:['喀什大学']
        },{
            title:'L',
            data:['兰州大学','辽宁大学']
        },{
            title:'M',
            data:['牡丹江职业技术学院']
        },{
            title:'N',
            data:['南京大学','南开大学']
        }
      ];

      const ITEM_HEIGHT = 50;

      const handleSectionSelect = (index: number) => {
        setSelectedSectionIndex(index);
    
        //一个分组的高度
        const itemHeight =
          (ITEM_HEIGHT + 30) * data[index].data.length * index + 2 * index;
        //总高度
        const itemSum = (ITEM_HEIGHT * data[index].data.length + 30) * 26;
    
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



    return(
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
    )
  }



  export default ListIndex;
  const styles = StyleSheet.create({
    indexBarStyle:{
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
    itemBar:{
        ...Platform.select({
            ios: {
              paddingBottom: 2,
            },
            android: {
              padding: 0,
            },
        }),
    },
    listItem:{
        height:50,
        borderBottomWidth:0.5,
        borderBottomColor:'#ccc'
    },
    itemText:{
        fontSize:17,
        color:'#555',
        textAlign:'center',
        lineHeight:50
    }
  })