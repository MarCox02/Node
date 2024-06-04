const { request , response } = require("express");
const { consoles } = require("../objetos");

const getConsoles = ( req , res )=> {    
    return res.json({
        ok:true,
        statusCode:200,
        consoles
    });
}
const getConsoleById = ( req = request , res = response )=> {    
    
    let id = req.params.id;

    let consoleABuscar = "";

    consoleABuscar = consoles.find(( console )=> {
        return console.id === id;
    });

    if(consoleABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            consoleABuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay juegos con ese id"
        });
    }

}

module.exports = {
    getConsoles,
    getConsoleById
}