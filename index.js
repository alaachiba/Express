const express=require("express")
const Datee=require("./middlewear/Date")


const app=express()
app.use(express.json())
app.use(Datee)
app.get("/home",(req,res)=>{
    res.send("hello world")
})



app.get("/aboutt",(req,res)=>{

    res.sendFile(__dirname+"/public/about.html")
})
console.log(__dirname,'testttt')
app.use("/users",require("./routes/users"))

const port=5000

app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port} `)
})