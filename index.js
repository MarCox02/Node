const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 3331;

const { getGames, getGameById } = require("./controllers/games.controllers")
const { getConsoles, getConsoleById } = require("./controllers/consoles.controllers")

app.use(cors());

app.listen( puerto , ()=> {
    
    console.log(`Servidor arriba ok en el puerto ${puerto}`);
});