export function parseString(object) {
    let array = [];
    let i = 0;
    for (let key in object) {
        array[i++] = key + ":" + object[key];
    }
    return array.join("\n")
}