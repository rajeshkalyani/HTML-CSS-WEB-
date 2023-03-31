let gst=[118,236,354,472]
let fres= gst.reduce((all,val)=>
{
    return all+val ;
},1)
console.log(fres);