import axios from "axios";
import {ACCOUNT_INFO, LINK_LIST, PUBLISH_POSTS, SIGN_ON, SIGN_ON_VERIFY, SIGN_OUT, SIGN_UP, TEST, VERIFY} from "./Api";

function get(url, data, action) {
    axios.get(url, {
        params: data,
        withCredentials: true
    }).then(action)
}

function post(url, data, action) {
    axios.post(url, tarsform(data),
        {
            withCredentials: true
        })
        .then(action)
}

export function time(data, action) {
    post(TEST, data, action)
}

function tarsform(object) {
    let array = new FormData();
    for (let key in object) {
        array.append(key, object[key])
    }
    return array
}

/**
 * 注册
 * @param user
 * @param action
 */
export function signUp(data, action) {
    post(SIGN_UP, data, result => {
        action(result.data)
    })
}

export function getVerify() {
    return VERIFY + "?time=" + new Date();
}

export function signOn(data, action) {
    post(SIGN_ON, data, result => {
        action(result.data)
    })
}

export function signOut(action) {
    post(SIGN_OUT, {}, result => {
        action(result.data)
    })
}

export function signOnVerify(data, action) {
    post(SIGN_ON_VERIFY, data, result => {
        action(result.data)
    })
}

/**
 * 获取帖子列表
 * page 第几页
 * row  每页行数
 * @param data
 * @param action
 */
export function getLinkList(data, action) {
    get(LINK_LIST, data, result => {
        action(result.data)
    })
}

/**
 * 发布帖子
 * username 用户id
 * cid 分类id
 * title 标题
 * content 内容
 * keywords 关键词
 * @param data
 * @param action
 */
export function publishPost(data, action) {
    post(PUBLISH_POSTS, data, result => {
        action(result.data)
    })
}

export function getAccountInfo(username, action) {
    get(ACCOUNT_INFO, {username: username}, result => {
        action(result.data)
    })
}