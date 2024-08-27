import productRoutes from './routes/productRouters.js'
import userRoutes from './routes/userRouters.js'
import bodyParser from 'body-parser';
import app from './app.js';
app.use("",()=>{
    res.send("api is runing...")
})
app.use(bodyParser.json());
// all routes is define here
app.use("",(res,req,next)=>{
    res.send("Welcome to my API");
})
app.use('/api/product',productRoutes);
app.use('/api/user',userRoutes);


app.use((err,req,res,next)=>{
    let error={...err}; // yaha saprade operator use huaa hia kyuki error var ke and new err dala hai 
    error.message=err.message;
    if(err.name == 'ValidationError'){
        const message = Object.values(err);
        //error = new Error(message);
        console.log(message);
        console.log("i am in the if block");
    }
    


    res.send(error);
})








