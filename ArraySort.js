/*   sort排序只能排10以内的数字我们需要借助一个比较函数来对其进行排序  */
function Compare(x, y) {
    if (x > y) {
        return 1
    } else if (x < y) {
        return -1
    } else {
        return 0
    }
}
var arr = [0, 9, 30, 3, 8, 48, 6, 293, 876]
console.log(arr.sort(Compare))