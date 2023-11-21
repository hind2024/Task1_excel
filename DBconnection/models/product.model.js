
import { Schema, model } from "mongoose";

const prouductScema = new Schema({
    Name: {
      type:  String,
     
    
    },
    Description :String ,

    Location : {
        type: String

    },
    Price: Number ,

    Color: {
        type: String

    },
    ID: {
        type: Number
    }

}, { timestamps: true })

export const productModel = model('product', prouductScema)