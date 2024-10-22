/**
 * 代码描述: 悬赏功能api传参数据
 * 作者:cxr
 * 创建时间:2023/12/27 18:22:11
 */

// 悬赏浏览api参数
export type rewardListType = { 
    pageNo:number,
    pageSize:number
}
// 悬赏发布api参数
export type rewardPublishType = { 
    endTime:number,
    rdesc:string,
    rmoney:number,
    rtitle:string,
    startTime:number
}
// 单条条件浏览悬赏API
export type rewardOneApiType = {
    uid:number
}
