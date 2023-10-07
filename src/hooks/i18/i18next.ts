/*
 * @Author: xxs
 * @Date: 2023-10-07 15:24:51
 * @LastEditTime: 2023-10-07 16:05:58
 * @FilePath: \newpark_native\src\hooks\i18\i18next.ts
 * @Description: desc
 */
import i18next, { ModuleType } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from "react-native-localize";

export const lngKey =  '@lng';

const languageDetector = {
  type: 'languageDetector' as ModuleType,
  async: true,
  detect: function (callback:any) {
    // 获取上次选择的语言
    // storage.get(lngKey, 'locale').then(lng => {
    //   // 如果是跟随本地，则获取系统语言
    //   if (lng === 'locale') {
    //     callback(getSystemLanguage());
    //   } else {
        callback('zh');
    //   }
    // });
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
        translation: require('../../locales/languages/en.json'),
      },
      zh: {
        translation: require('../../locales/languages/zh-CN.json'),
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
//   await storage.set(lngKey, lng);
};

export default i18next;