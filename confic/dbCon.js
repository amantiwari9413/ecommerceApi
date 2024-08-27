import mongoose from "mongoose";
export default async function db(){
    try{
        const res=await mongoose.connect(process.env.DB_URL);
        console.log(`mongoDB is connected on ${res.connection.port}`);
        }
        catch(err){
            console.log(err.message)
            throw err
        }
}