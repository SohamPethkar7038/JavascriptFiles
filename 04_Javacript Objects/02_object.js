// object singleton

const appUser=new Object()   // this is a singleton object

//console.log(appUser);   // as nothing declare we get the empty object --> {}


 appUser.id="1234"
 appUser.name="soham"
 appUser.age=20

//console.log(appUser);

//console.log(Object.keys(appUser));  // gives the keys presents in the object and the values return will be in the array form

//console.log(Object.values(appUser)); //gives the values presents in the object and the values return will be in the array form

//console.log(Object.entries(appUser)); // gives output in the form array in the array and return a separate array for the each key-values pairs


// to check if the key is presemt in the object then used ->  `hasownProperty()`
// gives the output in true-false

console.log(appUser.hasOwnProperty('name'));





// how tpo print the nesting object values...first of all see the nested object

const user={
    email:"soham@gmail.com",
    myFullName:{
        username:{
            firstName:"Soham",
            lastName:"Pethkar",
        }
    }
}




//  `.` is used to access the values in the object 

//console.log(user.email);  // give email id
//console.log(user.myFullName.username.firstName);    // give only Soham


const users=[
    {
        id:1,
        name:"Soham"
    },
    {
        id:2,
        name:"janu"
    },
    {
        id:3,
        name:"Sappu"
    },
    {
        id:4,
        name:"Dhola"
    },
]
 
