const db = require ("../db/models");
const orderServices = require ("../Services/OrderServices")

class OrderController{
    //const allOrders = (req, res) => {res.send("Request done")}
    static async allOrders(req, res){
        try{
            const all_Orders = await orderServices.allOrders();
            if (allOrders.length > 0){
                return res.status(200).json(all_Orders)
            }else {
                return res.status(404).json({message: 'O servidor não pode encontrar as Orders solicitadas'});
            }
        }catch (error) {
            throw error;
        }
    }
    //const ordersById = (req, res) => {res.send("Request done")}
    static async ordersById(req, res) {
        const {id} = req.params;
        try{
            const orderId = await orderServices.ordersById(id);
            if (!orderId) {
                return res.status(404).json({message: `O servidor não pode encontrar a Order ${id} solicitada`});
            }else {
                return res.status(200).json(ordersById)
            }
        }catch (error){
            throw error;
        }
    }
    //const addOrders = (req, res) => {res.send("Request done")}
    static async addOrders(res, req) {
        const addNewOrder = req.body;
        try{
            const createOrder = await orderServices.addOrders(addNewOrder);
            return res.status(201).json({message: 'Order adicionada com sucesso',createOrder})
        }catch (error) {
            throw error;
        }
    }
    //const updateOrders = (req, res) => {res.send("Request done")}
    static async updateOrders(req, res) {
        const {id} = req.params;
        const updateAtOrder = {status: req.body.status};
        try{
            const updateOrdr = await orderServices.updateOrders(id, updateAtOrder)
                if(!updateOrdr){
                    return res.status(404).json({message: `O servidor não pode alterar a Order ${id} solicitada`});
                } else{
                    return res.status(200).json({message: 'Order alterada com sucesso',updateOrdr});
                }
        }catch (error) {
            throw error;
        }
    }
    //const deleteOrders = (req, res) => {res.send("Request done")}
    static async deleteOrders(req, res) {
        const {id} = req.params;
        try{
            const orderDelete = await orderServices.deleteOrders(id);
            if (orderDelete){
                return res.status(200).json({message: 'Order deletada com sucesso'});
            }else {
                return res.status(404).json({message: `O servidor não pode deletar as Orders solicitadas`});
            }
        }catch (error) {
            throw error;
        }
    }
}

//module.exports = { allOrders,ordersById,addOrders,updateOrders,deleteOrders }
module.exports = orderServices;