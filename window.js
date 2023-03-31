window.fetch("https://api.github.com/users")
.then((x)=>x.json())
.then((y)=> console.log(y))
.catch((err)=>console.log("error"))