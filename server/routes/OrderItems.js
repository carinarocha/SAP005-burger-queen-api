const { Router } = require('express');
const orderItemsController = require('../controller/OrderItemsController');

const router = Router();

//---------------------------------HTTP METHOD: GET--------------------------------------//
//allOrdersItems  request
router.get("/ordersItems/:orderId", orderItemsController.allOrdersItems);
//ordersItemsById request
router.get("/ordersItems/:id", orderItemsController.ordersItemsById);

//---------------------------------HTTP METHOD: POST-------------------------------------//
//addOrdersItems request
router.post("/ordersItems/add", orderItemsController.addOrdersItems);

//---------------------------------HTTP METHOD: PUT--------------------------------------//
//updateOrdersItems request
router.put("/ordersItems/update/:id", orderItemsController.updateOrdersItems);

//---------------------------------HTTP METHOD: DELETE--------------------------------------//
//deleteOrdersItems request
router.delete("/ordersItems/:id", orderItemsController.deleteOrdersItems);

module.exports = router