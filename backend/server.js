//importar la variables de entorno
require('dotenv').config()
const express = require('express');
const cors = require('cors')
const connect = require('./src/cofig/db')
const producto = require('./src/routes/productos')
const auth = require('./src/routes/auth')
const path = require('path')
const server = express();

server.use(cors())
server.use(express.json());
server.use(express.static(path.join(__dirname,'public')))
connect();


//endpoint:url a la que se hace referencia
server.get("/", (request, response) => {
    response.send("Backend del proyecto 5 en funcionamiento ")
})

auth(server)
producto(server)


server.listen(process.env.PORT, () => {
    console.log("Servidor a iniciado en el puerto ", process.env.PORT);
})


