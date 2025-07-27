import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connetDB from './configs/db.js';

// Initialize Express App

const app = express();
//Connect Database 
await connetDB()

// Middleware

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=> res.send("Server is running"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))