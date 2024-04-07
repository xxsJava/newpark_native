/*
 * @Author: zhn
 * @Date: 2024-2-28 15:06:43
 * @FilePath: \newpark_native\src\api\sys\Recommended\types.tsx
 * @Description: 推荐页面
 */
// 浏览商品
export type productType ={ 
    pageNo:number,
    pageSize:number,
    priceSort:string,
    PStatus:string,
    timeSort:string,
};
// 发布商品
export type productpType ={ 
    pname:string,
    pdesc: string,
    pprice:number,
    pimgs:string,
    pstatus: string,
    ppubTime: number,
    upath:string,
    pother:string
}
// // 编辑商品
// export type productpType ={ 
//     pdesc:string,
//     pimgs:string,
//     pname:string,
//     pother:string,
//     pprice:number,
//     ppubTime:number,
//     pstatus:string,
// }
// 社区查看API
// recommLookType
export type recommLookType = {
    pageNo:number,
    pageSize:number
}
