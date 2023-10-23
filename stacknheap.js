console.log("Stack and heap Memory location");
//stack memory(primitive data types)
//heap memory(non premitive types)

let myyoutubename="hiteshsir";

let anothername= myyoutubename;

anothername= "chai aur code";

console.log(myyoutubename);
console.log(anothername);

let user= {
    email: "user@gmail.com",
    upi_id: "user@ybl"
}

let user2= user;
user2.email = "hitesh@gmail.com"

console.log(user.email)
console.log(user2.email)