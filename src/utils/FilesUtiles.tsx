import RNFS from 'react-native-fs';

/**
 * 代码描述: 文件操作
 * 作者: xxs
 * 创建时间:2024/01/09 11:25:58
 */

/**
 * 创建文件夹
 * @param filePath 文件名
 */
export const createDirs = async (filePath: string) => {
  try {
    if (!(await RNFS.exists(filePath))) {
      await RNFS.mkdir(filePath);
      console.log('Folder created successfully');
    } else {
      console.log('Folder already exists');
    }
  } catch (error) {
    console.error('Error creating folder: ', error);
  }
};

/**
 * 数据写入文件
 * @param filePath 文件名
 * @param jsonString 需要写入的数据
 */
export const writeFileData = (filePath: string, jsonString: any) => {
  RNFS.writeFile(filePath, jsonString, 'utf8')
    .then(() => {
      // 写入成功
      console.log('JSON data ');
    })
    .catch(error => {
      // 写入失败
      console.error('Error writing to the JSON file:', error);
    });
};

/**
 * 读取文件
 * @param filePath 文件地址
 */
export const readFileData = async (filePath: string) => {
  try {
    const fileContent = await RNFS.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(fileContent);
    return jsonData;
  } catch (error) {
    console.error('Error reading the JSON file:', error);
    return null;
  }
};


