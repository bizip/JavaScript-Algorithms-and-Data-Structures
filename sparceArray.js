const sparceArray = (arr, query) => {
    const result = [];
    const count = {};
    for (let el of arr) {
        count[el] ? count[el] += 1 : count[el] = 1;
    }
    for (let i = 0; i < query.length; i++) {
        if (count.hasOwnProperty(query[i])) {
            result.push(count[query[i]]);

        } else {
            result.push(0);
        }
    }
    console.log(result);
}
sparceArray(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']);