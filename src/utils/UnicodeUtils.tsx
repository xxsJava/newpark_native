/**
* 代码描述: unicode编码封装类
* 作者: xxs
* 创建时间:2023/10/17 09:30:14
*/
export const UnicodeUtil = () =>{
    
    /**
     * 解码
     * @param unicodeStr unicode 编码字符串
     * @returns string
     */
    const uniCodeSpane = (unicodeStr:string) =>{
        return eval("'"+unicodeStr+"'") +" "
    }

    return {
        uniCodeSpane: uniCodeSpane
    }
}