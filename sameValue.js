const same = (arr1, arr2) =>{
  if (arr1.length !== arr2.length) return;
  for(let i =0; i <  arr1.length; i ++){
    if(!arr2.includes((arr1[i]**2))) return console.log(false);
    
  }
  console.log(true);
  return true;
}

same([1,2,3], [4,1,12]);