//向 Cookie 中写入数据
export function setCookie(data, time = 10) {
    for (let key in data) {
        let entry = key + "=" + data[key] + "; expires=" +
            time * 24 * 60 * 60 * 1000 + "; path=/";
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

export function delCookie(name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if (cval !== null)
        document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString() + "; path=/";
}

export function printCookie() {
    console.log(document.cookie)
}