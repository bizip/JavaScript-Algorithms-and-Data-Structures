let strs = ["flower", "flow", "flight"];
var longestCommonPrefix = function (arr) {
    if(strs.length === 0) return "";
    let prefix =arr[0];
    for(let i=1;i<arr.length;i++){
      while(arr[i].indexOf(prefix) !== 0){
        prefix =prefix.substring(0,arr.length -1);
        if(prefix === '') return "";
      }
    }
console.log(prefix);
};
longestCommonPrefix(strs)

