// Write a function called same, which acept two arrays, the function should return true 
// if every value in the array has its corresponding value squared in the second array.
//  The flequency of the value must be the same

const same = (arr1, arr2)=>{
// if arr2 != arr2 return false
// loop through arr1 
// if arr2.include arr1*2 return true
// else return false
if(arr1.length !== arr2.length) return false;
for(let i=0; i <= arr2.length; i++){
    if(!arr2.includes(Math.pow((arr1[i]),2))){
        return true;
    }
    return false;
}

}

// Examples
//  console.log(same([1,2,3],[4,1,9])); true
//  console.log(same([1,2,3],[1,9])); false
 console.log(same([1,2,1],[4,4,1])); 




