let input=document.querySelector("input");

input.addEventListener("keypress",()=>{
    let color=Math.floor(Math.random()*10000000).toString(16)
    document.body.style.backgroundColor=`#${color}`
})