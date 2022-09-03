var arr=[30,20,70,80,30,70,30,70];
var len=arr.length;
arr.sort();
count=0;
for(var i=0;i<len;i++){
    for(var j=i+1;j<len;j++){
         if(arr[i]==arr[j]){
        count++;
        break;
       }
    }
}
console.log("Duplicate Element:" +count);