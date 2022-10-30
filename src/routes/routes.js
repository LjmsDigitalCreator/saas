import { Router } from "express";
import { createCategory, getCategory } from "../controllers/category";
import { createCompany, getCompany } from "../controllers/company";
import { createProduct, getProduct } from "../controllers/product";
import { createProvider, getProvider } from "../controllers/provider";
import { createUser, getUser } from "../controllers/user";

const router = Router();

router.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

/* COMPANY */

router.get("/getCompany", getCompany);
router.post("/createCompany", createCompany);

/* USER */

router.get("/getUser", getUser);
router.post("/createUser", createUser);

/* PROVIDER */
router.get("/getProvider", getProvider);
router.post("/createProvider", createProvider);

/* CATEGORY */

router.get("/getCategory", getCategory);
router.post("/createCategory", createCategory);

/* PRODUCT */

router.get("/getProduct", getProduct);
router.post("/createProduct", createProduct);

/* EXPORT */

export default router;
