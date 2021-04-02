const db = require ("../db/models");

class ProductServices{
    static async allProduct(){
        try{
            return await db.products.findAll();
        }catch (error){
            throw (error)
        }
    }
    static async productById(id){
        try{
            return await db.products.findOne({
                where: {product: Number(id)},
            });
        }catch (error){
            throw error;
        }
    }
    static async addProduct(addNewProduct){
        try{
            return await db.products.create(addNewProduct);
        }catch (error){
            throw error;
        }
    }
    static async updateProduct(id, updateProduct){
        try{
            const updateProd = await db.products.findOne({
                where: {id: Number(id)},
            });

            if (updateProd){
                await db.products.update(updateProduct, {
                    where: {id: Number(id)},
                });
                return updateProduct;
            }
            return null;
        }catch (error){
            throw error;
        }
    }
    static async deleteProduct(id) {
        try{
            const productDelete = await db.products.findOne({
                where: {id: Number(id)},
            });

            if (productDelete){
                const deleteProduct = await db.products.destroy({
                    where: {id: Number(id)},
                });
                return deleteProduct;
            }
        }catch (error){
            throw error;
        }
    }
}

module.exports = ProductServices;