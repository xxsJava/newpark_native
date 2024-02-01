/*
 * @Author: zhn
 * @Date: 2024-1-26 10:06:43
 * @LastEditTime: 
 * @FilePath: \newpark_native\src\api\sys\reg\types.tsx
 * @Description: 注册接口
 */
export type UserRegType ={ 
    description:string,
    pass:string,
    schoolId:number,
    uid:number,
    ulab:string,
    unikname:string,
    upath:string,
    uphone:string,
    usex:number,
    uspecialty:string,
    ustartTime:number
}
export type selectSchoolType ={
    schoolCode:string,
    schoolName:string
}