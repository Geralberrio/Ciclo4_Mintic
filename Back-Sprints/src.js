const express = require("express");
const app = express();

//hay un array que se llama operations que contiene las operaciones de la base de datos

app.use(express.urlencoded({extended: false})); //por qué en el sprint dice false, no debería ser True?
app.use(express.json());

app.post('/api/personal-finance/operations',(req,res)=>{
    //código para insertar operaciones 
    //se debe insertar la operación que esta en el req.body y 
    //hacer push del objeto al array operations, debe retornar el array de operations como json
    let monto = req.body.monto;
    let tipo = req.body.tipo;
    let categoria = req.body.categoria;
    let fecha = req.body.fecha;

    let operacion = {monto,tipo,categoria,fecha};
    operations.push(operacion);

    res.json(operations);

});

app.get('/api/personal-finance/is-my-goal-achieved/:amount',(req,res)=>{
   //código para la meta de ahorro
   
   amount = req.params['amount'];
   amount = parseInt(amount);
   
   //es necesario definir la variable balance?
   if(amount > balance){
        var result = "no cumple";
    }
    else{
        var result = "cumple";
    } 

    res.json(result) //si esta bien definida la variable Result para que pueda ser arrojada en formato JSON
   
});

module.exports = app;