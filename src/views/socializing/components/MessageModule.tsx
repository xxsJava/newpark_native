
import React, {useRef} from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
  SectionList,
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradinet from 'react-native-linear-gradient';
import {navigate} from '../../../config/routs/NavigationContainer';

const windowWidth = Dimensions.get('window').width;
type DataItem = any;
type DataSection = {title: string; data: DataItem[]};

const ListIndex: React.FC = () => {

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
        <Text allowFontScaling={false} style={styles.itemName}>{item.name}</Text>
        <View style={styles.itemLabelStyle}>
          <LinearGradinet
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
            <Text allowFontScaling={false} style={styles.labelText}>{item.labelText}</Text>
          </LinearGradinet>
        </View>
      </View>
    </TouchableOpacity>
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
  
  return (
    <View style={{flex: 1, marginTop: 10}}>
     <SectionList
        ref={sectionListRef}
        sections={data}
        renderItem={renderItem}
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
    marginBottom: 1,
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
    paddingTop: 25,
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
