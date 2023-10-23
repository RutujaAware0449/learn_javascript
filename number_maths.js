const score= 400;
console.log(score);
const balance= new Number(100)
console.log(balance);

console.log(balance.toString())

console.log(balance.toFixed(2));//use in ecomerse websites

const othernumber= 23.8567;
console.log(othernumber.toPrecision(3))


//point to be remeber

const num=1123.85784;
console.log(num.toPrecision(3));
//gives exponential value

const hundred= 1000000;
console.log(hundred.toLocaleString())
console.log(hundred.toLocaleString('en-IN'))

console.log(Math)
console.log(Math.abs(4))
console.log(Math.round(4.6))
console.log(Math.max(4,5,7,8));

//sabse jyada math library kaha pe use karenege

console.log(Math.random());

//jaise ham koi game bana rahe hai to hame pata hai 1 to 6 me hi value aayange 

console.log((Math.random()*10)+1);


//isi range me lane ke liye
const min=10;
const max=20;

console.log(Math.random()*(max -min +1))
console.log(Math.floor(Math.random()*(max -min +1)))
console.log(Math.floor(Math.random()*(max -min +1))+min)
