/**
@param {number} rowIndex
@return {number[]}
 */
var getRow = function(rowIndex) {
    //遍历行数申明空数组
    var arr = [];
    for(var i=0;i<=rowIndex;i++){
        var current = [i];
        current[0] = 1;current[i] = 1;
        for(var j=1;j<i;j++){
            current[j] = current[i-1][j-1] + current[i-1][j];
        }
        arr.push(current);
    }
    return arr[rowIndex];
};