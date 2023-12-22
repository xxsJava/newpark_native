/*
 * @Author: xxs
 * @Date: 2023-10-31 17:43:59
 * @LastEditTime: 2023-11-01 11:41:38
 * @FilePath: \newpark_native\src\hooks\state\type.tsx
 * @Description: 定义状态类型
 */
export interface CounterContextType {
  phone: string;
  incrementsetPhone: (phoen: string) => void;
}