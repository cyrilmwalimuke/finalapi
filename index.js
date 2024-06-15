const express = require('express')
const app = express();
app.get( '/',(request,response)=>{
    response.json({
        sucess:false,
        number:10
    })
})

app.listen(3000,()=>{
    console.log("App itrs running oo port 5000")
});