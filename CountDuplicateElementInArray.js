var arr =["Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday","Monday","Monday","Tuesday","Sunday"];
var count=0;
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
    for(var j=i+1;j<arr.length;j++){
        if(arr[i] == arr[j]){
            count++;
            break;
        }
    }
}
console.log("Duplicate element::"+count);