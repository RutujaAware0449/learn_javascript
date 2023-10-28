let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);//object

let mycreateddate= new Date(2023,0,23);
console.log(mycreateddate);
console.log(mycreateddate.toLocaleString());

let mycreate= new Date("2023-01-14");
console.log(mycreate.toLocaleString());


//time stamp is used when we are desinging webs includes puzzels, polls, etc;

let mytimestamp= Date.now();
console.log(mytimestamp);
console.log(mycreateddate.getTime()); //converts date into time


console.log(Date.now()/1000);

console.log(Math.floor(Date.now()/1000));

let newDate= new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth());

newDate.toLocaleString('default',{weekday: "long"})