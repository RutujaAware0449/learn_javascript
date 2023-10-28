//Array is javascript

const myarray=[0,2,4,6]
const myheros=['rutu','aware']
const array= new Array(1,2,3,4);

console.log(myarray[0])
//array = shalow copy and deap copy
//shalow copy : original array me bhi change hoga
//deap copy: original array me change nahi hoga


//array methods

myarray.push(6);
myarray.push(78);

console.log(myarray);
myarray.pop()
console.log(myarray);

myarray.unshift(7); //start me add karta hai...
myarray.shift();
console.log(myarray);

console.log(myarray.includes(9));
console.log(myarray.indexOf(3));

const newarr= myarray.join(); //join array ko bind kt=rta hai string ke form me store karta hai...

console.log(myarray);
console.log(newarr);


//slice , splice

console.log("A ",myarray);

const m1=myarray.slice(1,3);

console.log(m1);

console.log("B ",myarray);

const m2=myarray.splice(1,3);
console.log(m2)

console.log("B ",myarray);

//NOTE: slice jo portion mention kiya hai usko return karta hai 
//aur splice us portion return to karta hai par usko array se nikal deta hai.....