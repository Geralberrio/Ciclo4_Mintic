const express = require('express');
const mgdb = require("mongoose");
const db = require("../models/user"); //conexion a BD
const router = express.Router();

router.route("/").get((req,resp,next)=>{
  mgdb.model("User").find({},(err,users)=>{
    if(err) throw err;
    resp.json(users)
  })
});


//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});

//module.exports = router;
