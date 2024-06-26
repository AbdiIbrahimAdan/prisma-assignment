import { Router } from "express";


const router = Router();
router.get("/", (req, res) =>{
    res.send("get all the product");
})

router.get("/:id", (req, res) =>{
    res.send("get single product");
})

router.post("/", (req, res) =>{
    res.send("create a new product");
})
router.patch("/:id", (req, res) =>{
    res.send("update a product");
})
router.delete("/:id", (req, res) =>{
    res.send("delete a product");
})



export default router;