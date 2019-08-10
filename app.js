const express = require('express')
const app = require('express')()
const path = require('path')
const http = require('http').createServer(app)

//Rotas
    //Public
        app.use(express.static(path.join(__dirname,"public")))

    app.get('/', (req, res) =>{
        res.sendFile(__dirname+'/index.html')
    })

http.listen(process.env.PORT || 3002, function(){
    console.log(`Servidor Rodando`)
})