import express from 'express';
import productRouter from './routes/product.routes.js';
const app = express();

app.use("/product", productRouter);

app.listen(3005, (req, res)=>{
    console.log("Server running on port 3005.......");
})