function reverse(arr){
var array2 = [];

for (var i=0; i<arr.length; i++){
array2.push(arr[arr.length-1-i]);
}
return array2;
}

var arr = ["a", "b", "c", "d", "e"];
arr = reverse(arr);
console.log(arr);