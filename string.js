const name = "rutuja"
const repocnt= 50;
console.log(name+ repocnt+ "value");

console.log(`hello my name is ${name} and my repocount is ${repocnt} is `)

const gamename =new String('rutujaware')

console.log(gamename[0])
console.log(gamename.__proto__)

console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf('t'))

const newstring= gamename.substring(0,4);
console.log(newstring)

const anotherstring= gamename.slice(-8,4);
console.log(anotherstring);

const newstringone = "  hitesh   "
console.log(newstringone);
console.log(newstringone.trim());

const url= "https://rutja.com/rutuja%20aware"
console.log(url.replace('%20','-'))

console.log(url.includes('rutu'))

console.log(gamename.split("-"))