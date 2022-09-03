//Use of ternary operator
// var arr=17;
// var t=(arr>18)?console.log("You are eligible to apply for job"):console.log("You are not eligible for this role");
// console.log(t);
var arr=[4,5,7,45,1,4,6,5,7,9,,8,1];
var count={};
for(var i=0;i<arr.length;i++){
    var num=arr[i];
    count[num]=count[num] ? count[num] + 1 : 1;
}
console.log(count);
