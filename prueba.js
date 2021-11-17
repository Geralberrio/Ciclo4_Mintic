const express = require("express");

const app = express();

const userRoutes = require("./routes/index")

app.use("/users", userRoutes) //endpoint para acceder a todas las rutas.
app.use("/",(req,resp)=>{
    resp.json({
        "getting":"Hola"
    });
});

const server = app.listen(3000,()=>{
    let host= server.address().address;
    let port= server.address().port;
    console.log("Desarrollo de Software web listening at http://",host,port )
});