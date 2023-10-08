/*
 * @Author: xxs
 * @Date: 2023-10-07 15:24:51
 * @LastEditTime: 2023-10-08 09:22:33
 * @FilePath: \newpark_native\src\hooks\i18\i18next.ts
 * @Description: desc
 */
import i18next, { ModuleType } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from "react-native-localize";
import Storage from '../../utils/AsyncStorageUtils';


export const lngKey =  '@lng';

const languageDetector = {
  type: 'languageDetector' as ModuleType,
  async: true,
  detect: function (callback:any) {
    // 获取上次选择的语言
    Storage.get(lngKey).then(lng => {
        callback(lng);
    });
  },
};

// 初始化i18next配置
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'zh', // 切换语言失败时的使用的语言
    debug: true, // 开发环境开启调试
    // 资源文件
    resources: {
      en: {
        translation: require('../../locales/en.json'),
      },
      zh: {
        translation: require('../../locales/zh-CN.json'),
      },
    },
    react: {
      useSuspense: false,
    },
  });

/**
 * 获取当前系统语言
 * @returns
 */
export const getSystemLanguage = (): string => {
  console.log('获取当前系统语言')
  const locales = RNLocalize.getLocales();
  return locales[0].languageCode;
};

/**
 * 切换语言
 * @param lng
 */
export const changeLanguage = async (lng?: 'en' | 'zh') => {
  // 切换语言
  await i18next.changeLanguage(lng);
  // 持久化当前选择
  Storage.set(lngKey, lng);
};

export default i18next;