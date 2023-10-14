// Bubble Sort
let arr = [14,16,78,54,6,44,23,3,7,1]
let sizee = arr.length
for(i=0;i<sizee;i++){
    for(j=0;j<sizee;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
for(i=0;i<sizee;i++){
    console.log(arr[i])
}

let x = 0
if(!x){
    console.log("Hello World")
}