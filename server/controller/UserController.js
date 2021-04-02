const db = require ("../db/models");
const userServices = require ("../Services/UserServices")

class UserController {
static async allUsers(req, res){
        try{
            const all_Users = await userServices.allUsers();
            if (all_Users.length > 0){
                return res.status(200).json(all_Users)
            } else{
                return res.status(404).json({message: 'O servidor não pode encontrar os Users solicitados'});
            }
        }catch (error) {
            throw error;
        }
    }
//const userById = (req, res) => {res.send("Request done userById")}
static async userById(req, res) {
    const {id} = req.params;
    try{
        const userId = await userServices.userById(id);
        if (!userId) {
            return res.status(404).json({message: `O servidor não pode encontrar o user ${id} solicitado`});
        }else {
            return res.status(200).json(userById)
        }
    }catch (error){
        throw error;
    }
}
//const addUser = (req, res) => {res.send("Request done addUser")}
static async addUser(res, req) {
    const addNewUser = req.body;
    try{
        const createUser = await userServices.addUser(addNewUser);
        return res.status(201).json({message: 'User adicionado com sucesso',createUser})
    }catch (error) {
        throw error;
    }
}
//const updateUser = (req, res) => {res.send("Request done updateUser")}
static async updateUser(req, res) {
    const {id} = req.params;
    const updateAtUser = req.body;
    try{
        const updateUsr = await userServices.updateUser(id, updateAtUser)
            if(!updateUser){
                return res.status(404).json({message: `O servidor não pode alterar o user ${id} solicitado`});
            } else{
                return res.status(200).json({message: 'User alterado com sucesso',updateUsr});
            }
    }catch (error) {
        throw error;
    }
}
//const deleteUser = (req, res) => {res.send("Request done deleteUser")}
static async deleteUser(req, res) {
    const {id} = req.params;
    try{
        const userDelete = await userServices.deleteUser(id);
        if (userDelete){
            return res.status(200).json({message: 'User deletado com sucesso'});
        }else {
            return res.status(404).json({message: `O servidor não pode deletar o User ${id} solicitado`});
        }
    }catch (error) {
        throw error;
    }
}
}
//module.exports = { allUsers,userById,addUser,updateUser,deleteUser }
module.exports = UserController;