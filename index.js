const express = require('express')
const app = express();


app.listen(5000,()=>{
    console.log("App itrs running oo port 5000")
});
app.get('/',(req,res)=>{
    res.json({message:"success is coming"})
})