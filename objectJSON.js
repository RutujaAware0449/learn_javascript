//destructuring of objects...

const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor: "hiteshsir"
}
//course.courseInstructor
const {courseInstructor}=course

console.log(courseInstructor)

//or we can do this also

const {courseInstructor:insructor}=course
console.log(insructor)

//used in react
// const navbar= ({company}) =>{

// }
// navbar(company="hitesh")


//javascript API
//jab bhi apko aap ka kam dusre ke sir pe dalna hota hai to API kam aate hai...

//JSON

// {
//     name: "rutuja",
//     coursename:"javascript",
//     price: "free"
// }

// [
//     {},
//     {},
//     {}
// ]