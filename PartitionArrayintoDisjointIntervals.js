/*
    Given an array A, partition it into two (contiguous) subarrays left and right so that:

    Every element in left is less than or equal to every element in right.
    left and right are non-empty.
    left has the smallest possible size.
    Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.

    Input: [5,0,3,8,6]
    Output: 3
    Explanation: left = [5,0,3], right = [8,6]

    Input: [1,1,1,0,6,12]
    Output: 4
    Explanation: left = [1,1,1,0], right = [6,12]
*/

/*
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
    //遍历元素记录下当前元素的值 在遍历前先申明一个元素将这个元素假定为最大的进行比较如果前面的大停止 记录否则继续遍历
    var j = 0;
    var fir = A[0];
    var max_value = fir;
    for(var i=0;i<A.length;i++){
        max_value = Math.max(A[i],max_value);
        if(A[i] < fir){
            fir = max_value;
            j = i;
        }
    }
    return j+1;
};