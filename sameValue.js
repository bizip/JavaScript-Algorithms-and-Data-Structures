//Write a function called same which accept two arrays.
// the function should return true if every value in the first array
//has it corresponding value squared in the second array.
//the frequency of values must be the same.

const same1=(arr1,arr2)=>{
    if(arr1.length!==arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        let correctIndex=arr2.indexOf((arr1[i]**2))
        if(correctIndex===-1){
            return false;
        }else{
            arr1.splice(correctIndex,1)

        }
        
    }
    return true;
}
same1([1,2,3],[1,4,9])