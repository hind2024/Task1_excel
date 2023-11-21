
import { productModel } from "../../DBconnection/models/product.model.js";
// import { catchError } from "../../utilts/catchError.js";
import XLSX from "xlsx";
import { AppError } from "../../utilts/AppError.js";
import { catchError } from "../../utilts/catchError.js";

export const addProduct = catchError( async(req,res,next)=>{
 
const workbook= XLSX.readFile(req.file.path);

console.log(req.file.path)

// _________ to get sheet data_________
let worksheet= workbook.Sheets['Sheet1']

//  console.log(worksheet)


// _________ to make data (json)__________
let data = XLSX.utils.sheet_to_json(worksheet)

// XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1',true);
console.log(data) 
if(!data) return new AppError('not found',409)

// // // _________ to insert data in DB__________
  await productModel.insertMany(data) 



return res.status(200).json({message:"Done Insert "})

})


export const getProducts = catchError( async(req,res,next)=>{
 const {id} =req.params 
 
if(!req.params) return new AppError("Invalid id")
    let product= await productModel.findById(id)
    
    return res.status(200).json({message:"Done Insert ",product})
    })