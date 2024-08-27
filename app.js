import 'dotenv/config'
import express from 'express'
import db from './confic/dbCon.js';
const app=express();

db()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is connected on ${process.env.PORT}`)
    })
})
.catch(()=>{
    console.log("db not connected")
})

export default app;

