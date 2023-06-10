const express = require("express")
const Flutterwave = require("flutterwave-node-v3")
const Order = require("../models/order")
const Cart = require("../models/cart")
const User = require("../models/user")
const Auth = require("../middleware/auth")


const router = new express.Router()

const flw = new Flutterwave(process.env.FLUTTERWAVE_V3_PUBLIC_KEY, process.env.FLUTTERWAVE_V3_SECRET_KEY)
//get orders






router.get('/orders', Auth, async (req, res) => {
    const owner = req.user._id;
    try {
    const order = await Order.find({ owner: owner }).sort({ date: -1 });
    res.status(200).send(order)
    } catch (error) {
    res.status(500).send()
    }
    })
    

    // Checkout

// Flutterwave SDK.