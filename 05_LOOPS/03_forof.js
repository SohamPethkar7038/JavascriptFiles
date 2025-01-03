 // for of loop

 const arr=[1,2,3,4,5]


 for(const num of arr){
    //console.log(num);
 }


 const welcoming="welcome Soham Pethkar"
 for(const greet of welcoming){
//    console.log(greet);
 }


// iteration in maps


const map=new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


//console.log(map) // it will not iterate but print all the map elements


// for iterating in `for of` loop we do :


for(const key of map){
//  console.log(key);  // we get print in the array format     
}


// for getting the map in the key value format


for(const [key,value] of map){
//    console.log(key, ":-",value); // this will give the key value element printing 
    
}


//for converting the map in the array

//console.log(Array.from(map));


// object in javascripts


const myObject={
    name:'soham',
    friend:'aneesh',
    age:20,
    friendAge:20
}


// myObject is an object which is not iterable.....we cannot iterate object using `for of` loop 


for(const key of myObject){
//    console.log(key);   
    
}



// alse we cannot print the key value pair of myObject like map in objects because we cannot iterate by using for of loops


for(const [key,value] of myObject){
//    console.log(key ,":-",value);
}


