//object literals



//const symbol=symbol("key1")


const Jsuser={
    name:'soham',
    "fullName":"DYPACS",
    age:20,
    location:'chakan',
    islogged:true,  // boolean values dont have inverted commas in value section
    workingDay:['mon','sat']

}

// this are the two method for printing the data from the object
// console.log(Jsuser.age);
// console.log(Jsuser["fullName"]);


// to change the any data in the object

//Jsuser.age=21

//console.log(Jsuser);   // first it was 20 ...now by changing it became 21


// if we want that no one should change the objects then use freeze()

// Object.freeze(Jsuser) 

// let see by changing the data

//Jsuser.name="aneesh"
//console.log(Jsuser);


// to have the function in the objects

Jsuser.coding=function (){
    console.log("learn js");
}

console.log(Jsuser.coding());







