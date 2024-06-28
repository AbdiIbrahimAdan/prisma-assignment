import { Router } from "express";
import { getAllProduct, getSingleProduct, createProduct, updatingProduct, deletingProduct } from "../controllers/product.controllers.js";

const router = Router();
router.get("/", getAllProduct).get("/:id", getSingleProduct).post("/", createProduct).patch("/:id", updatingProduct).delete("/:id", deletingProduct)


export default router;