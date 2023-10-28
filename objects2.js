
//const myappuser= new Object() singleton object hai

const myappuser={}

myappuser.id="ABC0123";
myappuser.name="sam";
myappuser.isloggedin=false

//console.log(myappuser)

const regularuser={
    email: "saome@gmail.com",
    fullname:{
        userfullname:
        {
            first: "rutuja",
            last:"Aware" 
        }
    }
}
console.log(regularuser.fullname)
console.log(regularuser.fullname.userfullname.last)

//combine the objects

const obj1={1: "A",2:"B"};
const obj2={1:"C",2:"D"};

//const obj3={obj1,obj2} 

//const obj3= Object.assign({},obj1,obj2)
const obj4={...obj1,...obj2}
console.log(obj4)

console.log(Object.keys(myappuser));
console.log(Object.values(myappuser));
console.log(Object.entries(myappuser));

