//primitive and nonpremitive

//primitive - call by value(copy)
//string,number,boolean,null,undefined,symbol, Bigint;

//Non-primitive- call by reference(no copy)
// Array,objects,Functions


//javascript is dynamic or not?

const id= Symbol('123');
const unique_id= Symbol('123');
console.log(id== unique_id);
