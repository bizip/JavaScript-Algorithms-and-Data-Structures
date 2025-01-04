const anagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    for(let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for(let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for(let val in frequencyCounter1){
        if(!(frequencyCounter1[val] === frequencyCounter2[val])){
            return false;
        }
    }
    console.log(true);
    return true;
}

anagram("cinemp", "iceman")