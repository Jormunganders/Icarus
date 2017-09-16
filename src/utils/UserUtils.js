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

//当前登录用户，单例模式
//观察者模式，当登录状态发生改变的时候，进行通知

//当前登录用户，username | uid 为空，则代表未登录
const currentUser = {
    username: '',
    uid: ''
};

const subscribers = {};    //观察者

/**
 * 获取当前登录用户
 * @returns {{username: string, uid: string}}
 */
export function getCurrentUser() {
    return currentUser;
}

/**
 * 更新用户信息
 * @param user
 */
export function updateCurrentUser(user) {
    Object.assign(currentUser, user)
}

/**
 * 清除用户信息
 */
export function clearCurrentUser() {
    for (let key in currentUser) {
        if (key === 'username' || key === 'uid') {
            currentUser.key = '';
        } else {
            delete currentUser.key;
        }
    }
}

//进行观察
export function subscribe(tag, action) {
    subscribers.tag = action
}

//取消观察
export function unSubscribe(tag) {
    delete subscribers.tag
}

function publish(data) {
    for (let key in subscribers) {
        if (subscribers.key !== null && subscribers.key !== undefined) {
            subscribers.key(data)
        }
    }
}