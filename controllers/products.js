const product = require('../models/product')
const getAllProductsStatic = async (req, res)=>{
const products = await product.find({
    name: 'vase table'
})
    res.status(200).json({products, nbHits: products.length})
}
const getAllProducts = async (req, res)=>{
    const products = await product.find(req.query)
    //console.log(req.query)
    res.status(200).json({products, nbHits: products.length})
}
module.exports = {
    getAllProducts,
    getAllProductsStatic
}







