
const ProductModel = require('../models/productModel');

// Get Products API - /api/v1/products

exports.getProducts = async (req, res, next) => {

  const page = parseInt(req.query.page || 1);
  const limit = parseInt(req.query.limit || 12);
  const skip = (page-1) * limit;

  const query = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {}

  const products = await ProductModel.find(query)
  .skip(skip)
  .limit(limit)

  res.json({
    success: true,
    products
  })
}


// Get Single Products API - /api/v1/product/:id

exports.getSingleProduct = async (req, res, next) => {

  try {
    const getID = req.params.id;
    const product = await ProductModel.findById(getID);
    res.json({
      success: true,
      product
    })
  }
  catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    })
  }

}