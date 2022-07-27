import express from "express";
import 'dotenv/config';
import cors from 'cors';
import {connect} from './utils/dbConnection.js';

import apiRouter from './routes/index.js';

const app = express();
app.use(cors());
app.use(express.json());

connect();

app.use('/api/v1', apiRouter);

app.get('/', (req , res)=>{
    res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{
    console.log(`Server Starts At PORT : ${PORT}`);
});

export default app;