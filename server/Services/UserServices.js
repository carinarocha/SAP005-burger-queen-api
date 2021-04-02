const db = require ("../db/models");

class UserServices {
    static async allUsers() {
            try{
                return await db.users.findAll();
            }catch (error) {
                throw error;
            }
        }

//const userById = (req, res) => {res.send("Request done userById")}
    static async userById(id) {
            try{
                const user = await db.users.findOne({
                    where: {id: Number(id)},
                });
                    return user;
            }catch (error) {
                throw error;
            }
        }
//const addUser = (req, res) => {res.send("Request done addUser")}
    static async addUser(addNewUser) {
        try{
            return await db.users.create(addNewUser);
        }catch (error) {
            throw error;
        }
    }
//const updateUser = (req, res) => {res.send("Request done updateUser")}
    static async updateUser(id, updteUser) {
        try{
            const updateUsr = await db.users.findOne({
                where: {id: Number(id)},
            });
    
            if (updateUsr){
                await db.users.update(updteUser, {
                    where: {id: Number(id)},
                });
                return updteUser
                }
            return null;
        }catch (error) {
            throw error;
        }
    }

//const deleteUser = (req, res) => {res.send("Request done deleteUser")}
    static async deleteUser(id) {
        try{
            const userDelete = await db.users.destroy({
                where: {id: Number(id)},
            });
            return userDelete;
        }catch (error) {
            throw error;
        }
    }
}
module.exports = UserServices;