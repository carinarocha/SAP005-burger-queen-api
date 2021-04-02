const { Router } = require('express');
const orderController = require('../controller/OrderController');

const router = Router();

//---------------------------------HTTP METHOD: GET--------------------------------------//
//allOrders request
router.get("/orders", orderController.allOrders);
//ordersById request
router.get("/orders/:id", orderController.ordersById);

//---------------------------------HTTP METHOD: POST-------------------------------------//
//addOrders request
router.post("/orders/add", orderController.addOrders);

//---------------------------------HTTP METHOD: PUT--------------------------------------//
//updateOrders request
router.put("/orders/update/:id", orderController.updateOrders);

//---------------------------------HTTP METHOD: DELETE--------------------------------------//
//deleteOrders request
router.put("/orders/delete", orderController.deleteOrders);

module.exports = router