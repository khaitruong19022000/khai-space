
const express = require('express')
const router = express.Router()

const loginFrontEndMiddleware = require('../../middleware/login_frontend')

const ThanhToanController = require(`${__path_controllers}frontend/thanh_toan_controller`)

    
router
    .route('/')
    .get(loginFrontEndMiddleware, ThanhToanController.CheckOut) 
    // .get(HomeController.CheckOut)

module.exports = router;