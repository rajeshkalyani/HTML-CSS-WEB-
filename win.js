window.fetch("https://api.github.com/users")
.then((x)=>x.json())
.then((y)=>console.log(y))
.catch((error)=>console.log("error 404 not found")) 