/**
 * 获取用户信息
 */
import {getCookie} from "./CookieUtils";

export function getUserInfo() {
    return {
        username: getCookie("username"),
        token: getCookie("token")
    }
}