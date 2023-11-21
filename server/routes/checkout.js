const express = require('express');
const {
    Subscribe
} = require('../controller/subscribe');
const checkoutRouter = express.Router()


//routes@   /api/checkout
//access@   private
checkoutRouter.post('/', Subscribe)

module.exports = checkoutRouter