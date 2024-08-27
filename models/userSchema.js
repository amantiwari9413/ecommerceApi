import mongoose, { Schema } from "mongoose";

const userSchema = Schema({
  name: { require: true, type: String },
  email: { require: true, type: String },
  password: { require: true, type: String },
  phone: { require: true, type: String,maxLength:[50] },
  address: { city:String,state:String },
  image: { require: true, type: String },
});


export default mongoose.model('user',userSchema);
