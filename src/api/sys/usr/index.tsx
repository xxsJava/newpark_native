import request from '../../../config/axios';

export const usrInfo =(): Promise<IResponse> => {
    return request.post({
        url: '/usr/usrInfoFindById'
    });
}