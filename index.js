import express, { response, request } from 'express';
import cors  from  'cors';

const  server = express();
server.use(express.json());

server.use(cors())

const usuarios = []
const tweets = []



server.post("/sign-up", (request,response) =>{

        const usuario = request.body
        usuarios.push(usuario)
        response.send('Ok')

})

server.post("/tweets", (request, response) => {

       const tweet = request.body  
       const usuario = usuarios.filter(user => user.username == tweet.username);
       tweet.avatar = usuario[0].avatar;
       tweets.push(tweet)
       response.send(tweets)

    })
    

server.get("/tweets", (request, response) => {
      
      const newTweests = tweets.slice(-10).reverse()

      response.send(newTweests.reverse());
      

})

server.listen(5000, () => console.log("Escutando na porta 5000")) 
