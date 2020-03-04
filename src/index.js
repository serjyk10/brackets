module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;
    let strArr = str.split('');
    let completes = bracketsConfig.map((arr) => arr.join(''));

    for (let i = 0; i < str.length; i++) {
        for (let x = 0; x < completes.length; x++) {
            if (strArr[i] === completes[x][0] && strArr[i + 1] === completes[x][1]) {
                strArr.splice(i, 2);
                i = -1;
            }
        }
    }
    return strArr.length == 0 ? true : false;
}
