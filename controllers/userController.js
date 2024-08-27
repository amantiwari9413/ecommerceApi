import User from '../models/userSchema.js'

function deleteUser(req,res,next){
    res.json({"mess":"sussfully"})
}


function updateUser(req,res,next){
    res.json({"mess":"sussfully"})
}


async function createUser(req,res,next){
    const Dbres=await User.create(req.body);
    res.send(Dbres);
}


function getUser(req,res,next){
    res.json({"mess":"sussfully"})
}


export {deleteUser,updateUser,createUser,getUser} 