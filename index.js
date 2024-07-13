// console.log("hello 1");
// setTimeout(function(){
//     console.log("hello");},1000);
// console.log("hello 1");

// function greet(name,callback){
//     console.log("hello " + name);
//     callback();
// }

// function goodbye(){
//     console.log("Good Bye !");
// }

// greet("Tanmay", goodbye);

// var arr = [1,2,3,4,5];
// arr.forEach(function(){
//     //defination
// })

  
// promise

var mypromise = new Promise((resolve,reject)=>{
    let condition = true;
    if(condition){
        resolve("Promise Fulfilled");
    }
    else{
        reject("Promise not Fulfilled");
    }
});

mypromise.then((message)=>{
    console.log(message);
})
mypromise.catch((error)=>{
    console.log(message);
})


// new Promise(function(){
//     let condition = True;
//     if(condition){
//         resolve("Promise Fulfilled");
//     }
//     else{
//         reject("Promise not Fulfilled");
//     }
// })

