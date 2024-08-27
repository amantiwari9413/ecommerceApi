import {writeFile} from "fs";
import Product from '../models/productSchema.js'

async function getAllproduct(req,res,next){
    try {
        const alldata=await Product.findOne({});
        console.log(alldata);
        res.json({"message":"tera data le"});
    } catch (error) {
        next();
        
    }
}


function getProductbyid(req,res,next){
    const id = req.params;
    console.log(id);
    res.json({"messsage":"susseful"})
}



function deleteProduct(req,res,next){}
function updateProduct(req,res,next){}



async function createProduct(req,res,next){
    try {
        const allProduct=req.body;
        const dbRes=await Product.create(allProduct);
        res.send(dbRes);
    } catch (error) {
        next(error);
    }
}

export {getAllproduct,getProductbyid,deleteProduct,updateProduct,createProduct}