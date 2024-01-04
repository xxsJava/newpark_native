/**
 * 代码描述: home页api传参数据
 * 作者:cxr
 * 创建时间:2023/12/25 10:03:11
 */

// 帖子列表api参数
export type postListType = { 
    pageNo:number,
    pageSize:number
}

// 添加点赞api参数
export type postLikeParam = { 
    likeTime: number,
    comId: number,
    postsId: number,
    likeType: number,
    // uid:number
}

//评论api参数Data
export type postCommentsData = { 
    pageNo:number,
    pageSize:number,
    postsId:number
}
