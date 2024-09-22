const express   = require('express');
const router    = express.Router();

const { getProducts, getSingleProduct } = require('../controllers/productController');

router.route('/').get(getProducts);
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

module.exports = router;