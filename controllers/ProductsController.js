const db = require('../config/config');


function getAllProducts(req, res) {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) { 
            console.error(err);
            return res.status(500).json({ message: 'Error fetching products'  });
        }
      })}


function getProductById(req, res) {

const productId = req.params.id;

db.query('SELECT * FROM productos WHERE id = ?', [productId], (err,
results) => {
if (err) {
console.error(err);
res.status(500).json({ message: 'Error fetching the product'
});
return;
}

if (results.length === 0) {
res.status(404).json({ message: 'Product not found' });
return;
}


res.json(results[0]);
});
}

function insertProduct(req, res) {
    // Extract product data from the request body
    const productData = req.body;
  
    // Execute an SQL query to insert the product into the database
    db.query('INSERT INTO products SET ?', productData, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error inserting the product' });
      }
      return res.status(201).json({ message: 'Product inserted successfully', data: result });
    });
  }
  
  function deleteProduct(req, res) {
    // Extract the product ID from the request parameters
    const productId = req.params.id;
  
    // Execute an SQL query to delete the product by ID
    db.query('DELETE FROM products WHERE id = ?', [productId], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error deleting the product' });
      }
      return res.status(200).json({ message: 'Product deleted successfully' });
    });
  }
  
  function updateProduct(req, res) {
    // Extract the product ID from the request parameters
    const productId = req.params.id;
    
    // Extract updated product data from the request body
    const updatedProductData = req.body;
  
    // Execute an SQL query to update the product by ID
    db.query('UPDATE products SET ? WHERE id = ?', [updatedProductData, productId], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error updating the product' });
      }
      return res.status(200).json({ message: 'Product updated successfully' });
    });
  }

  function getProductsWithComments(req, res) {
    // Execute an SQL query with an INNER JOIN to retrieve products and comments
    db.query('SELECT products.*, comments.comment_text FROM products INNER JOIN comments ON products.id = comments.product_id', (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error fetching products with comments' });
      }
      return res.status(200).json({ data: results });
    });
  }
  
  

  module.exports = {
    getAllProducts,
    getProductById,
    insertProduct,
    deleteProduct,
    updateProduct,
    getProductsWithComments
  };