


import express from "express"
import dotenv from"dotenv"
dotenv.config()
import { Uploade } from "../../utilts/uploadeExcel.js";
import * as product  from "./product.controller.js";

const router= express.Router();
router.route('/').
post(Uploade('excel'),product.addProduct)

router.route('/:id').
get(product.getProducts)
export default router