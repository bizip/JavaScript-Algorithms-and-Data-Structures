//Write a function called same which accept two arrays.
// the function should return true if every value in the first array
//has it corresponding value squared in the second array.
//the frequency of values must be the same.

// const same1=(arr1,arr2)=>{
//     if(arr1.length!==arr2.length){
//         return false;
//     }
//     for(let i=0;i<arr1.length;i++){
//         let correctIndex=arr2.indexOf((arr1[i]**2))
//         if(correctIndex===-1){
//             return false;
//         }else{
//             arr1.splice(correctIndex,1)

//         }
        
//     }
//     return true;
// }
// same1([1,2,3],[1,4,9])

const same = (arr1,arr2)=>{
    if(arr1.length !== arr2.length) return false;
    let fcounter1={};
    let fcounter2={};
    for(let val of arr1){
        fcounter1[val]=((fcounter1[val] || 0) + 1)
    }
    
    for(let val of arr2){
        fcounter2[val]=((fcounter2[val] || 0) + 1)
    }
    for(let key in fcounter1){
      if(!(key ** 2 in fcounter2)){
        return false
      }
    
      if(fcounter2[key**2] !== fcounter1[key]){
        return false;
      }
    }
    return true;
    
    }
    console.log(same([1,2,3,4],[1,4,9,16]))