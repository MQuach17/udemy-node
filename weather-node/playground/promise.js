var asyncAdd = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a==='number' && typeof b==='number'){
                resolve(a+b);
            }
            else{
                reject('Args must be numbers');
            }
        },1500);
    });
}

asyncAdd(1,'2').then((result)=>{
    console.log(`sum: ${result}`);
    return asyncAdd(result,2);
}).then((res)=>{
    console.log(`sum: ${res}`);
}).catch((e)=>{
         console.log(e);
});
//var somePromise = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
////        resolve('Hey it worked!');
//        reject(':(');
//        
//    },2500)
//});
//
//somePromise.then((message)=>{
//    console.log(`Success: ${message}`);
//},(error)=>{
//    console.log(`Error: ${error}`);
//});