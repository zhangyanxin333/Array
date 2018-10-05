var sortArrayByParity = function(A) {
    var arr = [];
    for(var i=0;i<arr.length;i++){
        if(A[i] % 2 != 0){
            arr.push(A[i]);
        }
        else{
            arr.unshift(A[i]);
        }
    }
    console.log(arr)
};
var A = [3,1,2,4];
sortArrayByParity(A)