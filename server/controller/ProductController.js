const db = require ("../db/models");
const productServices = require ("../Services/ProductServices")

class ProductController{
    //const allProduct = (req, res) => {res.send("Request done allproducts")}
    static async allProduct(req, res){
        try{
            const allProducts = await productServices.allProduct();
            if (allProducts.length > 0){
                return res.status(200).json(allProducts)
            } else {
                return res.status(404).json({message: 'O servidor não pode encontrar os Produtos solicitado'});
            }
        }catch (error) {
            throw error;
        }
    }
    //const productById = (req, res) => {res.send("Request done productById")}
    static async productById(req, res) {
        const {id} = req.params;
        try{
            const productId = await productServices.productById(id);
            if (!productId.length > 0) {
                return res.status(404).json({message: `O servidor não pode encontrar o produto ${id} solicitado`});
            }else {
                return res.status(200).json(productById)
            }
        }catch (error){
            throw error;
        }
    }
    //const addProduct = (req, res) => {res.send("Request done addProduct")}
    static async addProduct(res, req) {
        const addNewProduct = req.body;
        try{
            const createProduct = await productServices.addProduct(addNewProduct);
            return res.status(201).json({message: 'Produto adicionado com sucesso',createProduct})
        }catch (error) {
            throw error;
        }
    }
    //const updateProduct = (req, res) => {res.send("Request done updateProduct")}
    static async updateProduct(req, res) {
        const {id} = req.params;
        const updateAtProduct = req.body;
        try{
            const updateProd = await productServices.updateProduct(id, updateAtProduct)
                if(!updateProd){
                    return res.status(404).json({message: `O servidor não pode alterar o produto ${id} solicitado`});
                } else{
                    return res.status(200).json({message: 'Produto alterado com sucesso',updateProd});
                }
        }catch (error) {
            throw error;
        }
    }
    //const deleteProduct = (req, res) => {res.send("Request done deleteProduct")}
    static async deleteProduct(req, res) {
        const {id} = req.params;
        try{
            const productDelete = await productServices.deleteProduct(id);
            if (productDelete){
                return res.status(200).json({message: 'Produto deletado com sucesso'});
            } else{
                return res.status(404).json({message: `O servidor não pode deletar o produto ${id} solicitado`});
            }
        }catch (error) {
            throw error;
        }
    }
}


//module.exports = { allProduct,productById,addProduct,updateProduct,deleteProduct }
module.exports = ProductController;