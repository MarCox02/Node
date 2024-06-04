const { request , response } = require("express");
const { games } = require("../objetos");

const getGames = ( req , res )=> {    
    return res.json({
        ok:true,
        statusCode:200,
        games
    });
}
const getGameById = ( req = request , res = response )=> {    
    
    let id = req.params.id;

    let gameABuscar = "";

    gameABuscar = games.find(( game )=> {
        return game.id === id;
    });

    if(gameABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            gameABuscar
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
    getGames,
    getGameById
}