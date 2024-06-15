import express from 'express';
const app = express();
app.get('/',()=>{
    res.send('heelo world')
})
app.listen(3000,()=>{
    console.log("App is running oo port 5000")
});