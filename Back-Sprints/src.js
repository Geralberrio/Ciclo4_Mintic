let operaciones=[];
let balance = 0;

const registrarOperacion = async(monto, tipo, categoria, fecha)=>{
    let response = await fetch("https://misiontic2022upb.vercel.app/api/personal-finance/operations",{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:,
    }):
};

const estaMiMetaCumplida=async()=> {
    let response = await fetch(
        "https://misiontic2022upb.vercel.app/api/personal-finance/is-my-goal-achieved/4000"
    );
    let estaMiMetaCumplida = await response.json();
};

module.exports.estaMiMetaCumplida= estaMiMetaCumplida;
module.exports.registrarOperacion= registrarOperacion;