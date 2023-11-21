
import mongoose from "mongoose";
export function DBconnecton(){

    mongoose.connect("mongodb://127.0.0.1:27017/task").then(()=>{
        console.log("DB is connectetd")
    }).catch((err)=>{
    console.log(`failed DB ___ ${err}`)
    })
    
    }