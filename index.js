const express = require('express')
const app = express();


app.listen(3000,()=>{
    console.log("App ceduueu itrs running oo port 5000")
});
app.get('/',(req,res)=>{
    res.send('hello there world')
})

