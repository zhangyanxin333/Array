var moveZeroes = function(nums) {
    var arr = [];
    for(var i=0;i<nums.length;i++){
        if(nums[i] != 0){
            arr.push(nums[i])
        }
    }
    for(var j=arr.length;j<nums.length;j++){
        arr.push(0);
    }
    for(var k=0;k<arr.length;k++){
        nums[k] = arr[k]
    }    
};