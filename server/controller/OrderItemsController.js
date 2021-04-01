const db = require ("../db/models");
const orderItemsServices = require ("../Services/OrderItemsServices")

class OrderItemsController{
    //const allOrdersItems = (req, res) => {res.send("Request done")}
    static async allOrdersItems(req, res){
        const {orderItemsId} = req.params;
        try{
            all_OrdersItems = await orderItemsServices.allOrdersItems(orderItemsId);
            if (all_OrdersItems.length > 0){
                return res.status(200).json(all_OrdersItems)
            }else {
                return res.status(404).json({message: 'O servidor não pode encontrar as OrdersItems solicitadas'});
            }
        }catch (error) {
            throw error;
        }
    }
    //const ordersItemsById = (req, res) => {res.send("Request done")}
    static async ordersItemsById(req, res) {
        const {id} = req.params;
        try{
            const orderItemsId = await orderItemsServices.ordersItemsById(id);
            if (!orderItemsId) {
                return res.status(404).json({message: `O servidor não pode encontrar a OrderItem ${id} solicitada`});
            }else {
                return res.status(200).json(orderItemsId)
            }
        }catch (error){
            throw error;
        }
    }
    //const addOrdersItems = (req, res) => {res.send("Request done")}
    static async addOrdersItems(res, req) {
        const addNewOrderItems = req.body;
        try{
            const createOrdersItems = await orderItemsServices.addOrdersItems(addNewOrderItems);
            return res.status(201).json({message: 'OrderItem adicionada com sucesso',createOrdersItems})
        }catch (error) {
            throw error;
        }
    }
    //const updateOrdersItems = (req, res) => {res.send("Request done")}
    static async updateOrdersItems(req, res) {
        const {id} = req.params;
        const updateAtOrderItems = {qtd: req.body.qtd};
        try{
            const updateOrdrItems = await orderItemsServices.updateOrdersItems(id, updateAtOrderItems)
                if(!updateOrdrItems){
                    return res.status(404).json({message: `O servidor não pode alterar a OrderItem ${id} solicitada`});
                } else{
                    return res.status(200).json({message: 'OrderItem alterada com sucesso',updateOrdrItems});
                }
        }catch (error) {
            throw error;
        }
    }
    //const deleteOrdersItems = (req, res) => {res.send("Request done")}
    static async deleteOrdersItems(req, res) {
        const {id} = req.params;
        try{
            const orderItemsDelete = await orderItemsServices.deleteOrdersItems(id);
            if (orderItemsDelete){
                return res.status(200).json({message: 'OrderItem deletada com sucesso'});
            }else {
                return res.status(404).json({message: `O servidor não pode deletar a OrderItem ${id} solicitada`});
            }
        }catch (error) {
            throw error;
        }
    }
}

//module.exports = { allOrdersItems,ordersItemsById,addOrdersItems,updateOrdersItems,deleteOrdersItems }
module.exports = OrderItemsController;