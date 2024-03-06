/*
 * @Author: zhn
 * @Date: 2024-3-5 10:06:43
 * @FilePath: \newpark_native\src\api\sys\post\types.tsx
 * @Description: 帖子API
 */
// 查询全校或本校的帖子
export type PostsType ={ 
    pageNo:number,
    pageSize:number,
    schoolId:number,
    TPubTimeSort:string
}
