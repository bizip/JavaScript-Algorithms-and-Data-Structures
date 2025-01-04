// const same = (arr1, arr2) =>{
//   if (arr1.length !== arr2.length) return;
//   for(let i =0; i <  arr1.length; i ++){
//     if(!arr2.includes((arr1[i]**2))) return console.log(false);
    
//   }
//   console.log(true);
//   return true;
// }

// same([1,2,3], [4,1,9]);

const same = (arr1, arr2) =>{
  if (arr1.length !== arr2.length) return;
   let frequencyCounter1 = {};
   let frequencyCounter2 = {};
   for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
   }
   for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
   }
   for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    };

    if(!(frequencyCounter2[key ** 2] === frequencyCounter1[key])){
      return false;
    }
   }
   return true;
}

same([1,2,3], [4,1,9]);