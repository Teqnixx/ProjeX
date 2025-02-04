const express = require("express")
const router = express.Router()

const projexController = require('../controller/projex.controller.js')

router.get("/users", projexController.getAll)

module.exports = router
