import { globalErrorMiddleware } from "./middleware/globalErrrorMiddleWare.js"
import router from "./moduels/product/product.routes.js"
import express from "express"


export const bootstrap = (app)=>{

    app.get("/", (req, res) => {
        res.send({message: 'Hello World!'})
    })

    app.use(express.json());
app.use('/api/v1/product',router)



    app.all('*', (req, res, next)=>{
        next(new AppError('Not found endpoint', 404))
    })


    app.use(globalErrorMiddleware)
}