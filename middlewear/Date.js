const Datee=(req,res,next)=>{
   let date=new Date()
    let d=date.getDay()
    let h=date.getHours()
    if(!(d>=3 && d<=5 && h>=9 && h<=18)){
        res.send("hors service !")
    }
next()
}
module.exports=Datee