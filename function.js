let obj={
    userName : "priya",
    address : function()
    {
        console.log(this);
    }
}
obj.address()