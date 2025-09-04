// const express=require('express')
// const app=express()

// app.get('/sum/:num1/:num2',(req,res)=>{
//     const num1=parseInt(req.params.num1)
//     const num2=parseInt(req.params.num2)

//     const sum=num1+num2
//     res.send(`sum is:${sum}`)
// })
// app.listen(3000,()=>{
//     console.log(`http://localhost:${3000}`)
// })


const express=require('express')
const app=express()
app.use((req,res,next)=>{
    console.log('application middleware')
    next()
})
app.get('/',(req,res)=>{
    res.send(`current date is :${new Date()}`)
})
app.listen(3000,()=>{
    console.log(`http://localhost:${3000}`)
})