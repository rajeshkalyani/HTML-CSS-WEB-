let obj={
    empName:"RAJ",
        empID:1234,
        empphone:944083
}
let res=JSON.stringify(obj)
console.log(res)
let finaldata=JSON.parse(res)
console.log(finaldata);