import mongoose from 'mongoose';
const { Schema } = mongoose;


const productSchema= new Schema({
    title:{
        type:String,
        required:true,
        minLength:[5,'title must cantain minimum 5'],
        maxLength:[500],

    },
    price:{
        type:Number,
        require:true,
        min:[5,'price should be gt 5'],
    },
    description:{
        type:String,
        required:true,
        minLength:[5,'title must cantain minimum 5'],
        maxLength:[500],
    },
    category:{
        type:String,
        required:true,
        minLength:[5,'title must cantain minimum 5'],
        maxLength:[50],

    },
    img:[{type:String}],
    rating:{
        rate:{
            type:Number,
            require:true,
            max:[5]
        },
        count:{
            type:Number,
            require:true,

        }

    },

});


export default mongoose.model('product',productSchema);


