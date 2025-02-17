const countUnique = (arr) => {
    if (arr.length === 0) return 0;
    const arrWithoutDuplicate = [...new Set(arr)];
    console.log(arrWithoutDuplicate.length);
}

countUnique([-2,-1,-1,0,1]);