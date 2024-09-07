const express=require('express')
const app=express();
const userRouter=require('./routes/signin')
const cors=require('cors')
app.use(cors());
app.use(express.json());
app.use('/user',userRouter);

app.listen(3000,()=>{
    console.log("App is running on port 3000");
})