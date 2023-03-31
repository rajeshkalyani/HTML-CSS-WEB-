let km =document.getElementById('valu1');
let btn = document.getElementById('value4');
let price = document.getElementById('val1');
btn.addEventListner('click',()=>{
    price.innerHTML =km.value*10

})