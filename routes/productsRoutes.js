// Import necessary modules
const express = require('express');
const router = express.Router();
const productsController = require('D:\Work\GitHub Projects\Store Project\controllers\ProductsController.js');

// Define a route to get all products
router.get('/products', productsController.getAllProducts);
router.get('/product/:id', productsController.getProductById);

// Create a new route to insert a product
router.post('/products', productsController.insertProduct);

// Create a new route to delete a product by ID
router.delete('/products/:id', productsController.deleteProduct);

// Create a new route to update a product by ID
router.put('/products/:id', productsController.updateProduct);

// Create a new route to get products with comments
router.get('/products-with-comments', productsController.getProductsWithComments);



// Export the router to be used in the main Express application
module.exports = router;