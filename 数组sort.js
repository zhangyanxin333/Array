<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

</body>

</html>
<script>
    var arr = [1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 62, 4, 3, 345, 43532, 345, 7]

    function removeRepeat1(arr) {
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    arr.splice(j, 1);
                    j--;
                }
            }
        }
        return arr;
    }
    //console.log(removeRepeat(arr))

    function removeRepeat2(arr) {
        var newarr = [];
        for(var i=0;i<arr.length;i++){
            if(newarr.indexOf(arr[i]) == -1){
                //没找到的情况下返回-1
                newarr.push(arr[i])
            }
        }
        return newarr
    }
    console.log(removeRepeat2(arr))

    function removeRepeat3(arr) {
        //通过indexof判断此元素首次出现的位置下标与循环的下标是否相等
        for(var i=0;i<arr.length;i++){
            if(arr.indexOf(arr[i]) != i){
                arr.splice(i,1)
                i--;
            }
        }
        return arr
    }
    console.log(removeRepeat3(arr))

    function removeRepeat4(arr){
        var newarr = [];        
        for(var i=0;i<arr.length;i++){
            if(arr.indexOf(arr[i]) == i){
                newarr.push(arr[i])
            }
        }
        return newarr;
    }
    console.log(removeRepeat4(arr))
    
    function removeRepeat5(arr){
        //借助对象的键不能重复
        var newarr = [];
        var obj = {};
        for(var i=0;i<arr.length;i++){
            var key = arr[i];
            if(!obj[key]){
                obj[key] = true;
                newarr.push(key)
            }
        }
        return newarr;
    }
    console.log(removeRepeat5(arr))    
</script>