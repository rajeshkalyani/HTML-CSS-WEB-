let btn= document.querySelector('button')
btn.addEventListener("click",(e)=>{
    console.log(e)
    e.preventDefault()
    let user = document.getElementById("username").value
    let pass =document.getElementById("password").value
    console.log(user,pass)
})