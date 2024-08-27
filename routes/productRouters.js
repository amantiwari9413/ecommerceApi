import express from "express";
const router = express.Router();
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductbyid,
  getAllproduct,
} from "../controllers/productController.js";


router.route('/allProduct').get( getAllproduct);
router.route(":id").get(getProductbyid);
router.route("update/:id").put(updateProduct);
router.route("delete/:id").delete(deleteProduct);
router.route("/create").post(createProduct);


export default router