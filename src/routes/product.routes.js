import { Router } from "express";
import {PrismaClient} from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();
router.get("/", (req, res) =>{
    res.send("get all the product");
})

router.get("/:id", (req, res) =>{
    res.send("get single product");
})

router.post("/", async(req, res) =>{
   try{
        const{productThumbnail, productTitle, productDescription, productCost, onOffer } = req.body;
        const newProduct = await prisma.product.create({
            data: {
                productThumbnail, 
                productTitle, 
                productDescription, 
                productCost, 
                onOffer
            }
        })
        res.status(201).json(newProduct);
    }catch(e){
        res.status(500).json({success:false, message:e.message})
    }
})
router.patch("/:id", (req, res) =>{
    res.send("update a product");
})
router.delete("/:id", (req, res) =>{
    res.send("delete a product");
})



export default router;


