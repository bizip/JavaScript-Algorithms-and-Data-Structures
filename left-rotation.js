const leftRotation = (d, arr) => {
    let result = arr.splice(d);
  for(let i =0;i<d;i++){
    result.push(arr[i]);
  }
    console.log(result)
}
leftRotation(4, [1, 2, 3, 4, 5,6]);
