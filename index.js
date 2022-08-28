import express, { response, request } from 'express';
import cors  from  'cors';

const  server = express();
server.use(express.json());

server.use(cors())

const tweets = []

server.post("/tweets", (request, response) => {

const tweet = request.body

tweets.push(tweet)

response.send('sucesso')

})

server.get("/tweets", (request, response) => response.send(tweets))

server.listen(5000, () => console.log("Escutando na porta 5000")) 
