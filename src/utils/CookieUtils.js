//向 Cookie 中写入数据
export function setCookie(data, time = 10) {
    for (let key in data) {
        let entry = key + "=" + data[key] + "; expires=" +
            time * 24 * 60 * 60 * 1000;
        document.cookie = entry;
    }
}

//从 Cookie 中获取数据
export function getCookie(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

export function printCookie() {
    console.log(document.cookie)
}