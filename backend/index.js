import connectDB from "./db";
import express, { json } from 'express';
require('dotenv').config();
const app = express();
import cors from 'cors';
app.use(cors())
app.use(json())
const port = 5000;
connectDB();
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.listen(port, () => {
    console.log("Server is Listening at Port" + port);
})
