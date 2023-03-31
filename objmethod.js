let obj = {
    colour1 : "red",
    colour2 : "green",
    colour3 : "yellow"

}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.seal(obj));
console.log(Object.freeze(obj));
console.log(Object.isSealed(obj));
console.log(Object.isFrozen(obj));
console.log(obj);
console.log(Math.sqrt(9));
console.log(Math.cbrt(8));
console.log(Math.floor(19.2));
console.log(Math.ceil(20.2));
console.log(Math.ceil(Math.random()*1000000).toString(16))