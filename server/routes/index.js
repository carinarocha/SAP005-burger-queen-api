const { Router } = require('express')
const ExampleRouter = require("./ExampleRouter")
const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')
const OrderRouter = require('./OrderRouter')
const OrderItemsRouter = require('./OrderItems')

const router = Router()

// aqui vai todas as rotas
router.use('/example', ExampleRouter);
router.use("/", UserRouter);
router.use("/", ProductRouter);
router.use("/", OrderRouter);
router.use("/", OrderItemsRouter);

module.exports = router
