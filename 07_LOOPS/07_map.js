// The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results. 

// A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:

// element
// The current element being processed in the array.

// index
// The index of the current element being processed in the array.

// array
// The array map() was called upon.

// thisArg Optional
// A value to use as this when executing callbackFn

// Return value
// A new array with each element being the result of the callback function





//const newnum=mynumber.map((num)=>num+1 )

//console.log(newnum);


//like filter map does work on true or false .....it can handle the operation and return the values


// map can also have chaining process


const mynumber=[1,2,3,4,5,6,7,8,9,10]


const chaining=mynumber.map((num)=>num*10)
                            .map((num)=>num+10)
                            .filter((num)=>{return num>=90})
  

console.log(chaining)