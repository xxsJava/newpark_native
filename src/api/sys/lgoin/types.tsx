/*
 * @Author: xxs
 * @Date: 2023-10-18 10:06:43
 * @LastEditTime: 2023-10-30 18:30:06
 * @FilePath: \newpark_native\src\api\sys\lgoin\types.tsx
 * @Description: 登录entity
 */
export type UserLoginType ={ 
    uPhone:string,
    uEmail:string,
    password:string
}

export type SmsLoginType={
    phone: string,
    code: string
}