let operaciones=[];
let balance = 0;

const registrarOperacion = (monto, tipo, categoria, fecha)=>{
    
    /*Añadir objetos al arreglo*/
    operaciones.push({"monto":monto, "tipo":tipo, "categoria":categoria, "fecha":fecha});  
    tipo==='ingreso'? balance+=monto:balance-=monto;
   
   /* el condicional*/
    /*
    if ( tipo=== 'ingreso'){
        balance+=monto;  
    } else
        {balance-=monto;}
    
    /*Guardar en loscalstorage*/
    localStorage.setItem("operaciones", JSON.stringify(operaciones));
    localStorage.setItem("balance",JSON.stringify(balance));
};

let metaAhorro =0;
const registrarMetaAhorro=(meta)=>{
    localStorage.setItem("metaAhorro", meta);
};

const estaMiMetaCumplida=()=> {
    metaAhorro = parseFloat(localStorage.getItem("metaAhorro"));
    balance = parseFloat(localStorage.getItem("balance"));
    
    if (metaAhorro<balance){
        return "cumple";
    }
    else 
    {
        return "no cumple";}
};

module.exports.estaMiMetaCumplida= estaMiMetaCumplida;
module.exports.registrarMetaAhorro= registrarMetaAhorro;
module.exports.registrarOperacion= registrarOperacion;