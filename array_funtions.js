const marvel_heros=["thor","Ironman","Spiderman"];
const dc=["Superman","flash","batman"];
// marvel_heros.push(dc);
// console.log(marvel_heros);

const all=marvel_heros.concat(dc);
console.log(all);

//another way to cancate two array

const all_heros=[...marvel_heros,...dc];
console.log(all_heros);

const anotherarray=[1,2,3,[5,4,3],7,[8,9]];

const real_another=anotherarray.flat(Infinity)

console.log(anotherarray);
console.log(real_another);

console.log(Array.isArray("rutuja"))
console.log(Array.from("rutuja"))

console.log(Array.from({name: "rutuja"}));//interseting for interview 

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));