const db = require ("../db/models");

class OrderServices{
    static async allOrders(){
        try{
            return await db.orders.findAll();
        }catch (error){
            throw (error)
        }
    }
    static async ordersById(id){
        try{
            const orderId = await db.orders.findOne({
                where: {orders: Number(id)},
            });
            return orderId;
        }catch (error){
            throw error;
        }
    }
    static async addOrders(addNewOrder){
        try{
            return await db.orders.create(addNewOrder);
        }catch (error){
            throw error;
        }
    }
    static async updateOrders(id, updateAtOrder){
        try{
            const updateOrdr = await db.orders.findOne({
                where: {id: Number(id)},
            });

            if (updateOrdr){
                await db.orders.update(updateAtOrder, {
                    where: {id: Number(id)},
                });
                return updateAtOrder;
            }
            return null;
        }catch (error){
            throw error;
        }
    }
    static async deleteOrders(id) {
        try{
            const orderDelete = db.orders.findAll({
                where: {id: Number(id)},
            });
            if (orderDelete){
                const deleteOrders = await db.orders.destroy({
                    where: {id: Number(id)},
                });
            }
            return deleteOrders;
        }catch (error){
            throw error;
        }
    }
}

module.exports = OrderServices;