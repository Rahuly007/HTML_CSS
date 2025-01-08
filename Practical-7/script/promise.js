const myPromise = new Promise( (resolve,reject)=>{
    resolve("good bye")
    reject("sorryy")
    // new Error("sorry")
})

myPromise.then(
    (a)=>{
        // console.log(a)

    })
    
    .catch((c)=>{console.log(c)})