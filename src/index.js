import express from 'express';
import productRouter from './routes/product.routes.js';
import { config } from 'dotenv';
const app = express();
app.use(express.json());

app.use("/product", productRouter);
config();

app.listen(3005, (req, res)=>{
    console.log("Server running on port 3005.......");
})