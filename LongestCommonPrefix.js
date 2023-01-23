let strs = ["flower", "flow", "flight"];

// 1. initialize the firest element in array as common prefix
// 2. loop throught the array
// 3. while all array's element are part of prefix and assign it to prefix
// 4. if prefix = "" return ""
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
      let prefix = strs[0];
      for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
          prefix = prefix.substring(0, prefix.length - 1);
          if (prefix === "") return "";
        }
      }
      return prefix;
    };
longestCommonPrefix(strs)

