// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     console.log(`${req.method} and ${req.url}`)
//     next()
// })
// app.get('/',(req,res)=>{
//     res.send(`todays date is ${new Date()}`)

// })
// app.listen(3000,()=>{
//     console.log(`server is running on http://localhost:3000`)
// })

//HTTP SERVER
// const http=require('http')
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/plain'})
//     res.end(`hello ashika: ${req.method}`)
// })
// server.listen(3000,()=>{
//     console.log(`server running on http://localhost:3000`)
// })

//ROUTER LEVEL MIDDLEWARE

// const express=require('express')
// const app=express()
// const router=express.Router()

// router.use((req,res,next)=>{
//     console.log("Router-level middleware called at:", new Date().toISOString());
//     next()
    
// })

// router.get('/',(req,res)=>{
//     res.send('this is home page')
// })

// router.get('/about',(req,res)=>{
//     res.send('abut page')
// })
// app.use('/api',router)

// app.listen(3000,()=>{
//     console.log(`server is running on port http://localhost:${3000}`);
    
// })


// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     const err=new Error('something went wrong')
//     next(err)

// })
// app.use((err,req,res,next)=>{
//     console.log(err.message)
//     res.status(500).send(`internal server error :${err.message}`)
// })
// app.listen(3000,()=>{
//     console.log(`http://localhost:${3000}`);
    
// })




// const express=require('express')
// const session=require('express-session')
// const app=express()

// app.use(express.json())

// app.use(session({
//     secret:'my-secret-key',
//     resave:false,
//     saveUninitialized:false,
//     cookie:{secure:false}
// }))

// app.use((req,res,next)=>{
//     let err=new Error('something went wrong')
//     next(err)
// })
// app.use((err,req,res,next)=>{
//     res.status(500).send(`${err.message}`)
// })