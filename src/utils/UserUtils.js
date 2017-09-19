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

let signOnState;

const subscribers = new Map();    //观察者

/**
 * 获取当前登录用户
 * @returns {{username: string, uid: string}}
 */
export function getCurrentUser() {
    if (currentUser === null || currentUser === undefined ||
        currentUser.username === null ||
        currentUser.username === undefined ||
        currentUser.username === '') {
        updateCurrentUser({
            username: getCookie("username"),
            token: getCookie("token")
        });
    }
    return currentUser;
}

/**
 * 更新用户信息
 * @param user
 */
export function updateCurrentUser(user) {
    Object.assign(currentUser, user);
    if (currentUser.username !== '' && currentUser.username !== undefined) {
        setSignOnState(true)
    } else {
        setSignOnState(false);
        console.log("Test");
    }
}

/**
 * 清除用户信息
 */
export function clearCurrentUser() {
    for (let key in currentUser) {
        if (key === 'username' || key === 'uid') {
            currentUser[key] = '';
        } else {
            delete currentUser[key];
        }
    }
    setSignOnState(false)
}

//进行观察
export function subscribe(tag, action) {
    subscribers.set(tag, action)
}

//取消观察
export function unSubscribe(tag) {
    if (subscribers.has(tag)) {
        subscribers.delete(tag)
    }
}

function publish(data) {
    for (let key in subscribers) {
        if (subscribers[key] !== null && subscribers[key] !== undefined) {
            subscribers.key(data)
        }
    }
}

export function getSignOnState() {
    let username = getCurrentUser().username;
    if (username === null || username === '' || username === undefined) {
        setSignOnState(false)
    } else {
        setSignOnState(true)
    }
    return signOnState;
}

function setSignOnState(newState) {
    let oldState = signOnState;
    signOnState = newState;
    if (oldState !== newState) {
        publish({
            oldState: oldState,
            nweState: newState
        })
    }
}