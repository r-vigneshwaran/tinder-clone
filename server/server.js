import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";
import dotenv from "dotenv"

// environmental variables configuration
dotenv.config();

//app config
const app = express();
const PORT = process.env.PORT || 8001;
const conenction_url = process.env.CONNECTION_URL;

// middlewares
app.use(express.json());
app.use(cors())

//db config
mongoose.connect(conenction_url,  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})

//api endpoints
app.get('/', (req, res) => {
    res.status(200).send('hello world!!!')
});
// post method
app.post('/tinder/cards',(req, res)=> {
    const dbCard = req.body;
    
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});
// get method
app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});

//listeners
app.listen(PORT, () => {
    console.log(`server is up and running on PORT ${PORT}`)
})