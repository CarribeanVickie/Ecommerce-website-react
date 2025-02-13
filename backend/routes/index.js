const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require("../controller/user/userSignin");
const authToken = require("../middleware/authToken");
const userDetailsController = require("../controller/user/userDetails");
const userLogout = require("../controller/user/userLogout");
const allUsers = require("../controller/user/allUsers");
const updateUser = require("../controller/user/updateUser");
const UploadProductController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryProduct = require("../controller/product/getCategoryProductOne");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct");
const getProductDetails = require("../controller/product/getProductDetails");
const addToCartController = require("../controller/user/addToCartController");
const countAddToCartProduct = require("../controller/user/countAddToCartProduct");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct");
const searchProduct = require("../controller/product/searchProduct");
const filterProductController = require('../controller/product/filterProduct');
const productCheckout = require("../controller/user/productCheckout");



router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

//admin panel
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

//upload product
router.post("/upload-product", authToken, UploadProductController);

//display product
router.get("/get-product", getProductController);
router.get("/get-categoryProduct",getCategoryProduct);
router.post("/category-product",getCategoryWiseProduct);
router.post("/product-details",getProductDetails);

//update product
router.post("/update-product", authToken, updateProductController);

//user Add to Cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)

// search products
router.get("/search-product",searchProduct)

// FILTER PRODUCTS
router.post("/filter-product",filterProductController)

//CHECKOUT
router.post("/checkout-payment",authToken,productCheckout)


module.exports = router;
