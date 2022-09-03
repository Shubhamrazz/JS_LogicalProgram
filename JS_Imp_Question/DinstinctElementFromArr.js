var a=[1,5,7,9,7,6,8];

//a.push(7);
//console.log(a);

//var i=a.indexOf(9);
//console.log(i);
function dinctinctArr(arr){
var distArr=[];
for(var i=0;i<a.length;i++ ){
    if(distArr.indexOf(a[i]) == -1){
        distArr.push(a[i]);
        console.log(distArr[i]);
    }
}
return distArr;
}

//calling the func
console.log(dinctinctArr(a));
