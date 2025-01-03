const myObject={
    js:'javascript',
    cpp:'c++',
    py:'python',
    rb:'ruby',
    dj:'django'
}


//for iterating the objects in js we use forIn loop but in the above we only print the keys of the object not the complete key-value pairs
for(const item in myObject){
//    console.log(item);
}


// for printing the key-value pairs in the objects we use the following syntax where in the console we use back tricks and in that use the dollar outside the curly braces that show the current variable in the iterations
for(const item in myObject){
//    console.log(`${item} : ${myObject[item]}`);
    
}


const languages=['cpp','java','py','rb','mysql']


// here in the `for in` loop we didnt get values. from the array called languages...instead we get the indexes of each element. But in the `for of` loop we get the direct values. 
for(const lang in languages){
//    console.log(lang);
}

// for getting the values from the array using  `for in` loop use :

for(const lang in languages){
//    console.log(languages[lang]);
}



// map is not iterable by using the `for in`loop
const map=new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")



for (const key in map){
//    console.log(key);  // not iterable
    
}
for(const [key,value] in map){
//    console.log(key,value); // not iterable
    
}

