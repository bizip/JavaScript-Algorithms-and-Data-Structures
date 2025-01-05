const countUniqueValue = (arr) =>{
    let counterValue = 0;
    const counter = {};
    for(let val of arr){
        counter[val] = (counter[val] || 0) + 1
    }
    for(let val in counter){
        counterValue += (counter[val]);
    }
console.log(counterValue);
return counterValue;
}
countUniqueValue([1,1,1,1,1,2]);