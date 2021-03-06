import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import postRoutes from './routes/posts.js';
const app = express();



app.use(bodyParser.json({limit:"30mb", extented:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extented:true}));
app.use(cors());

app.use('/posts', postRoutes);
const CONNECTION_URL='mongodb+srv://Shankee:Shankee123@cluster0.nongz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

// Connect the mongadb
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>app.listen(PORT, ()=> console.log(`Server is running on port : ${PORT}`)))
    .catch((error)=> console.log(error.message));

   //mongoose.set('useFindAndModify', false);