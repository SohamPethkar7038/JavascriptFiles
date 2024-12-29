// simple function

// function in javascript is first-class citizens ...meaning they can be assigned to vairable,passed as a arguments to functions and returned from functions

function addTwoNUmber(num1,num2){
    console.log(num1+num2);
}

// addTwoNUmber(2,4);  // calling the function for the output


// giving the value in the parameter instead in arguments

function addNumber(num1=10,num2=20){
    console.log(num1+num2);
}

//console.log(addNumber());


// when we do console in the function ...we not get any output when we call it... but when we use 
// return keyword for returning the output...just keep function in the variable and console the variable

// for eg

function add(x,y){
    return x+y;
}

let result=add(2,4);
//console.log(result);


// using objects in the function

const user={
    username:"soham",
    price:100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user);  // calling the object function

// calling the function of object in other way

// handleObject({
//     username:"sam",
//     price:1000
// });


// using array in the function

const newArray=[100,200,300,400];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(newArray));   // callig function

// calling the function by passing the complete array in the argument
console.log(returnSecondValue([100,300,400,500]));
