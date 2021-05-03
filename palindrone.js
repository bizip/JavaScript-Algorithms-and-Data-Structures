// a string is said to be palindrone when its reverse is exactly equal to its copy
const palindrone=str=>{
str=str.toLowerCase();
return(str!==str.split('').reverse().join('')? "sorry your input is not palindrone try another one": "Yes it is palindrone");
}