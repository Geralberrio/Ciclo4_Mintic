const msg= require("mongoose");
msg.connect("mongodb://192.168.218.135:27017//ciclo4",(err,db)=>{
    if(err) throw err;
    console.log("success!! Database conected!")
});

module.exports=msg;