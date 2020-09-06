require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

//import Routes

const bannerRoute = require('./routes/bannerController');

app.use('/banner', bannerRoute);

//ROUTES

app.get('/', (req, res) => {  
    res.send('We are on home');
});

//Connect to DB

mongoose.connect(process.env.MONGO_URI, 
{ useNewUrlParser: true }, 
() => { console.log('Connected to DB!')});

//How to we start listening to the server

app.listen(3000);







/* post : Enviar algo
get : Trazer algo
patch : Atualiza algo enviado
delete : Deletar algo */
