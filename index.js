import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors())



app.listen(3000,()=>{
    console.log("App is running on port 5000")
});
app.get('/',(req,res)=>{
    res.json({
        success:true,
        header:true,
        head:true

    })
})

