import axios from "axios";
import {SIGN_ON, SIGN_UP, TEST, VERIFY} from "./Api";

function get(url, data, action) {
    axios.get(url, {
        params: data
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