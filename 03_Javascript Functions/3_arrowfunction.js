// this keyword --> to show the current

// in only objects

const user={
    username:"soham",
    price:100,

    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);
        //console.log(this);
    }
}

//user.welcomeMessage();      // calling the function welcomeMessage
user.username="sam";         // changing the username in the user
//user.welcomeMessage();    // the username changed when it call again


//console.log(this)  // The `this` keyword gives empty parenthesis but consoling in the  browser it gives window as output



                // simple function



// function chai(){
//     console.log(this);
// }

// chai();  // in simple function ` chai `  ...this keyword is run giving many inbuild features of the    
            // function 
        


// function chaiOne(){
//     let username="soham";
//     console.log(this.username);
// }

//chai(); // gives the undefined output beacuse this keyword does not work for the function


                   // giving function in the variable //
    
// const chai=function(){
//     let username="ram";
//     console.log(this.username);
    
// }  

// chai();      // gives the output undefined same beacuse this keyword does not work for the function




//  **************Arrow function ************** //

const addTwo=(num1,num2)=>{
    return num1+num2;
}

//console.log(addTwo(2,3));      // calling the arrow function


// the arrow funtion needs no return keyword and paranthesis are optional

const addThree=(x,y,z)=> x+y+z

//console.log(addThree(1,2,3))

const addFour=(p,q,r,s)=>(p+q+r+s)

//console.log(addFour(1,2,3,4))

const multiply=(x,y,z)=>(x*y*z)
//console.log(multiply(2,3,4));


// two major difference when to write return keyword in arrow function 

// 1.  when we give curly braces return keyword is mandatory

const add=(x,y)=>{
    return x+y;
}

//console.log(add(2,3));

// 2. when we give paranthesis() no need of writing return keyword

const add1=(p,q)=>(p+q)
//console.log(add1(10,20));


//  returning and object through arrow function

const sumDifferenceMultplication=(x,y)=>({
    sum: x+y,difference:x-y,multplication:x*y});

//console.log(sumDifferenceMultiplication(10,5));