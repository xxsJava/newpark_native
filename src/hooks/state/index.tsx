import React, {createContext, useContext, useState} from 'react';
import {CounterContextType} from './type';

/*
 * @Author: xxs
 * @Date: 2023-10-31 17:44:37
 * @LastEditTime: 2023-11-01 10:35:02
 * @FilePath: \newpark_native\src\hooks\state\index.tsx
 * @Description: 全局状态
 */

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const useCounter = () => {
  console.log('全局hook 获取')
  const context = useContext(CounterContext);
  console.log(context)
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

//全局hook
export const CounterProvider: React.FC<any> = ({children}) => {

  const [phone, setPhone] = useState('');


  const incrementsetPhone = (phone:string) => {
    setPhone(phone)
  }

  const value: CounterContextType = {
    phone,
    incrementsetPhone
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
