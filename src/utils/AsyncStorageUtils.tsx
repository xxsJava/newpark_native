import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * 代码描述: AsyncStorage封装
 * 作者: xxs
 * 创建时间:2023/10/07 11:36:44
 */
class Storage {
  /**
   * 设置数据
   * @param key 键
   * @param value 值
   * @returns
   */
  static set = (key: string, value: any) => {
    return AsyncStorage.setItem(key, value)
      .catch(e => {
        console.log(e, 'AsyncStorage封装-set异常');
      })
      .then(v => {
        return v;
      });
  };

  /**
   * 获取数据
   * @param key 键
   * @returns
   */
  static get = (key: string) => {
    return AsyncStorage.getItem(key)
      .catch(e => {
        console.log(e, 'AsyncStorage封装-get异常');
      })
      .then(v => {
        return v;
      });
  };

  /**
   * 修改数据
   * @param key 键
   * @param newValue 新值
   */
  static update = (key: string, newValue: any) => {
    return AsyncStorage.setItem(key, newValue)
      .catch(e => console.log('需要修改的', key, '不存在', e))
      .then(v => {
        return v;
      });
  };

  /**
   * 清空缓存
   * @returns
   */
  static clean = () => {
    return AsyncStorage.clear();
  };
}

export default Storage;
