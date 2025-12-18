import express from "express";
import {
  getProducts,
  checkout
} from "../controllers/productsController.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/checkout", checkout);

export default router;
