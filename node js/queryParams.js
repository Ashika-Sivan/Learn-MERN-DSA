// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     console.log('query params');
//     next()
    
// })
// app.get('/',(req,res)=>{
//     res.send('welcome to the page of find sum')
// })
// app.get('/sum',(req,res)=>{
//     const num1=parseInt(req.query.num1)
//     const num2=parseInt(req.query.num2)

//     const sum=num1+num2
//     res.send(`sum is :${sum}`)
// })
// app.listen(3000,()=>{
//     console.log(`server running on port http://localhost:${3000}`);
    
// })

const express=require('express')
const app=express()

app.use((req,res,next)=>{
    console.log('creting application middleware')
    next()
})
app.get('/',(req,res)=>{
    res.status(200).send(`current time:${new Date()}`)
})
app.listen(3000,()=>{
    console.log(`http://localhost:${3000}`)
})