import request from '../../../config/axios';

export const usrInfo =(): Promise<IResponse> => {
    return request.post({
        url: '/usr/usrInfoFindById'
    });
}

// 个人信息统计API
export const personInfoStat = ():Promise<IResponse> => {
    return request.get ({
        url:'/v1/usrInfoCount'
    })
}