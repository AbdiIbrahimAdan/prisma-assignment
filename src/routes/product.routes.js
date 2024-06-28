import { Router } from "express";
import {PrismaClient} from '@prisma/client';
import { getAllProduct, getSingleProduct, createProduct, updatingProduct, deletingProduct } from "../controllers/product.controllers.js";

const router = Router();
const prisma = new PrismaClient();
router.get("/", getAllProduct).get("/:id", getSingleProduct).post("/", createProduct).patch("/:id", updatingProduct).delete("/:id", deletingProduct)


export default router;