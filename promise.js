let promise=new Promise((resolve, reject) => {
    let isRoomcleaned=false;
    if(isRoomcleaned)
{
resolve(document.body.style.backgroundColor="green")
}
else
{
    reject(document.body.style.backgroundColor="red")
}
})
promise.then(()=>{console.log("yes cleaned")})
.catch(()=>{console.log("room not cleaned");})
