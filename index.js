const express = require('express')
const app = express();
app.get('/',(req,res)=>{
    res.json({
        sucess:false
    })
})
app.listen(3000,()=>{
    console.log("App is running oo port 5000")
});