/*
 * @Author: xxs
 * @Date: 2023-10-31 17:43:59
 * @LastEditTime: 2024-02-22 13:56:13
 * @FilePath: \newpark_native\src\hooks\state\type.tsx
 * @Description: 定义状态类型
 */
export interface CounterContextType {
  corner: number;
  incrementsetCorner: (corner:number) => void;
}