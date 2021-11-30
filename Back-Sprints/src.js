const express = require("express");
const app = express();

//hay un array que se llama operations que contiene las operaciones de la base de datos

app.use(express.urlencoded({extend: false}));
app.use(express.json());

app.post(/api/personal-finance/operations,(req,res)=>{
    //código para insertar operaciones se debe insertar la operación que esta en el req.body y hacer push del objeto al array operations, debe retornar el array de operations como json
});

app.get(/api/personal-finance/is-my-goal-achieved/:amount,(req,res)=>{
   //código para la meta de ahorro
   amount = req.params
   amount = parseInt(amount);
   
});

module.exports = app;