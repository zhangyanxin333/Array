/*
    @param {number[]} nums
    @param {number} k
    @return {void} Do not return anything, modify nums in-place instead.
*/
var rotate = function(nums, k) {
    for(var i=1;i<=k;i++){
        var num = nums.pop();
        nums.unshift(num);
    }
};
