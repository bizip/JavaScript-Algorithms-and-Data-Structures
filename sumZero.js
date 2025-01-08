// sumzero

const sumZero = (arr)=>{
    if(arr.length === 0) return;
    let start = 0;
    let end = arr.length -1;
    while(arr[start] < arr[end]){
        if(arr[start] + arr[end] === 0){
            console.log([arr[start], arr[end]]);
            return [arr[start] , arr[end]];
        }
        start +=1;
    }
    start

}

sumZero([-3,-2,-1,0,1,2,3]);