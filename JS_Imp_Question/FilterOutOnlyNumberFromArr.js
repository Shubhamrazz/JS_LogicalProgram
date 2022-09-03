var arr=["Rishabh",40,"Bhabhik",60,"Sunny",10,"Suraj",50];
//output:[40,60,10,50]

//Example of typeOf method
//console.log(typeof(arr[3]));
var len=arr.length;
var numArr=[];
for(var i=0;i<len;i++){
    if(typeof(arr[i])=="number"){
        numArr.push(arr[i]);
    }
}
console.log("Number array:"+numArr);


//ES6 
//var arrR=[30,60,70,50,90,80];
//var filterArr=arrR.filter(i=> i>50);
//console.log(filterArr);

var filterArr=arr.filter(i=>typeof(i)=="string");
console.log(filterArr);
