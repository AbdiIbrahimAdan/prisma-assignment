import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();
export const getAllProduct = async(req, res) =>{
    try{
        const product = await prisma.product.findMany();
        res.status(200).json(product)
    }catch(e){
        res.status(500).json({success:false, message:e.message})
    
    }
};
export const getSingleProduct = async(req, res) =>{
    const {id } = req.params
    try{
        const product = await prisma.product.findFirst({
            where: {id: id},
            select: {
                productThumbnail:true, 
                productTitle:true, 
                productDescription:true,
                productCost:true, 
                onOffer:true
            }
        })
        res.status(200).json(product)
    }catch(e){
        res.status(500).json({success:false, message:e.message})
    
    }
};

export const createProduct = async(req, res) =>{
    try{
        const{productThumbnail, productTitle, productDescription, productCost, onOffer } = req.body;
        const newProduct = await prisma.product.create({
            data: {
                
                productThumbnail, 
                productTitle, 
                productDescription,
                productCost, 
                onOffer
            },
            select:{
                id:true,
                productThumbnail: true,
                productTitle:true, 
                productDescription:true, 
                productCost:true, 
                onOffer:true
            }
        })
        res.status(200).json(newProduct);
    }catch(e){
        res.status(500).json({success:false, message:e.message})
    }
};

export const updatingProduct = async(req, res) =>{
    const{productThumbnail, productTitle, productDescription, productCost, onOffer } = req.body;
    const {id} = req.params;
    try{
        let updateProduct;
        if(productThumbnail){
            updateProduct = await prisma.product.update({
               where: {id: id},
               data: {productThumbnail:productThumbnail}
             
            })
        }
        if(productTitle){
            updateProduct = await prisma.product.update({
               where: {id: id},
               data: {productTitle:productTitle}
             
            })
        }
        if( productDescription){
            updateProduct = await prisma.product.update({
               where: {id: id},
               data: { productDescription: productDescription}
             
            })
        }

         if(productCost){
            updateProduct = await prisma.product.update({
               where: {id: id},
               data: {productCost:productCost}
             
            })
        }

         if(onOffer){
             updateProduct = await prisma.product.update({
                where: {id: id},
                data: {onOffer:onOffer}
            })
        }
        res.status(200).json(updateProduct)

    }catch(e){
        res.status(500).json({success:false, message:e.message})
    }
};

export const deletingProduct =  async(req, res) =>{
    const { id } = req.params;
    try{
     const deleteProduct = await prisma.product.delete({
         where: {id: id},
         select:{
             productThumbnail:true, 
             productTitle:true, 
             productDescription:true,
             productCost:true, 
             onOffer:true,
             id:true
         }
     });
     res.status(200).json(deleteProduct);
    } catch(e){
     res.status(500).json({success:false, message:e.message})
    }
 };