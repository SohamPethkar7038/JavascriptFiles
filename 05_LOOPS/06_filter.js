

const languages=['c','cpp','java','ruby','py']


// when we assign the forEach loop to the variable `name` then in return we get undefined in the output but we given the console.log for the item then the items are going to print but undefined will be no values are return to name

// let name=languages.forEach((item)=>{
//     console.log(item)
// })

//console.log(name);    // output    
// c
// cpp
// java
// ruby
// py
// undefined



// when we write `return ` in the forEach loop then also we get undefined in the output again


// const names=languages.forEach((item)=>{
//     return item
// })

// console.log(names);   // output : undefined

// so we see that we cannot use forEach for returning the values

// then we can used `filter` for returning the values


// same like forEach `filter` also take the callback in the syntax 


//let number=[1,2,3,4,5,6,7,8]

// let mynum=number.filter((item)=>{
//     return item
// })

//console.log(mynum);   

// here the filter return the values from the number


// filter also check the conditions given and whatever is going to be return is based on the condition




 let number1=[1,2,3,4,5,6]

// const mynumber=number1.filter((num)=>{
//     return num<4 && num>1
// })

// console.log(mynumber);



// filter works on true and false conditon means if the condition is satisfied then only return in the output ....it does not take any operation as condtion as shown below :

// const mynum1=number1.filter((num)=> num+1);
// console.log(mynum1);   // here what is filer dont satisfied the operations it takes only condition based on true or false



const movies = [
    { title: 'Movie One', genre: 'Action', release: 1995, remaster: 2015 },
    { title: 'Movie Two', genre: 'Drama', release: 2001, remaster: 2015 },
    { title: 'Movie Three', genre: 'Comedy', release: 1998, remaster: 2005 },
    { title: 'Movie Four', genre: 'Thriller', release: 2003, remaster: 2017 },
    { title: 'Movie Five', genre: 'Sci-Fi', release: 2012, remaster: 2020 },
    { title: 'Movie Six', genre: 'Horror', release: 1990, remaster: 2008 },
    { title: 'Movie Seven', genre: 'Romance', release: 1988, remaster: 2000 },
    { title: 'Movie Eight', genre: 'Animation', release: 2014, remaster: 2021 },
    { title: 'Movie Nine', genre: 'Documentary', release: 2007, remaster: 2013 },
    { title: 'Movie One', genre: 'Action', release: 1995, remaster: 2010 },  
    { title: 'Movie Five', genre: 'Sci-Fi', release: 2012, remaster: 2020 }, 
    { title: 'Movie Two', genre: 'Drama', release: 2001, remaster: 2015 },  
];



// some filtering on the array

// let usermovies=movies.filter((mov)=>mov.genre==='Sci-Fi');

// usermovies=movies.filter((mov)=>{
//     return mov.title==='Movie One' && mov.remaster>2010
// })


// console.log(usermovies)