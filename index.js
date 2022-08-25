import express, { response, request } from 'express';
import cors  from  'cors';

const  server =   express();

server.use(cors())

const teste = [{nome: 'teste'}]

server.get('/teste', (request, response) => {response.send(teste)})

server.listen(5000)