// Write a JavaScript function that that input string and returns count of each character in the string
const countChar=(str)=>{
  const obj={};
  for(let i=0;i<str.length;i++){
    var char=str[i].toLowerCase();
if(/[a-z0-9]/.test(char)){
    obj[char]=++obj[char] || 1
  }
  }
  return obj;
}