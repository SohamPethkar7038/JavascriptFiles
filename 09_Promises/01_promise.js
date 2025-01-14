const promiseOne= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})




const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("async 2 resolved or consumed");
    
})




const promiseThird=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chaiaurcode@gmail.com"})
    },1000)
})

promiseThird.then(function(user){
    console.log(user);
    
})




const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"soham",password:"123"})
        }
        else{
            reject('ERROR :something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log((error));
    
}).finally(()=>console.log("the promise is either resolved or rejected"));
 



const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"javascript",password:"12345"})
        }
        else{
            reject("error :js went wrong");
        }
    },2000)
});


// there is one more way to consume promise by `async` which wait till the work completes ...if it completes then only it moves further otherwise gives there error

async function consumedPromiseFive(){
    const response=await promiseFive
    console.log(response);
    
}

consumedPromiseFive();
