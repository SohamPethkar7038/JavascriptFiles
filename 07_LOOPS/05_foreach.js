const languages=['c','cpp','java','ruby','py']

languages.forEach(function (val){
//    console.log(val);
    
})

languages.forEach((item)=>{
 //   console.log(item);
    
})

function printLanguages(item){
    console.log(item);
    
}

//languages.forEach(printLanguages)


languages.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
    
})




const myCodingLanguages = [
    {
        programmingLanguagesName: "javascript",
        languageFileNameExtension: "js"
    },
    {
        programmingLanguagesName: "java",
        languageFileNameExtension: "java"
    },
    {
        programmingLanguagesName: "python",
        languageFileNameExtension: "py"
    },
]

myCodingLanguages.forEach((languages)=>{
   // console.log(languages.languageFileNameExtension);
    
})


myCodingLanguages.forEach((languagesExtension)=>{
    console.log(languagesExtension.programmingLanguagesName);
    
})