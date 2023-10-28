//learning objects in javascript
//objects and events are very important in javascript

//singleton: jab objects ko constructor ki tarah declare karte hai to singleton object banta hai

//object literals

//Object.create()

const mysym =Symbol("key1")

const jsuser= {
    name: "rutuja",
    "full name":"rutuja aware",
    [mysym]:"mykey1",//how to use symbols in objects
    age:20,
    location:"pune",
    email:"rutuja@gmail.com",
    isloggedIn:false,
    lastloggeddays:["monday","tuesday"]
}
//important

//how to access objects
// console.log(jsuser.name);
// console.log(jsuser.email);

// console.log(jsuser["email"])
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);

jsuser.email= "ruutjaj@hgmail.com";
//Object.freeze(jsuser)
jsuser.email="menej@gmail.com"
console.log(jsuser);

jsuser.greeting= function()
{
    console.log("hello js user")
}
//console.log(jsuser.greeting)

jsuser.greeting2=function()
{
    console.log(`hello js user here ${this.name}`)
}

console.log(jsuser.greeting())//throws error becuase of freeze
console.log(jsuser.greeting2())
