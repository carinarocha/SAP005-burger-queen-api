const db = require ("../db/models");

class OrderItemsServices{
    static async allOrdersItems(orderId){
        try{
            return await db.orderItems.findAll({
                where: {orderId: Number(orderId)}
            });
        }catch (error){
            throw (error)
        }
    }
    static async ordersItemsById(id){
        try{
            const orderItemsId = await db.orderItems.findOne({
                where: {id: Number(id)},
            });
            return orderItemsId;
        }catch (error){
            throw error;
        }
    }
    static async addOrdersItems(addNewOrderItems){
        try{
            return await db.orderItems.create(addNewOrderItems);
        }catch (error){
            throw error;
        }
    }
    static async updateOrdersItems(id, updateOrdrItems){
        try{
            const updateAtOrdersItems = await db.orderItems.findOne({
                where: {id: Number(id)},
            });

            if (updateAtOrdersItems){
                await db.orders.update(updateOrdrItems, {
                    where: {id: Number(id)},
                });
                return updateOrdrItems;
            }
            return null;
        }catch (error){
            throw error;
        }
    }
    static async deleteOrdersItems(id) {
        try{
            const orderItemsDelete = await db.orderItems.findOne({
                where: {id: Number(id)},
            });
            if (orderItemsDelete){
                const deleteOrdersItems = await db.orderItems.destroy({
                    where: {id: Number(id)},
                });
                return deleteOrdersItems;
            }
            return null;
        }catch (error){
            throw error;
        }
    }
}

module.exports = OrderItemsServices;