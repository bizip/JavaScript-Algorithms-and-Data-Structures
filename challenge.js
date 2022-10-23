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