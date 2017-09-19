export function parseString(object) {
    let array = [];
    let i = 0;
    for (let key in object) {
        array[i++] = key + ":" + object[key];
    }
    return array.join("\n")
}

export function parseArray(object) {
    let array = [];
    let i = 0;
    for (let key in object) {
        array[i++] = object[key];
    }
    return array
}