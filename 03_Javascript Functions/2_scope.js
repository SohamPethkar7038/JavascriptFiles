// var variable should not be use because it gives problem in the scopes

// eg

let a=10;
const b=20;
var c=30;

if(true){
    let a=1;
    const b=2;
    var c=3;
    // console.log("inner  a :",a);
    // console.log("inner c",c);
}

// console.log("outer a :",a);
// console.log("outer c :",c);

// here about the datatypes let and const the inner console and outer console works properly
//  but about var ....the console.log is confuse and it is beyond the scope

// The {}...is nothing but scope
// The things written in ' {} ` are the block scope and thing written in out of the curly braces is the global scope



// learning the scope in the function

function one(){
    const username="soham"
    
    function two(){
       console.log(username);
        const website="youtube"   

    }
   // console.log(website);
  //it will not give any output because the website is in the block scope 

   two();
 

  // it will return the username="soham" beacuse two() is the child scope

}

one();  

// it will not give any output beacuse one() is the parent scope and it cannot take value from   the child scope i.e. two()


// ++++++++++++INTERESTING ++++++++++++++++//   


//console.log(addone(5));
// calling is done on upside of the function addone ....it is possible here

function addone(num){
    return num+1;
}


// giving the function to the variable

//console.log(addtwo(20));   // calling the function upside when it is declare in the variable is not possible

const addtwo=function(num){
    return num+2;
}
//console.log(addtwo(10));

//console.log("1,2,3,4,5,6,7,8,9,10");

  








