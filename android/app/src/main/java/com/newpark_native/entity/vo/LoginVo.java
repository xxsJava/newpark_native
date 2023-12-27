/**
 * @author xxs18
 * @description: TODO
 * @date 2023/12/25 18:28
 */
package com.newpark_native.entity.vo;

/**
 * @author xxs18
 * @description: 登录参数
 * @date 2023/12/25 18:28
 */
public class LoginVo {

    /**
     * 用户Id
     */
    private String usrId;

    /**
     * 登录令牌
     */
    private String token;

    public String getUsrId() {
        return usrId;
    }

    public void setUsrId(String usrId) {
        this.usrId = usrId;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
