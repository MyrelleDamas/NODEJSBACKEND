/*Aqui você adiciona o agente na aplicação e configura o nome do ServiceName*/
const {default: agent} = require('skywalking-backend-js');
agent.start({
        serviceName: 'GMMI::TESTE-NODE-BACKEND-MANUAL',
        collectorAddress: '10.0.28.209:11800',
});

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('<h1>Testando Node, diga olá!</h1>')
})

app.listen(8089, function () {
  console.log('Listening on port 8089...')
})
